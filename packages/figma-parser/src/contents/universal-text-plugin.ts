import { isTextNode } from '../document/types';
import { markdownAST } from '../shared/markdown-ast.util';
import { FetchContentPlugin } from './types';

export const universalTextPlugin: FetchContentPlugin = {
  test: (node) => !!node.findDeep(isTextNode),
  transform: (node) => {
    const textNodes = node.filterDeep(isTextNode);
    const rootAst = markdownAST(...textNodes);
    return rootAst.children;
  },
};
