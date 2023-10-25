import type {
  FigmaParserPlugin,
  FigmaParserPluginConstructor,
  FigmaParserPluginFunction,
  FigmaParserPluginInstance,
  FigmaPAT
} from './types.d.js'
import { Document } from './plugins/document/index.js'
import { deepMerge } from './shared/deep-merge.js'

export interface FigmaParserOptions {
  plugins: FigmaParserPluginConstructor[],
}

export class FigmaParser {
  plugins: FigmaParserPlugin[] = []
  private options: FigmaParserOptions = {
    plugins: [Document]
  }

  constructor(private token: FigmaPAT, userOptions?: Partial<FigmaParserOptions>) {
    if (!token) throw new Error('You need to provide Personal Access Token for Figma.ś')

    this.options = deepMerge(this.options, userOptions)

    this.options.plugins.forEach(plugin => this.use(plugin))
  }

  async request<Response = object>(path: string, params: object = null): Promise<Response> {
    let url = `https://api.figma.com/v1/${path}`
    const headers = new Headers({
      'X-Figma-Token': this.token
    })

    if (params && Object.keys(params).length > 0) {
      url += '?' + ( new URLSearchParams( params as any ) ).toString();
    }

    return fetch(url,{headers})
      .catch(e => {
        throw new Error(e.message)
      })
      .then(response => {
        if ( !response.ok ) throw new Error(response.statusText)
        return response.json() as Response
      })
  }

  use(...plugins: FigmaParserPluginInstance []  ) {
    plugins.forEach(plugin => {
      let pluginInstance

      try {
        pluginInstance = new (plugin as FigmaParserPluginConstructor)(this)
      } catch (e) {
        if (typeof plugin !== 'function' ) throw new Error(`Provided plugin is not a constructor nor a function.`)

        pluginInstance = (plugin as FigmaParserPluginFunction)(this)
      }

      this.plugins.push(pluginInstance)
    })
  }
}

export interface FigmaRequestOptions {
  path: string;
  params: Record<string, string> | object
}





