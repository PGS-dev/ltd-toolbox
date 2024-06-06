import pm from 'picomatch';
import type { OnPurposeAny } from '../../../types';
import { walk } from '../../walk.util';
import type { ParentNode } from '../parent.node';
import type { Ctor } from '../types';

export interface TraversableMixin<T> {
  /**
   * Returns child node by its index
   * ```
   * const thirdChild = ndoe.child(3)
   * ```
   */
  child(index: number): T | undefined;

  /**
   * Returns first child node with matching name stored in "name" property
   * ```
   * const title = node.childByName('Title');
   * ```
   */
  childByName(name: string): T | undefined;

  /**
   * Returns child node witch matching id stored in "id" property
   * ```
   * const specificLayer = node.childById('123:345');
   * ```
   */
  childById(id: string): T | undefined;

  /**
   * Returns deep child node using indexes of each another node.
   * ```
   * const deepText = node.deepChild(0, 1, 0, 4)
   * // equals to node.children[0].children[1].children[0].children[4]
   * ```
   */
  deepChild(...indexes: number[]): T | undefined;

  /**
   * Finds nodes that match given glob patterns.
   * ```
   * // Please note, that asterisks in below glob pattern has been replaced ;).
   * const title = sectionNode.glob('section/✱✱/title');
   * const items = sectionNode.glob('✱✱/anatomy/item');
   * const previews =sectionNod.glob('✱✱/preview', '✱✱/image', '✱✱/element-preview');
   * ```
   */
  glob(...paths: string[]): T[];
  glob(paths: string | string[]): T[];
}

export function Traversable<Base extends Ctor<ParentNode>>(BaseClass: Base) {
  return class extends BaseClass {
    child(index: number) {
      return this.children[index];
    }

    childByName(name: string) {
      return this.children.find((childNode) => (childNode as OnPurposeAny).name === name);
    }

    childById(id: string) {
      if (this.children.some((childNode) => !!(childNode as OnPurposeAny).id)) return this.children.find((childNode) => (childNode as OnPurposeAny).id === id);
    }

    deepChild(...indexes: number[]) {
      return indexes.reduce((acc, index) => {
        return acc.children[index];
      }, this);
    }

    glob(...paths: string[]): this[];
    glob(paths: string | string[]): this[] {
      const children: this[] = [];
      const pathsArray = Array.isArray(paths) ? paths : [paths];
      const lowerCasePaths = pathsArray.map((p) => p.toLowerCase());

      const matcher = pm(lowerCasePaths);
      const getNodePath = (node: this) => {
        let parent: this | undefined = node;
        const path = [];

        while (parent) {
          if ((parent as OnPurposeAny).name) {
            path.push((parent as OnPurposeAny).name.toLowerCase());
          } else {
            break;
          }

          parent = parent.parent as OnPurposeAny;
        }

        return path.reverse().join('/');
      };

      walk(this, (node) => {
        if (matcher(getNodePath(node))) {
          children.push(node);
        }
      });

      return children;
    }
  };
}
