import { walk } from '../../walk.util';
import type { ParentNode } from '../parent.node';
import type { Ctor } from '../types';

export function Walkable<Base extends Ctor<ParentNode>>(BaseClass: Base) {
  return class extends BaseClass {
    /**
     * Walks through the node tree, executing a callback for each node.
     * ```
     * node.walk((node) => {
     *   console.log(node.name)
     * })
     * ```
     */
    walk(callback: (node: this) => void) {
      walk<this>(this, callback);
    }
  };
}
