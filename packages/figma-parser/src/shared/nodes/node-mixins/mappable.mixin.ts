import { hasChildren, type AnyNode } from '@ltd-toolbox/figma-node-classes';
import type { OnPurposeAny } from '../../../types';
import { RichParentNode } from '../rich-parent.node';
import type { Ctor, ParentInterface } from '../types';

export interface MappableMixin {
  /**
   * Maps children of the node.
   *
   * @example
   * ```typescript
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
   *
   * @example
   * ```typescript
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

export function Mappable<Base extends Ctor>(BaseClass: Base) {
  return class extends BaseClass {
    map<T>(callback: (node: this) => T | undefined): T[] {
      const children = this.children.map((childNode: OnPurposeAny) => callback(childNode) as T);

      return children;
    }

    mapDeep<T extends ParentInterface>(callback: <E extends AnyNode>(node: E) => T): RichParentNode {
      const mapper = <T extends AnyNode>(node: T) => {
        const newNode = callback(node);

        if (hasChildren(node)) {
          newNode.children = node.children.map((childNode) => mapper(childNode));
        }

        return new RichParentNode(newNode);
      };

      return mapper(this as unknown as AnyNode);
    }
  };
}
