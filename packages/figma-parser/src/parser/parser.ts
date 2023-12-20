import { StylesPlugin } from '../plugins/styles'
import { StylesProcessor } from '../plugins/styles/styles-processor'
import { FileResponse } from '../types'
import { HardCache } from './hard-cache'
import { loggerFactory } from './logger'
import { SingleNode } from './single-node'
import {
  FigmaParserPlugin,
  FigmaParserPluginConstructor,
  FigmaParserPluginFunction,
  FigmaParserPluginInterface,
  NodeCollectionMixin,
  NodeMixin
} from './types'

export type FigmaPAT = string;
// export type FigmaPAT = `figd_${string}`

export interface FigmaParserOptions {
  plugins: FigmaParserPlugin[];
  nodeMixins: NodeMixin[];
  nodeCollectionMixins: NodeCollectionMixin[];
  hardCache?: boolean;
  cacheDir?: string;
  cacheLifetime: number;
}

export interface FigmaRequestOptions {
  path: string;
  params: Record<string, string> | object;
}


const logger = loggerFactory('Figma Parser');

export class FigmaParser {
  plugins: Map<string, FigmaParserPluginInterface> = new Map();
  cache: HardCache;

  readonly options: FigmaParserOptions = {
    plugins: [StylesPlugin],
    nodeMixins: [],
    nodeCollectionMixins: [],
    hardCache: true,
    cacheDir: './cache',
    cacheLifetime: 1000 * 60 * 60 * 8, // 8 hours
  };

  constructor(
    private token: FigmaPAT,
    userOptions: Partial<FigmaParserOptions> = {}
  ) {
    if (!token) throw new Error('You need to provide Personal Access Token for Figma.');

    const defaultPlugins = this.options.plugins
    this.options = { ...this.options, ...userOptions } as FigmaParserOptions;
    this.options.plugins = [...defaultPlugins, ...(userOptions?.plugins || [])]


    this.cache = new HardCache(this.options.cacheDir, this.options.cacheLifetime);

    this.options.plugins.forEach((plugin) => this.loadPlugin(plugin));
  }

  async request<Response = object>(path: string, params?: Record<string, string>): Promise<Response> {
    const cached = this.cache.get({ path, params });
    if (cached && this.options.hardCache) {
      logger.info('(Using cache)', `Found cached request. Retrieving from cache.`);
      return (await Promise.resolve(JSON.parse(cached))) as Response;
    }

    let url = `https://api.figma.com/v1/${path}`;
    const headers = new Headers({
      'X-Figma-Token': this.token,
    });

    if (params && Object.keys(params).length > 0) {
      url += '?' + new URLSearchParams(params).toString();
    }

    logger.info(`Requesting ${url}...`);
    const data = await fetch(url, { headers })
      .catch((e) => {
        throw new Error(e.message);
      })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json() as Response;
      });

    if (this.options.hardCache) {
      logger.info('(Using cache)', `Caching request.`);
      this.cache.set({ path, params }, JSON.stringify(data, null, 2));
    }

    return data as Response;
  }

  private loadPlugin(...plugins: FigmaParserPlugin[]) {
    plugins.forEach((plugin) => {
      let pluginInstance;

      try {
        pluginInstance = new (plugin as FigmaParserPluginConstructor)(this);
      } catch (e) {
        if (typeof plugin !== 'function') throw new Error(`Provided plugin is not a constructor nor a function.`);

        pluginInstance = (plugin as FigmaParserPluginFunction)(this);
      }
      const pluginName = pluginInstance.name || plugin.name

      this.plugins.set(pluginName, pluginInstance);
    });
  }

  async nodes(fileId: string): Promise<SingleNode> {
    const file: FileResponse = await this.request(`files/${fileId}`);
    const nodeCtor = this.options.nodeMixins.reduce((wrapped, mixin) => mixin(wrapped), SingleNode);
    return new nodeCtor(file.document, this.options.nodeMixins, this.options.nodeCollectionMixins);
  }

  async styles(fileId: string): Promise<StylesProcessor> {
    const plugin = this.plugins.get('styles-plugin')! as ReturnType<typeof StylesPlugin>

    return await plugin.styles(fileId)
  }
}
