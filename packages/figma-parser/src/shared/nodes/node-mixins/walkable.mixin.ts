import type { TODO } from '../../../types';
import { walk } from '../../walk.util';
import type { Ctor } from '../types';

export interface WalkableMixin<T> {
  /**
   * Walks through the node tree, executing a callback for each node.
   *
   * @example
   * ```typescript
   * node.walk((node) => {
   *   console.log(node.name)
   * })
   * ```
   */
  walk(callback: (node: T) => void): void;
}

export function Walkable<Base extends Ctor>(BaseClass: Base) {
  return class extends BaseClass {
    walk(callback: (node: TODO) => void): TODO {
      walk<this>(this, callback);
    }
  };
}
