import type { OnPurposeAny } from '../../../types';
import { walk } from '../../walk.util';
import type { Ctor } from '../types';

export interface SearchableMixin<T> {
  /**
   * Finds the first node in node's children that matches the given predicate.
   *
   * @example
   * ```typescript
   * const title = section.find(node => node.name === 'title')
   * ```
   */
  find(predicate: (node: T, index: number) => boolean): T | undefined;

  /**
   * Finds the first node deep in the tree that matches the given predicate.
   *
   * @example
   * ```typescript
   * const section = contents.findDeep((node) => node.type === 'FRAME' && node.name === 'docs-section')
   * ```
   */
  findDeep(predicate: (node: T) => boolean): T | undefined;
}

export function Searchable<Base extends Ctor>(BaseClass: Base) {
  return class extends BaseClass {
    find(predicate: (node: this, index: number) => boolean): this | undefined {
      return this.children.find((node: OnPurposeAny, index: number) => predicate(node, index));
    }

    findDeep(predicate: (node: this) => boolean): this | undefined {
      let output: this | undefined = undefined;

      walk<this>(this, (node) => {
        if (predicate(node) && !output) {
          output = node;
        }
      });

      return output;
    }
  };
}
