import pm from 'picomatch';
import type { OnPurposeAny } from '../../../types';
import { walk } from '../../walk.util';
import type { ParentNode } from '../parent.node';
import { RichParentNode } from '../rich-parent.node';
import type { Ctor } from '../types';

export function Traversable<Base extends Ctor<ParentNode>>(BaseClass: Base) {
  return class extends BaseClass {
    /**
     * Returns child node by its index
     * ```
     * const thirdChild = ndoe.child(3)
     * ```
     */
    child(index: number): this | undefined {
      return this.children[index];
    }

    /**
     * Returns first child node with matching name stored in "name" property
     * ```
     * const title = node.childByName('Title');
     * ```
     */
    childByName(name: string): this | undefined {
      return this.children.find((childNode) => (childNode as OnPurposeAny).name === name);
    }

    /**
     * Returns child node witch matching id stored in "id" property
     * ```
     * const specificLayer = node.childById('123:345');
     * ```
     */
    childById(id: string): this | undefined {
      if (this.children.some((childNode) => !!(childNode as OnPurposeAny).id)) return this.children.find((childNode) => (childNode as OnPurposeAny).id === id);
    }

    /**
     * Returns deep child node using indexes of each another node.
     * ```
     * const deepText = node.deepChild(0, 1, 0, 4)
     * // equals to node.children[0].children[1].children[0].children[4]
     * ```
     */
    deepChild(...indexes: number[]): this | undefined {
      return indexes.reduce((acc, index) => {
        return acc.children[index];
      }, this);
    }

    /**
     * Finds nodes that match given glob patterns.
     * ```
     * // Please note, that asterisks in below glob pattern has been replaced ;).
     * const title = sectionNode.glob('section/✱✱/title');
     * const items = sectionNode.glob('✱✱/anatomy/item');
     * const previews =sectionNod.glob('✱✱/preview', '✱✱/image', '✱✱/element-preview');
     * ```
     */
    glob(...paths: string[]): RichParentNode;
    glob(paths: string | string[]): RichParentNode {
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

      return new RichParentNode({ children });
    }
  };
}
