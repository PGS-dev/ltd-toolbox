import type { OnPurposeAny, TODO } from '../../../types';
import { FigmaParserError } from '../../errors/figma-parser-error';
import type { ParentNode } from '../parent.node';
import { RichParentNode } from '../rich-parent.node';
import type { Ctor, NodeKeys } from '../types';

export function WithPath<Base extends Ctor<ParentNode>>(BaseClass: Base) {
  return class extends BaseClass {
    /**
     * Returns an array that represents the path of given node.
     * `prop` parameter allows you to choose which node property
     * should be used for the node identifier, e.g. `id`, `name`, or others.
     *
     * ```
     * const path = node.path() // ['Document', 'Frame4', 'Title']
     * const idPath = node.path('id') // ['0:0', '11:11', '22:22']
     * const typePath = node.path('type') // ['DOCUMENT', 'CANVAS', 'FRAME', 'FRAME', 'TEXT']
     * ```
     */
    path(prop: NodeKeys = 'name'): string[] {
      // eslint-disable-next-line
      let parent = this;
      const path = [];

      while (parent) {
        if (parent instanceof RichParentNode) {
          throw new FigmaParserError(`Cant get path for this node.`, `Node you are trying to resolve path to is an instance of "RichParentNode". It doesn't necessairly have a parent node.`);
        }

        if (!(prop in parent)) {
          throw new FigmaParserError(`Couldn't resolve path, beacuse property is missing.`, `There is no "${prop}" property in current node. `);
        }

        path.push((parent as OnPurposeAny)[prop]);

        parent = parent.parent as TODO;
      }

      return path.reverse();
    }
  };
}
