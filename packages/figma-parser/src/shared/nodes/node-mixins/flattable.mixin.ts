import type { OnPurposeAny } from '../../../types';
import { walk } from '../../walk.util';
import { RichParentNode } from '../rich-parent.node';
import type { Ctor } from '../types';

export interface FlattableMixin<T> {
  /**
   * Flattens whole structure to a single `RichParentNode`, and skips all the other
   * RichParentNodes so that only nodes with values are returned.
   *
   * @example
   * ```typescript
   * const filteredNodes = node.filterDeep(node => node.type === 'TEXT')
   * const textNodes = filteredNodes.flat()
   * ```
   */
  flat(): T[];
}

export function Flattable<Base extends Ctor>(BaseClass: Base) {
  return class extends BaseClass {
    flat() {
      const children: this[] = [];

      walk(this as OnPurposeAny, (node) => {
        if (!(node instanceof RichParentNode)) {
          children.push(node);
        }
      });

      return children;
    }
  };
}
