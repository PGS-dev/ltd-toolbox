import type {
  FigmaParserPluginConstructor,
  FigmaParserPluginFunction,
  FigmaParserPluginInstance,
  FigmaPAT,
} from './types';
import { DocumentPlugin } from './plugins/document/index';
import { deepMerge } from './shared/deep-merge';

export interface FigmaParserOptions {
  plugins: FigmaParserPluginInstance[];
}

export class FigmaParser {
  plugins: FigmaParserPluginInstance[] = [];
  defaultPlugins: FigmaParserPluginInstance[] = [DocumentPlugin]

  private options: FigmaParserOptions = {
    plugins: [],
  };

  constructor(
    private token: FigmaPAT,
    userOptions: Partial<FigmaParserOptions> = {},
  ) {
    if (!token)
      throw new Error("You need to provide Personal Access Token for Figma.");

    this.options = deepMerge(this.options, userOptions);

    [...this.options.plugins, ...this.defaultPlugins].forEach((plugin) => this.loadPlugin(plugin));
  }

  async request<Response = object>(
    path: string,
    params?: object,
  ): Promise<Response> {
    let url = `https://api.figma.com/v1/${path}`;
    const headers = new Headers({
      "X-Figma-Token": this.token,
    });

    if (params && Object.keys(params).length > 0) {
      url += "?" + new URLSearchParams(params as any).toString();
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

  private loadPlugin(...plugins: FigmaParserPluginInstance[]) {
    plugins.forEach((plugin) => {
      let pluginInstance;

      try {
        pluginInstance = new (plugin as FigmaParserPluginConstructor)(this);
      } catch (e) {
        if (typeof plugin !== "function")
          throw new Error(
            `Provided plugin is not a constructor nor a function.`,
          );

        pluginInstance = (plugin as FigmaParserPluginFunction)(this);
      }

      this.plugins.push(pluginInstance as FigmaParserPluginInstance);
    });
  }
}

export interface FigmaRequestOptions {
  path: string;
  params: Record<string, string> | object;
}
