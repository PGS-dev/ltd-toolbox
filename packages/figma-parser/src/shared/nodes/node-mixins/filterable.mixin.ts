import type { OnPurposeAny } from '../../../types';
import type { RichParentNode } from '../rich-parent.node';
import type { Ctor } from '../types';

export interface FilterableMixin<T> {
  /**
   * Shallow filters node's children and returns the results as `RichParentNode` instance
   * to preserve all methods.
   *
   * @example
   * ```typescript
   * const filteredNodes = node.filter(node => node.type === 'TEXT')
   * ```
   */
  fitler(predicate: (node: T) => boolean): T[];

  /**
   * Deeply filters all children nodes using given predicate with preserved structure.
   * Whenever node matches predicate, it is returned as the node. Otherwise, the instance of
   * `RichParentNode` is returned in order to preserve the structure and all methods.
   *
   * @example
   * ```typescript
   * const filteredNodes = node.filterDeep(node => node.type === 'TEXT')
   * ```
   */
  filterDeep(predicate: (node: T) => boolean): T | RichParentNode;
}

export function Filterable<Base extends Ctor>(BaseClass: Base) {
  return class extends BaseClass {
    fitler(predicate: (node: this) => boolean): this[] {
      const children = this.children.filter(predicate);

      return children;
    }

    filterDeep(predicate: (node: this) => boolean): this[] {
      const out: this[] = [];

      const mapper = (node: this) => {
        if (!node) return;

        if (predicate(node)) {
          out.push(node);
        }

        if (!node || !node.children) return;

        node.children.forEach((childNode: OnPurposeAny) => mapper(childNode));
      };

      mapper(this);

      return out;
    }
  };
}
