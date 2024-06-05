import type { ParentNode } from '../parent.node';
import type { Ctor } from '../types';

export function WithToArray<Base extends Ctor<ParentNode>>(BaseClass: Base) {
  return class extends BaseClass {
    /**
     * Returns children of the node as good ol' javascript array
     * ```
     * const textNodes = filteredNodes.flat().toArray()
     * ```
     */
    toArray(): this[] {
      return Array.from(this.children);
    }
  };
}
