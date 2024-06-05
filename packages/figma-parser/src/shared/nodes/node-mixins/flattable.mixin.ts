import type { OnPurposeAny } from '../../../types';
import { walk } from '../../walk.util';
import type { ParentNode } from '../parent.node';
import { RichParentNode } from '../rich-parent.node';
import type { Ctor } from '../types';

export function Flattable<Base extends Ctor<ParentNode>>(BaseClass: Base) {
  return class extends BaseClass {
    /**
     * Flattens whole structure to a single `RichParentNode`, and skips all the other
     * RichParentNodes so that only nodes with values are returned.
     * ```
     * const filteredNodes = node.filterDeep(node => node.type === 'TEXT')
     * const textNodes = filteredNodes.flat()
     * ```
     */
    flat(): RichParentNode {
      const children: this[] = [];

      walk(this as OnPurposeAny, (node) => {
        if (!(node instanceof RichParentNode)) {
          children.push(node);
        }
      });

      return new RichParentNode({ children });
    }
  };
}
