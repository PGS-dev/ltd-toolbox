import { hasChildren } from '../../types';
import type { ParentNode } from '../parent.node';
import { RichParentNode } from '../rich-parent.node';
import type { Ctor, ParentInterface } from '../types';

export function Filterable<Base extends Ctor<ParentNode>>(BaseClass: Base) {
  return class extends BaseClass {
    /**
     * Shallow filters node's children and returns the results as `RichParentNode` instance
     * to preserve all methods.
     * ```
     * const filteredNodes = node.filter(node => node.type === 'TEXT')
     * ```
     */
    fitler(predicate: (node: this) => boolean): RichParentNode {
      const children = this.children.filter(predicate);

      return new RichParentNode({ children });
    }

    /**
     * Deeply filters all children nodes using given predicate with preserved structure.
     * Whenever node matches predicate, it is returned as the node. Otherwise, the instance of
     * `RichParentNode` is returned in order to preserve the structure and all methods.
     * ```
     * const filteredNodes = node.filterDeep(node => node.type === 'TEXT')
     * ```
     */
    filterDeep(predicate: (node: this) => boolean): (RichParentNode | this) & ParentInterface {
      const mapper = (node: this) => {
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
