import { isTextNode, SingleTextNode } from '../document/types.ts';
import { FetchContentPlugin } from './types.ts';
import { markdownAST } from '../../shared/markdown-ast.util.ts';

export const universalTextPlugin: FetchContentPlugin = {
  test: (node) => !!node.findDeep(isTextNode),
  transform: (node) => {
    const textNodes = node.filterDeep(isTextNode) as SingleTextNode[];
    const rootAst = markdownAST(...textNodes);
    return rootAst.children;
  },
};
