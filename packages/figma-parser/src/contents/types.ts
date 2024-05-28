import { TypeStyle } from '@figma/rest-api-spec';
import { ContentNode } from './content-node';

export interface TypeStyleTable {
  [p: string]: TypeStyle;
}

export interface GetterNode {
  type: string
  data?: any
  [k: string]: any
}

export type GetterTreeNode = GetterNode & { children?: GetterNode[] };

export type GetterTestFn = (node: ContentNode) => boolean;
export type GetterGetFn = (node: ContentNode) => GetterTreeNode & { children?: GetterTreeNode[] | false };

export type Getter = {
  /**
   * Test function that determines if get method should be executed on current node.
   * You can use it to perform the getter only on nodes that match certain rules.
   *
   * @example
   * ```typescript
   * const getter: Getter = {
   *  test: (node: ContentNode) => node.raw.type === 'INSTANCE' && node.raw.name === 'heading 1'
   *  [...]
   * }
   * ```
   */
  test: GetterTestFn;
  /**
   * Getter function that gets the proper contents for current node if it passed the `test`.
   *
   * @example
   * ```typescript
   * const getter: Getter = {
   *   [...]
   *   get: (node: ContentNode) => ({
   *     type: 'table-row'
   *   })
   * }
   * ```
   *
   * If you wish to parse the children on your own, you can return your own `children`, and parser will not overwrite it.
   *
   * @example
   * ```typescript
   * const getter: Getter = {
   *   [...]
   *   get: (node: ContentNode) => {
   *     const listItems: TreeNode[] = getListItems(node)
   *
   *     return {
   *       type: 'unordered-list',
   *       children: listItems
   *     }
   *   }
   * }
   * ```
   *
   * If you don't want to provide any children for the TreeNode, return `children: false`. This property will be removed from final tree.
   * @example
   * ```typescript
   * const getter: Getter = {
   *   [...]
   *   get: (node: ContentNode) => {
   *     const listItems: TreeNode[] = getListItems(node)
   *
   *     return {
   *       type: 'paragraph',
   *       data: node.getFormattedContent(),
   *       children: false
   *     }
   *   }
   * }
   * ```
   */
  get: GetterGetFn;
};

export interface ParseTreeOptions {
  /**
   * Whether omit the nodes that returned an empty object, or not.
   * Use this option if you want to have clean tree of nodes without additional rubish.
   *
   * @default true
   */
  omitEmpty: boolean;
  /**
   * Whether nodes that's only property is `children` should be skipped, or not.
   */
  omitFauxNodes: boolean;
  /**
   * Default getter for nodes that don't pass the test of any of provided getters.
   * By default it returns an empty object, which then is ommited, when `omitEmpty` is set to true.
   * You can use it for example to find all unkown nodes
   *
   * @example
   * ```typescript
   *  defaultGetter: (node) => ({
   *    type: 'unknown',
   *    data: node.getFormattedContents()
   *  })
   * ```
   */
  defaultGetter: GetterGetFn;
}
