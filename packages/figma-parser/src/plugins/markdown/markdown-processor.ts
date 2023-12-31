import { Root, RootContent } from 'mdast';
import { root } from 'mdast-builder';
import { toMarkdown } from 'mdast-util-to-markdown';
import { SingleNode, hasChildren, isSingleNode } from '../nodes';
import { FetchContentPlugin } from './types';
import { universalTextPlugin } from './universal-text-plugin';

export class MarkdownProcessor {
  constructor(private node: SingleNode) {
    if (!isSingleNode(node)) throw new Error('Expected instance of SingleNode!');
  }

  toAST(plugins: FetchContentPlugin[] = []): Root {
    const nodes: Root = root() as Root;
    if (!hasChildren(this.node)) return nodes;

    this.node.children.each((childNode) => {
      const plugin = [...plugins, universalTextPlugin].find((plugin) => plugin.test(childNode));

      if (!plugin) return;

      const value = plugin.transform(childNode) as RootContent;

      if (Array.isArray(value) && value.length > 0) {
        if (!value.every((node) => 'type' in node)) throw new Error('Expected mdast node, array of mdast ndoes, or undefined as an result of transform.');
        nodes.children.push(...value);
        return;
      }

      if ('type' in nodes) {
        nodes.children.push(value);
      }

      return;
    });

    return nodes;
  }

  toMarkdown(plugins: FetchContentPlugin[] = []) {
    const markdownAST = this.toAST(plugins);
    return toMarkdown(markdownAST);
  }
}
