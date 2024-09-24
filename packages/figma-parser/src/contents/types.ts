import type { TypeStyle } from '@figma/rest-api-spec';
import type { AnyNode } from '@ltd-toolbox/figma-node-classes';
import type { FigmaApiInterface } from '../core';
import type { ParentInterface } from '../shared/nodes/types';
import type { OnPurposeAny } from '../types';

export interface TypeStyleTable {
  [p: string]: TypeStyle;
}

export interface GetterNode {
  type: string;
  data?: OnPurposeAny;
  [k: string]: OnPurposeAny;
}

export type GetterTreeNode = GetterNode & { children?: GetterNode[] };

export type GetterTestFn = <Node extends ParentInterface & AnyNode>(node: Node) => boolean | Promise<boolean>;
export type GetterGetFn = <Node extends ParentInterface & AnyNode>(node: Node) => GetterTreeNode & { children?: GetterTreeNode[] | false } | Promise<GetterTreeNode & { children?: GetterTreeNode[] | false }>;

export type Getter = {
  /**
   * Test function that determines if get method should be executed on current node.
   * You can use it to perform the getter only on nodes that match certain rules.
   *
   *
   * @example
   *
   * @example
   * ```typescript
   * const getter: Getter = {
   *  test: (node) => node.raw.type === 'INSTANCE' && node.raw.name === 'heading 1'
   *  [...]
   * }
   * ```
   */
  test: GetterTestFn;
  /**
   * Getter function specifies what kind of data needs to be fetched from node and how to get it. It is executed only if node passed getter's `test` predicate.
   *
   *
   * @example
   *
   * @example
   * ```typescript
   * const getter: Getter = {
   *   [...]
   *   get: (node) => ({
   *     type: 'table-row'
   *   })
   * }
   *
   * @example
   * ```typescript
   *
   * If you wish to parse the children on your own, you can return your own `children`, and parser will not overwrite it.
   *
   *
   * @example
   *
   * @example
   * ```typescript
   * const getter: Getter = {
   *   [...]
   *   get: (node) => {
   *     const listItems: TreeNode[] = getListItems(node)
   *
   *     return {
   *       type: 'unordered-list',
   *       children: listItems
   *     }
   *   }
   * }
   *
   * @example
   * ```typescript
   *
   * If you don't want to provide any children for the TreeNode, return `children: false`. This property will be removed from final tree.
   *
   * @example
   *
   * @example
   * ```typescript
   * const getter: Getter = {
   *   [...]
   *   get: (node) => {
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
   *
   * @example
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

export interface ImageOptions {
  /**
   * A number between 0.01 and 4, the image scaling factor
   */
  scale: number;

  /**
   * A string enum for the image output format, can be jpg, png, svg, or pdf
   */
  format: 'jpg' | 'png' | 'svg' | 'pdf';

  /**
   * Whether text elements are rendered as outlines (vector paths) or as <text> elements in SVGs.
   * Rendering text elements as outlines guarantees that the text looks exactly the same in the SVG as it does in the browser/inside Figma.
   * Exporting as <text> allows text to be selectable inside SVGs and generally makes the SVG easier to read. However, this relies on the browser's rendering engine which can vary between browsers and/or operating systems. As such, visual accuracy is not guaranteed as the result could look different than in Figma.
   * @default true
   */
  svg_outline_text: boolean;

  /**
   * Whether to include id attributes for all SVG elements. Adds the layer name to the id attribute of an svg element.
   * @default false
   */
  svg_include_id: boolean;

  /**
   * Whether to include node id attributes for all SVG elements. Adds the node id to a data-node-id attribute of an svg element.
   * @default false
   */
  svg_include_node_id: boolean;

  /**
   * Whether to simplify inside/outside strokes and use stroke attribute if possible instead of <mask>.
   * @default true
   */
  svg_simplify_stroke: boolean;

  /**
   * Whether content that overlaps the node should be excluded from rendering. Passing false (i.e., rendering overlaps) may increase processing time, since more of the document must be included in rendering.
   * @default true
   */
  contents_only: boolean;

  /**
   * Use the full dimensions of the node regardless of whether or not it is cropped or the space around it is empty. Use this to export text nodes without cropping.
   * @default false
   */
  use_absolute_bounds: boolean;
}

export const defaultImageOptions: ImageOptions = {
  scale: 1,
  format: 'svg',
  svg_outline_text: true,
  svg_include_id: false,
  svg_include_node_id: false,
  svg_simplify_stroke: true,
  contents_only: true,
  use_absolute_bounds: false,
};

export interface CurrentContext {
  apiClient: FigmaApiInterface;
  fileId: string;
}
