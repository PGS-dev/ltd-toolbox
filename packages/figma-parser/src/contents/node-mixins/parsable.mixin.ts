import { isTextNodeInstance } from '@ltd-toolbox/figma-node-classes'
import { hasMethod, isEmptyObject, isObject } from '../../shared'
import type { Ctor } from '../../shared/nodes/types';
import type { OnPurposeAny } from '../../types'
import type { Getter, GetterTreeNode, ParseTreeOptions } from '../types';
import { isFauxNode } from '../utils';

const defaultGetters: Getter[] = [
  {
    test: (node) => isTextNodeInstance(node),
    get(node) {
      return {
        type: node.type,
        data: hasMethod(node, 'getText') && node.getText(),
      };
    },
  },
  {
    test: () => true,
    get(node) {
      return {
        type: node.type,
      };
    },
  },
];

export interface ParsableMixin {
  /**
   * Parses a Figma node tree, extracting content into a structured tree format. This method facilitates the transformation
   * of Figma layers into document abstract syntax trees (AST), enabling conversion to various formats like Markdown or HTML.
   * Returned type `TreeNode` is compliant with (unist's Node interface)[https://github.com/syntax-tree/unist?tab=readme-ov-file#node],
   * therefore it may be processed with these utils.
   *
   * @example
   * ```typescript
   * import { htmlGetters } from '@ltd-toolbox/figma-parser'
   *
   * // Please checkout `Getter` type for more information on getters,
   * const outTree = node.parseTree(htmlGetters)
   *
   * console.log(outTree)
   * ```
   */
  parseTree(options?: Partial<ParseTreeOptions>): Promise<GetterTreeNode>;
  parseTree(getters?: Getter[]): Promise<GetterTreeNode>;
  parseTree(getters?: Getter[], options?: Partial<ParseTreeOptions>): Promise<GetterTreeNode>;
  parseTree(getters?: Getter[], options?: Partial<ParseTreeOptions>): Promise<GetterTreeNode>;
  parseTree(gettersOrOptions?: Getter[] | Partial<ParseTreeOptions>, userOptions?: Partial<ParseTreeOptions>): Promise<GetterTreeNode>;
}

export function Parseable<Base extends Ctor>(Base: Base) {
  return class extends Base implements ParsableMixin {
    async parseTree(gettersOrOptions?: Getter[] | Partial<ParseTreeOptions>, userOptions: Partial<ParseTreeOptions> = {}): Promise<GetterTreeNode> {
      const getters = Array.isArray(gettersOrOptions) ? gettersOrOptions : defaultGetters;
      const options = isObject(gettersOrOptions) ? (gettersOrOptions as ParseTreeOptions) : userOptions;

      const parseOptions: ParseTreeOptions = {
        omitEmpty: true,
        omitFauxNodes: true,
        defaultGetter: () => ({}) as GetterTreeNode,
        ...options,
      };

      const getter = getters.find((getter) => getter.test(this as OnPurposeAny));
      const out = await Promise.resolve(getter?.get(this as OnPurposeAny) || parseOptions.defaultGetter({} as OnPurposeAny));

      if (out && out.children === false) {
        delete out.children;
        return out as GetterTreeNode;
      }

      if (out?.children && out?.children.length > 0) return out as GetterTreeNode;

      if ('children' in this && Array.isArray(this.children)) {
        out.children = await Promise.all(this.children.map(async (childNode) => await childNode.parseTree(getters, options)));

        if (parseOptions.omitEmpty) {
          out.children = out.children.filter((n) => !isEmptyObject(n));
        }
      }

      if (parseOptions.omitEmpty && out.children && out.children.length === 0) {
        delete out.children;
      }

      if (isFauxNode(out)) {
        return out.children[0];
      }

      return out as GetterTreeNode;
    }
  };
}
