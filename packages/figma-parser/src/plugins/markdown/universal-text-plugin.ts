import { isTextNode, SingleTextNode } from '../document/types';
import { FetchContentPlugin } from './types';
import { markdownAST } from '../../shared/markdown-ast.util';

export const universalTextPlugin: FetchContentPlugin = {
  test: (node) => !!node.findDeep(isTextNode),
  transform: (node) => {
    const textNodes = node.filterDeep(isTextNode) as SingleTextNode[];
    const rootAst = markdownAST(...textNodes);
    return rootAst.children;
  },
};
