import type { TODO } from '../../../types';
import { hasChildren } from '../../types';
import type { ParentNode } from '../parent.node';
import { RichParentNode } from '../rich-parent.node';
import type { Ctor } from '../types';

export interface FilterableMixin<T> {
  /**
   * Shallow filters node's children and returns the results as `RichParentNode` instance
   * to preserve all methods.
   * ```
   * const filteredNodes = node.filter(node => node.type === 'TEXT')
   * ```
   */
  fitler(predicate: (node: T) => boolean): T[];

  /**
   * Deeply filters all children nodes using given predicate with preserved structure.
   * Whenever node matches predicate, it is returned as the node. Otherwise, the instance of
   * `RichParentNode` is returned in order to preserve the structure and all methods.
   * ```
   * const filteredNodes = node.filterDeep(node => node.type === 'TEXT')
   * ```
   */
  filterDeep(predicate: (node: T) => boolean): T | RichParentNode;
}

export function Filterable<Base extends Ctor<ParentNode>>(BaseClass: Base) {
  return class extends BaseClass {
    fitler(predicate: (node: TODO) => boolean): TODO {
      const children = this.children.filter(predicate);

      return children;
    }

    filterDeep(predicate: (node: TODO) => boolean): TODO {
      const mapper = (node: this): this | RichParentNode => {
        const newNode = predicate(node) ? node : new RichParentNode();

        if (hasChildren(node)) {
          // @ts-expect-error - mapping needs to be done
          newNode.children = node.children.map((childNode) => mapper(childNode));
        }

        return newNode;
      };

      return mapper(this);
    }
  };
}
