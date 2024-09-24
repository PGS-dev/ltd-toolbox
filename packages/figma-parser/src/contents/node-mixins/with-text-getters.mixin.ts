import { isTextNodeInstance } from '@ltd-toolbox/figma-node-classes';
import type { Ctor } from '../../shared/nodes/types';
import { walk } from '../../shared/walk.util';
import type { OnPurposeAny } from '../../types';

export interface WithTextGettersMixin {
  /**
   * Gets raw text without any formatting
   */
  getText(): undefined | string;

  /**
   * Retrieves the concatenated raw text content of the node and its children, excluding any formatting.
   * Useful for extracting plain text from a node tree.
   */
  getRecursiveText(asArray: boolean): undefined | string | string[];
}

export function WithTextGetters<Base extends Ctor>(Base: Base) {
  return class extends Base {
    getText() {
      if (!isTextNodeInstance(this as OnPurposeAny)) return;

      return this.characters as string;
    }

    getRecursiveText(asArray = false) {
      const contents: (string | undefined)[] = [];

      walk(this, (node: OnPurposeAny) => {
        contents.push(node.getText());
      });

      if (asArray) return contents.filter(Boolean);

      return contents.filter(Boolean).join(`\n\n`);
    }

    /**
     * Retrieves the text content of the node and its children, formatted according to `getFormattedText()`.
     * This method organizes text contents in a markdown-ish format, including basic styles and list formatting.
     */
    // getFormattedChildrenText() {
    //   const filtered = this.filterDeep(isTextNode).flat()
    //   const textNodes = Array.from(filtered.children) as ContentNode<TextNode>[]
    //
    //   const contents = textNodes.map((node) => node.getFormattedText()).filter(Boolean)
    //
    //   return contents.join(`\n\n`)
    // }

    /**
     * Formats the current text node's content to a markdown-like syntax, supporting basic styles such as bold,
     * italic, and lists. This method is designed for text nodes and will return undefined for non-text nodes.
     */
    // getFormattedText() {
    //   if (!isTextNode(this)) return
    //
    //   const lines = combineSchema({
    //     indent: this.lineIndentations,
    //     type: this.lineTypes,
    //     text: getNodeDecoratedText(this)?.split('\n') || []
    //   })
    //
    //   const formattedText = lines
    //     .map((line) => {
    //       let bullet = ''
    //
    //       if (line.type === 'ORDERED') {
    //         bullet = `1. `
    //       }
    //       if (line.type === 'UNORDERED') {
    //         bullet = '* '
    //       }
    //       return '   '.repeat(line.indent) + bullet + line.text
    //     })
    //     .join('\n')
    //
    //   return formattedText
    // }
  };
}
