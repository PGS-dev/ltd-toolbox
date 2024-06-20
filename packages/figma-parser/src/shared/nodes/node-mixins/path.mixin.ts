import { FigmaParserError } from '../../errors/figma-parser-error';
import { RichParentNode } from '../rich-parent.node';
import type { Ctor, NodeKeys } from '../types';

export interface WithPathMixin<T> {
  /**
   * Returns an array with all the parent nodes to this current node.
   *
   * @example
   * ```typescript
   * const path = node.path()
   * ```
   */
  path(): T[];
}

export function WithPath<Base extends Ctor>(BaseClass: Base) {
  return class extends BaseClass {
    path(prop: NodeKeys = 'name'): this[] {
      // eslint-disable-next-line
      let parent = this;
      const path: this[] = [];

      while (parent) {
        if (parent instanceof RichParentNode) {
          throw new FigmaParserError(`Cant get path for this node.`, `Node you are trying to resolve path to is an instance of "RichParentNode". It doesn't necessairly have a parent node.`);
        }

        if (!(prop in parent)) {
          throw new FigmaParserError(`Couldn't resolve path, beacuse property is missing.`, `There is no "${prop}" property in current node. `);
        }

        path.push(parent);

        parent = parent.parent;
      }

      return path.reverse();
    }
  };
}
