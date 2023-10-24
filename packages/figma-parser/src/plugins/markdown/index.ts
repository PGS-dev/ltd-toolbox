import { FigmaParserPlugin } from '../../types.js'
import { SingleNode } from '../document/single-node.js'
import { FigmaParser } from '../../parser.js'
import { Root, RootContent } from 'mdast'
import { universalTextPlugin } from './text-content-plugins.js'
import { root } from 'mdast-builder'
import { FetchContentPlugin } from './types.js'

export class Markdown implements FigmaParserPlugin {
  host: FigmaParser;

  constructor(host: FigmaParser) {
    this.host = host

    this.host.fetchContent = this.fetchContent.bind(this)
    this.host.fetchContentWith = this.fetchContentWith.bind(this)
  }

  fetchContent(node: SingleNode): Root {
    return this.fetchContentWith(node)
  }

  fetchContentWith(node: SingleNode, plugins: FetchContentPlugin[] = []): Root {
    const nodes: Root = root() as Root
    node.children.each((childNode) => {
      const plugin = [...plugins, universalTextPlugin].find(plugin => plugin.test(childNode))
      const value = plugin.transform(childNode) as RootContent

      if (Array.isArray(value) && value.length > 0 ) {
        if (!value.every(node => 'type' in node)) throw new Error('Expected only mdast nodes as an result of transform.')
        nodes.children.push(...value)
        return
      }

      if ('type' in nodes) {
        nodes.children.push(value)
      }

      return
    })

    return nodes
  }
}

declare module "../../parser.ts" {
  interface FigmaParser {
    fetchContent(node: SingleNode): Root
    fetchContentWith(node: SingleNode): Root
  }
  interface FigmaParserOptions {
    textContentsPlugins?: FetchContentPlugin[],
  }
}
