import { hasChildren } from '../../types';
import type { ParentNode } from '../parent.node';
import { RichParentNode } from '../rich-parent.node';
import type { Ctor, ParentInterface } from '../types';

export interface MappableMixin {
  /**
   * Maps children of the node.
   * ```
   * const mappedChildren = node.map((node) => {
   *   return {
   *     name: node.name
   *   }
   * })
   * ```
   */
  map<T>(callback: (node: this) => T | undefined): T[];

  /**
   * Deeply maps all children nodes and preserves their structure.
   * Map results performed by provided callback are then returned as an instane
   * of `RichParentNode` to preserve nodes functionalities.
   * ```
   * const mapped = node.mapDeep((node) => {
   *   return {
   *     kind: node.type
   *     text: node.characters || null
   *   }
   * })
   * ```
   */
  mapDeep<T extends ParentInterface>(callback: (node: this) => T): RichParentNode;
}

export function Mappable<Base extends Ctor<ParentNode>>(BaseClass: Base) {
  return class extends BaseClass {
    map<T>(callback: (node: this) => T | undefined): T[] {
      const children = this.children.map((childNode) => callback(childNode) as T);

      return children;
    }

    mapDeep<T extends ParentInterface>(callback: (node: this) => T): RichParentNode {
      const mapper = (node: this) => {
        const newNode = callback(node);

        if (hasChildren(node)) {
          newNode.children = node.children.map((childNode) => mapper(childNode));
        }

        return new RichParentNode(newNode);
      };

      return mapper(this);
    }
  };
}
