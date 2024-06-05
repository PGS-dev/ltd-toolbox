import { walk } from '../../walk.util';
import type { ParentNode } from '../parent.node';
import type { Ctor } from '../types';

export function Searchable<Base extends Ctor<ParentNode>>(BaseClass: Base) {
  return class extends BaseClass {
    /**
     * Finds the first node in node's children that matches the given predicate.
     * ```
     * const title = section.find(node => node.name === 'title')
     * ```
     */
    find(predicate: (node: this, index: number) => boolean): this | undefined {
      return this.children.find((node, index) => predicate(node, index));
    }

    /**
     * Finds the first node deep in the tree that matches the given predicate.
     * ```
     * const section = contents.findDeep((node) => node.type === 'FRAME' && node.name === 'docs-section')
     * ```
     */
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
