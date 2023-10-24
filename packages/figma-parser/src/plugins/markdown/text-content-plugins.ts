import { isTextNode, SingleTextNode } from '../document/types.js'
import { FetchContentPlugin } from './types.js'
import { markdownAST } from '../../shared/markdown-ast.util.js'

export const universalTextPlugin: FetchContentPlugin = {
  test: (node) => !!node.findDeep(isTextNode),
  transform: (node) => {
    const textNodes = node.filterDeep(isTextNode) as SingleTextNode[]
    const rootAst = markdownAST(...textNodes)
    return rootAst.children
  }
}
