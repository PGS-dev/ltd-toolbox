import { FileResponse } from '../full-figma-types';
import { deepMerge } from '../shared/deep-merge';
import { SingleNode } from './single-node';
import { FigmaParserPlugin, FigmaParserPluginConstructor, FigmaParserPluginFunction, NodeCollectionMixin, NodeMixin } from './types';

export type FigmaPAT = string;
// export type FigmaPAT = `figd_${string}`

export interface FigmaParserOptions {
  plugins: FigmaParserPlugin[];
  nodeMixins: NodeMixin[];
  nodeCollectionMixins: NodeCollectionMixin[];
}

export class FigmaParser {
  plugins: FigmaParserPlugin[] = [];

  readonly options: FigmaParserOptions = {
    plugins: [],
    nodeMixins: [],
    nodeCollectionMixins: [],
  };

  constructor(
    private token: FigmaPAT,
    userOptions: Partial<FigmaParserOptions> = {}
  ) {
    if (!token) throw new Error('You need to provide Personal Access Token for Figma.');

    this.options = deepMerge(this.options, userOptions) as FigmaParserOptions;

    this.options.plugins.forEach((plugin) => this.loadPlugin(plugin));
  }

  async request<Response = object>(path: string, params?: Record<string, string>): Promise<Response> {
    let url = `https://api.figma.com/v1/${path}`;
    const headers = new Headers({
      'X-Figma-Token': this.token,
    });

    if (params && Object.keys(params).length > 0) {
      url += '?' + new URLSearchParams(params).toString();
    }

    return fetch(url, { headers })
      .catch((e) => {
        throw new Error(e.message);
      })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json() as Response;
      });
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

      this.plugins.push(pluginInstance as FigmaParserPlugin);
    });
  }

  async document(fileId: string): Promise<SingleNode> {
    const file: FileResponse = await this.request(`files/${fileId}`);
    const nodeCtor = this.options.nodeMixins.reduce((wrapped, mixin) => mixin(wrapped), SingleNode);
    return new nodeCtor(file.document, this.options.nodeMixins, this.options.nodeCollectionMixins);
  }
}

export interface FigmaRequestOptions {
  path: string;
  params: Record<string, string> | object;
}
