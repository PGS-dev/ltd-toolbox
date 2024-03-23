import { Node, TextNode } from '@figma/rest-api-spec';
import { combineSchema } from '../shared/combine-schema.util';
import { isEmptyObject } from '../shared/is-empty-object.util';
import { isObject } from '../shared/is-object.util';
import { NodeBase } from '../shared/node.abstract';
import { isTextNode } from '../shared/types';
import type { Getter, ParseTreeOptions, TreeNode } from './types';
import { getNodeDecoratedText } from './utils';

export const isFauxNode = (node: TreeNode): node is TreeNode & { children: [TreeNode] } => {
  return Object.keys(node).length === 1 && 'children' in node && node.children?.length === 1;
};

export class ContentNode<T extends Node = Node> extends NodeBase<T> {
  private defaultGetters: Getter[] = [
    {
      test: (node) => node.children.length === 0,
      get(node) {
        return {
          type: node.raw.type,
          data: node.getRawChildrenText(),
        };
      },
    },
    {
      test: () => true,
      get(node) {
        return {
          type: node.raw.type,
        };
      },
    },
  ];

  /**
   * Parses a Figma node tree, extracting content into a structured tree format. This method facilitates the transformation
   * of Figma layers into document abstract syntax trees (AST), enabling conversion to various formats like Markdown or HTML.
   * Returned type `TreeNode` is compliant with (unist's Node interface)[https://github.com/syntax-tree/unist?tab=readme-ov-file#node],
   * therefore it may be processed with these utils.
   */
  async parseTree(options?: Partial<ParseTreeOptions>): Promise<TreeNode>;
  async parseTree(getters?: Getter[]): Promise<TreeNode>;
  async parseTree(getters?: Getter[], options?: Partial<ParseTreeOptions>): Promise<TreeNode>;
  async parseTree(getters?: Getter[], options?: Partial<ParseTreeOptions>): Promise<TreeNode>;
  async parseTree(gettersOrOptions?: Getter[] | Partial<ParseTreeOptions>, userOptions: Partial<ParseTreeOptions> = {}): Promise<TreeNode> {
    const getters = Array.isArray(gettersOrOptions) ? gettersOrOptions : this.defaultGetters;
    const options = isObject(gettersOrOptions) ? (gettersOrOptions as ParseTreeOptions) : userOptions;

    const parseOptions: ParseTreeOptions = {
      omitEmpty: true,
      omitFauxNodes: true,
      defaultGetter: () => ({}) as TreeNode,
      ...options,
    };

    const getter = getters.find((getter) => getter.test(this));
    const out = await Promise.resolve(getter?.get(this) || parseOptions.defaultGetter({} as ContentNode));

    if (out && out.children === false) {
      delete out.children;
      return out as TreeNode;
    }

    if (out?.children && out?.children.length > 0) return out as TreeNode;

    if (this.children?.length > 0) {
      out.children = await Promise.all(this.children.map(async (childNode) => await childNode.parseTree(getters, options)));

      if (parseOptions.omitEmpty) {
        out.children = out.children.filter((n) => !isEmptyObject(n));
      }
    }

    if (parseOptions.omitEmpty && out.children && out.children.length === 0) {
      delete out.children;
    }

    if (isFauxNode(out)) {
      return out.children[0];
    }

    return out as TreeNode;
  }

  /**
   * Gets raw text without any formatting
   */
  getRawText() {
    if (!isTextNode(this)) return;

    return this.characters;
  }

  /**
   * Retrieves the concatenated raw text content of the node and its children, excluding any formatting.
   * Useful for extracting plain text from a node tree.
   */
  getRawChildrenText() {
    const textNodes = Array.from(this.filterDeep(isTextNode)) as ContentNode<TextNode>[];

    const contents = textNodes.map((node) => node.getRawText()).filter(Boolean);

    return contents.join(`\n\n`);
  }

  /**
   * Retrieves the text content of the node and its children, formatted according to `getFormattedText()`.
   * This method organizes text contents in a markdown-ish format, including basic styles and list formatting.
   */
  getFormattedChildrenText() {
    const textNodes = Array.from(this.filterDeep(isTextNode)) as ContentNode<TextNode>[];

    const contents = textNodes.map((node) => node.getFormattedText()).filter(Boolean);

    return contents.join(`\n\n`);
  }

  /**
   * Formats the current text node's content to a markdown-like syntax, supporting basic styles such as bold,
   * italic, and lists. This method is designed for text nodes and will return undefined for non-text nodes.
   */
  getFormattedText() {
    if (!isTextNode(this)) return;

    const lines = combineSchema({
      indent: this.raw.lineIndentations,
      type: this.raw.lineTypes,
      text: getNodeDecoratedText(this)?.split('\n') || [],
    });

    const formattedText = lines
      .map((line) => {
        let bullet = '';

        if (line.type === 'ORDERED') {
          bullet = `1. `;
        }
        if (line.type === 'UNORDERED') {
          bullet = '* ';
        }
        return '   '.repeat(line.indent) + bullet + line.text;
      })
      .join('\n');

    return formattedText;
  }
}
