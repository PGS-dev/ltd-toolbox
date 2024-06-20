/* eslint-disable */
// @ts-nocheck
/**
 * This is generated file. Do not edit manually!
 * Generated on 2024-06-20T08:53:19.699Z
 */

import type {
  ArcData,
  BlendMode,
  ConnectorEndpoint,
  ConnectorLineType,
  ConnectorTextBackground,
  EasingType,
  Effect,
  ExportSetting,
  FlowStartingPoint,
  LayoutConstraint,
  LayoutGrid,
  Overrides,
  Paint,
  Path,
  PrototypeDevice,
  RGBA,
  BooleanOperationNode as RawBooleanOperationNode,
  CanvasNode as RawCanvasNode,
  ComponentNode as RawComponentNode,
  ComponentSetNode as RawComponentSetNode,
  ConnectorNode as RawConnectorNode,
  DocumentNode as RawDocumentNode,
  EllipseNode as RawEllipseNode,
  EmbedNode as RawEmbedNode,
  FrameNode as RawFrameNode,
  GroupNode as RawGroupNode,
  InstanceNode as RawInstanceNode,
  LineNode as RawLineNode,
  LinkUnfurlNode as RawLinkUnfurlNode,
  Node as RawNode,
  RectangleNode as RawRectangleNode,
  RegularPolygonNode as RawRegularPolygonNode,
  SectionNode as RawSectionNode,
  ShapeWithTextNode as RawShapeWithTextNode,
  SliceNode as RawSliceNode,
  StarNode as RawStarNode,
  StickyNode as RawStickyNode,
  TableCellNode as RawTableCellNode,
  TableNode as RawTableNode,
  TextNode as RawTextNode,
  VectorNode as RawVectorNode,
  WashiTapeNode as RawWashiTapeNode,
  WidgetNode as RawWidgetNode,
  Rectangle,
  ShapeType,
  StrokeWeights,
  Transform,
  TypeStyle,
  Vector,
} from '@figma/rest-api-spec';

export {
  RawBooleanOperationNode,
  RawCanvasNode,
  RawComponentNode,
  RawComponentSetNode,
  RawConnectorNode,
  RawDocumentNode,
  RawEllipseNode,
  RawEmbedNode,
  RawFrameNode,
  RawGroupNode,
  RawInstanceNode,
  RawLineNode,
  RawLinkUnfurlNode,
  RawNode,
  RawRectangleNode,
  RawRegularPolygonNode,
  RawSectionNode,
  RawShapeWithTextNode,
  RawSliceNode,
  RawStarNode,
  RawStickyNode,
  RawTableCellNode,
  RawTableNode,
  RawTextNode,
  RawVectorNode,
  RawWashiTapeNode,
  RawWidgetNode,
};

export type AnyNode =
  | DocumentNode
  | CanvasNode
  | BooleanOperationNode
  | SectionNode
  | FrameNode
  | GroupNode
  | ComponentNode
  | ComponentSetNode
  | VectorNode
  | StarNode
  | LineNode
  | EllipseNode
  | RegularPolygonNode
  | RectangleNode
  | TextNode
  | TableNode
  | TableCellNode
  | SliceNode
  | InstanceNode
  | EmbedNode
  | LinkUnfurlNode
  | StickyNode
  | ShapeWithTextNode
  | ConnectorNode
  | WashiTapeNode
  | WidgetNode;

type SubcanvasNode =
  | DocumentNode
  | CanvasNode
  | BooleanOperationNode
  | SectionNode
  | FrameNode
  | GroupNode
  | ComponentNode
  | ComponentSetNode
  | VectorNode
  | StarNode
  | LineNode
  | EllipseNode
  | RegularPolygonNode
  | RectangleNode
  | TextNode
  | TableNode
  | TableCellNode
  | SliceNode
  | InstanceNode
  | EmbedNode
  | LinkUnfurlNode
  | StickyNode
  | ShapeWithTextNode
  | ConnectorNode
  | WashiTapeNode
  | WidgetNode;

export class DocumentNode {
  constructor(private raw: RawDocumentNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  children: CanvasNode[];

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  type: 'DOCUMENT';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class CanvasNode {
  constructor(private raw: RawCanvasNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  /**
   * Background color of the canvas.
   */
  backgroundColor: RGBA;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  children: SubcanvasNode[];

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * An array of flow starting points sorted by its position in the prototype settings panel.
   */
  flowStartingPoints: FlowStartingPoint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * The device used to view a prototype.
   */
  prototypeDevice: PrototypeDevice;

  /**
   * @deprecated
   * Node ID that corresponds to the start frame for prototypes. This is deprecated with the introduction of multiple flows. Please use the `flowStartingPoints` field.
   */
  prototypeStartNodeID: string | null;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  type: 'CANVAS';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class BooleanOperationNode {
  constructor(private raw: RawBooleanOperationNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A string enum indicating the type of boolean operation applied.
   */
  booleanOperation: 'UNION' | 'INTERSECT' | 'SUBTRACT' | 'EXCLUDE';

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * An array of nodes that are direct children of this node
   */
  children: SubcanvasNode[];

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "BOOLEAN_OPERATION"
   */
  type: 'BOOLEAN_OPERATION';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class SectionNode {
  constructor(private raw: RawSectionNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * An array of nodes that are direct children of this node
   */
  children: SubcanvasNode[];

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * Whether the node is marked ready for development.
   */
  devStatus?: object;

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Whether the contents of the section are visible
   */
  sectionContentsHidden: boolean;

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The type of this node, represented by the string literal "SECTION"
   */
  type: 'SECTION';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class FrameNode {
  constructor(private raw: RawFrameNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * @deprecated
   * Background of the node. This is deprecated, as backgrounds for frames are now in the `fills` field.
   */
  background?: Paint[];

  /**
   * @deprecated
   * Background color of the node. This is deprecated, as frames now support more than a solid color as a background. Please use the `fills` field instead.
   */
  backgroundColor?: RGBA;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * An array of nodes that are direct children of this node
   */
  children: SubcanvasNode[];

  /**
   * Whether or not this node clip content outside of its bounds
   */
  clipsContent: boolean;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * Radius of each corner if a single radius is set for all corners
   */
  cornerRadius?: number;

  /**
   * A value that lets you control how "smooth" the corners are. Ranges from 0 to 1. 0 is the default and means that the corner is perfectly circular. A value of 0.6 means the corner matches the iOS 7 "squircle" icon shape. Other values produce various other curves.
   */
  cornerSmoothing?: number;

  /**
   * Determines how the auto-layout frame’s wrapped tracks should be aligned in the counter axis direction. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`.
   */
  counterAxisAlignContent?: 'AUTO' | 'SPACE_BETWEEN';

  /**
   * Determines how the auto-layout frame's children should be aligned in the counter axis direction. This property is only applicable for auto-layout frames.
   */
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE';

  /**
   * Whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
   */
  counterAxisSizingMode?: 'FIXED' | 'AUTO';

  /**
   * The distance between wrapped tracks of an auto-layout frame. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`
   */
  counterAxisSpacing?: number;

  /**
   * Whether the node is marked ready for development.
   */
  devStatus?: object;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * An object including the top, bottom, left, and right stroke weights. Only returned if individual stroke weights are used.
   */
  individualStrokeWeights?: StrokeWeights;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   * Determines the canvas stacking order of layers in this frame. When true, the first layer will be draw on top. This property is only applicable for auto-layout frames.
   */
  itemReverseZIndex?: boolean;

  /**
   * The distance between children of the frame. Can be negative. This property is only applicable for auto-layout frames.
   */
  itemSpacing?: number;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * An array of layout grids attached to this node (see layout grids section for more details). GROUP nodes do not have this attribute
   */
  layoutGrids?: LayoutGrid[];

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Whether this layer uses auto-layout to position its children.
   */
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL';

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * Whether this auto-layout frame has wrapping enabled.
   */
  layoutWrap?: 'NO_WRAP' | 'WRAP';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Whether a node has primary axis scrolling, horizontal or vertical.
   */
  overflowDirection?: 'HORIZONTAL_SCROLLING' | 'VERTICAL_SCROLLING' | 'HORIZONTAL_AND_VERTICAL_SCROLLING' | 'NONE';

  /**
   * The padding between the bottom border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingBottom?: number;

  /**
   * The padding between the left border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingLeft?: number;

  /**
   * The padding between the right border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingRight?: number;

  /**
   * The padding between the top border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingTop?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * Determines how the auto-layout frame's children should be aligned in the primary axis direction. This property is only applicable for auto-layout frames.
   */
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN';

  /**
   * Whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
   */
  primaryAxisSizingMode?: 'FIXED' | 'AUTO';

  /**
   * Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise.
   *
   * Values are given in the order top-left, top-right, bottom-right, bottom-left.
   */
  rectangleCornerRadii?: undefined[];

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * Determines whether strokes are included in layout calculations. When true, auto-layout frames behave like css "box-sizing: border-box". This property is only applicable for auto-layout frames.
   */
  strokesIncludedInLayout?: boolean;

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "FRAME"
   */
  type: 'FRAME';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class GroupNode {
  constructor(private raw: RawGroupNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * @deprecated
   * Background of the node. This is deprecated, as backgrounds for frames are now in the `fills` field.
   */
  background?: Paint[];

  /**
   * @deprecated
   * Background color of the node. This is deprecated, as frames now support more than a solid color as a background. Please use the `fills` field instead.
   */
  backgroundColor?: RGBA;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * An array of nodes that are direct children of this node
   */
  children: SubcanvasNode[];

  /**
   * Whether or not this node clip content outside of its bounds
   */
  clipsContent: boolean;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * Radius of each corner if a single radius is set for all corners
   */
  cornerRadius?: number;

  /**
   * A value that lets you control how "smooth" the corners are. Ranges from 0 to 1. 0 is the default and means that the corner is perfectly circular. A value of 0.6 means the corner matches the iOS 7 "squircle" icon shape. Other values produce various other curves.
   */
  cornerSmoothing?: number;

  /**
   * Determines how the auto-layout frame’s wrapped tracks should be aligned in the counter axis direction. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`.
   */
  counterAxisAlignContent?: 'AUTO' | 'SPACE_BETWEEN';

  /**
   * Determines how the auto-layout frame's children should be aligned in the counter axis direction. This property is only applicable for auto-layout frames.
   */
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE';

  /**
   * Whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
   */
  counterAxisSizingMode?: 'FIXED' | 'AUTO';

  /**
   * The distance between wrapped tracks of an auto-layout frame. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`
   */
  counterAxisSpacing?: number;

  /**
   * Whether the node is marked ready for development.
   */
  devStatus?: object;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * An object including the top, bottom, left, and right stroke weights. Only returned if individual stroke weights are used.
   */
  individualStrokeWeights?: StrokeWeights;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   * Determines the canvas stacking order of layers in this frame. When true, the first layer will be draw on top. This property is only applicable for auto-layout frames.
   */
  itemReverseZIndex?: boolean;

  /**
   * The distance between children of the frame. Can be negative. This property is only applicable for auto-layout frames.
   */
  itemSpacing?: number;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * An array of layout grids attached to this node (see layout grids section for more details). GROUP nodes do not have this attribute
   */
  layoutGrids?: LayoutGrid[];

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Whether this layer uses auto-layout to position its children.
   */
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL';

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * Whether this auto-layout frame has wrapping enabled.
   */
  layoutWrap?: 'NO_WRAP' | 'WRAP';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Whether a node has primary axis scrolling, horizontal or vertical.
   */
  overflowDirection?: 'HORIZONTAL_SCROLLING' | 'VERTICAL_SCROLLING' | 'HORIZONTAL_AND_VERTICAL_SCROLLING' | 'NONE';

  /**
   * The padding between the bottom border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingBottom?: number;

  /**
   * The padding between the left border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingLeft?: number;

  /**
   * The padding between the right border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingRight?: number;

  /**
   * The padding between the top border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingTop?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * Determines how the auto-layout frame's children should be aligned in the primary axis direction. This property is only applicable for auto-layout frames.
   */
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN';

  /**
   * Whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
   */
  primaryAxisSizingMode?: 'FIXED' | 'AUTO';

  /**
   * Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise.
   *
   * Values are given in the order top-left, top-right, bottom-right, bottom-left.
   */
  rectangleCornerRadii?: undefined[];

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * Determines whether strokes are included in layout calculations. When true, auto-layout frames behave like css "box-sizing: border-box". This property is only applicable for auto-layout frames.
   */
  strokesIncludedInLayout?: boolean;

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "GROUP"
   */
  type: 'GROUP';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class ComponentNode {
  constructor(private raw: RawComponentNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * @deprecated
   * Background of the node. This is deprecated, as backgrounds for frames are now in the `fills` field.
   */
  background?: Paint[];

  /**
   * @deprecated
   * Background color of the node. This is deprecated, as frames now support more than a solid color as a background. Please use the `fills` field instead.
   */
  backgroundColor?: RGBA;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * An array of nodes that are direct children of this node
   */
  children: SubcanvasNode[];

  /**
   * Whether or not this node clip content outside of its bounds
   */
  clipsContent: boolean;

  /**
   * A mapping of name to `ComponentPropertyDefinition` for every component property on this component. Each property has a type, defaultValue, and other optional values.
   */
  componentPropertyDefinitions?: object;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * Radius of each corner if a single radius is set for all corners
   */
  cornerRadius?: number;

  /**
   * A value that lets you control how "smooth" the corners are. Ranges from 0 to 1. 0 is the default and means that the corner is perfectly circular. A value of 0.6 means the corner matches the iOS 7 "squircle" icon shape. Other values produce various other curves.
   */
  cornerSmoothing?: number;

  /**
   * Determines how the auto-layout frame’s wrapped tracks should be aligned in the counter axis direction. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`.
   */
  counterAxisAlignContent?: 'AUTO' | 'SPACE_BETWEEN';

  /**
   * Determines how the auto-layout frame's children should be aligned in the counter axis direction. This property is only applicable for auto-layout frames.
   */
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE';

  /**
   * Whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
   */
  counterAxisSizingMode?: 'FIXED' | 'AUTO';

  /**
   * The distance between wrapped tracks of an auto-layout frame. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`
   */
  counterAxisSpacing?: number;

  /**
   * Whether the node is marked ready for development.
   */
  devStatus?: object;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * An object including the top, bottom, left, and right stroke weights. Only returned if individual stroke weights are used.
   */
  individualStrokeWeights?: StrokeWeights;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   * Determines the canvas stacking order of layers in this frame. When true, the first layer will be draw on top. This property is only applicable for auto-layout frames.
   */
  itemReverseZIndex?: boolean;

  /**
   * The distance between children of the frame. Can be negative. This property is only applicable for auto-layout frames.
   */
  itemSpacing?: number;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * An array of layout grids attached to this node (see layout grids section for more details). GROUP nodes do not have this attribute
   */
  layoutGrids?: LayoutGrid[];

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Whether this layer uses auto-layout to position its children.
   */
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL';

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * Whether this auto-layout frame has wrapping enabled.
   */
  layoutWrap?: 'NO_WRAP' | 'WRAP';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Whether a node has primary axis scrolling, horizontal or vertical.
   */
  overflowDirection?: 'HORIZONTAL_SCROLLING' | 'VERTICAL_SCROLLING' | 'HORIZONTAL_AND_VERTICAL_SCROLLING' | 'NONE';

  /**
   * The padding between the bottom border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingBottom?: number;

  /**
   * The padding between the left border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingLeft?: number;

  /**
   * The padding between the right border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingRight?: number;

  /**
   * The padding between the top border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingTop?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * Determines how the auto-layout frame's children should be aligned in the primary axis direction. This property is only applicable for auto-layout frames.
   */
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN';

  /**
   * Whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
   */
  primaryAxisSizingMode?: 'FIXED' | 'AUTO';

  /**
   * Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise.
   *
   * Values are given in the order top-left, top-right, bottom-right, bottom-left.
   */
  rectangleCornerRadii?: undefined[];

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * Determines whether strokes are included in layout calculations. When true, auto-layout frames behave like css "box-sizing: border-box". This property is only applicable for auto-layout frames.
   */
  strokesIncludedInLayout?: boolean;

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "COMPONENT"
   */
  type: 'COMPONENT';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class ComponentSetNode {
  constructor(private raw: RawComponentSetNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * @deprecated
   * Background of the node. This is deprecated, as backgrounds for frames are now in the `fills` field.
   */
  background?: Paint[];

  /**
   * @deprecated
   * Background color of the node. This is deprecated, as frames now support more than a solid color as a background. Please use the `fills` field instead.
   */
  backgroundColor?: RGBA;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * An array of nodes that are direct children of this node
   */
  children: SubcanvasNode[];

  /**
   * Whether or not this node clip content outside of its bounds
   */
  clipsContent: boolean;

  /**
   * A mapping of name to `ComponentPropertyDefinition` for every component property on this component. Each property has a type, defaultValue, and other optional values.
   */
  componentPropertyDefinitions?: object;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * Radius of each corner if a single radius is set for all corners
   */
  cornerRadius?: number;

  /**
   * A value that lets you control how "smooth" the corners are. Ranges from 0 to 1. 0 is the default and means that the corner is perfectly circular. A value of 0.6 means the corner matches the iOS 7 "squircle" icon shape. Other values produce various other curves.
   */
  cornerSmoothing?: number;

  /**
   * Determines how the auto-layout frame’s wrapped tracks should be aligned in the counter axis direction. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`.
   */
  counterAxisAlignContent?: 'AUTO' | 'SPACE_BETWEEN';

  /**
   * Determines how the auto-layout frame's children should be aligned in the counter axis direction. This property is only applicable for auto-layout frames.
   */
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE';

  /**
   * Whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
   */
  counterAxisSizingMode?: 'FIXED' | 'AUTO';

  /**
   * The distance between wrapped tracks of an auto-layout frame. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`
   */
  counterAxisSpacing?: number;

  /**
   * Whether the node is marked ready for development.
   */
  devStatus?: object;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * An object including the top, bottom, left, and right stroke weights. Only returned if individual stroke weights are used.
   */
  individualStrokeWeights?: StrokeWeights;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   * Determines the canvas stacking order of layers in this frame. When true, the first layer will be draw on top. This property is only applicable for auto-layout frames.
   */
  itemReverseZIndex?: boolean;

  /**
   * The distance between children of the frame. Can be negative. This property is only applicable for auto-layout frames.
   */
  itemSpacing?: number;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * An array of layout grids attached to this node (see layout grids section for more details). GROUP nodes do not have this attribute
   */
  layoutGrids?: LayoutGrid[];

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Whether this layer uses auto-layout to position its children.
   */
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL';

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * Whether this auto-layout frame has wrapping enabled.
   */
  layoutWrap?: 'NO_WRAP' | 'WRAP';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Whether a node has primary axis scrolling, horizontal or vertical.
   */
  overflowDirection?: 'HORIZONTAL_SCROLLING' | 'VERTICAL_SCROLLING' | 'HORIZONTAL_AND_VERTICAL_SCROLLING' | 'NONE';

  /**
   * The padding between the bottom border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingBottom?: number;

  /**
   * The padding between the left border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingLeft?: number;

  /**
   * The padding between the right border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingRight?: number;

  /**
   * The padding between the top border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingTop?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * Determines how the auto-layout frame's children should be aligned in the primary axis direction. This property is only applicable for auto-layout frames.
   */
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN';

  /**
   * Whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
   */
  primaryAxisSizingMode?: 'FIXED' | 'AUTO';

  /**
   * Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise.
   *
   * Values are given in the order top-left, top-right, bottom-right, bottom-left.
   */
  rectangleCornerRadii?: undefined[];

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * Determines whether strokes are included in layout calculations. When true, auto-layout frames behave like css "box-sizing: border-box". This property is only applicable for auto-layout frames.
   */
  strokesIncludedInLayout?: boolean;

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "COMPONENT_SET"
   */
  type: 'COMPONENT_SET';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class VectorNode {
  constructor(private raw: RawVectorNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * Radius of each corner if a single radius is set for all corners
   */
  cornerRadius?: number;

  /**
   * A value that lets you control how "smooth" the corners are. Ranges from 0 to 1. 0 is the default and means that the corner is perfectly circular. A value of 0.6 means the corner matches the iOS 7 "squircle" icon shape. Other values produce various other curves.
   */
  cornerSmoothing?: number;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise.
   *
   * Values are given in the order top-left, top-right, bottom-right, bottom-left.
   */
  rectangleCornerRadii?: undefined[];

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "VECTOR"
   */
  type: 'VECTOR';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class StarNode {
  constructor(private raw: RawStarNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * Radius of each corner if a single radius is set for all corners
   */
  cornerRadius?: number;

  /**
   * A value that lets you control how "smooth" the corners are. Ranges from 0 to 1. 0 is the default and means that the corner is perfectly circular. A value of 0.6 means the corner matches the iOS 7 "squircle" icon shape. Other values produce various other curves.
   */
  cornerSmoothing?: number;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise.
   *
   * Values are given in the order top-left, top-right, bottom-right, bottom-left.
   */
  rectangleCornerRadii?: undefined[];

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "STAR"
   */
  type: 'STAR';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class LineNode {
  constructor(private raw: RawLineNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "LINE"
   */
  type: 'LINE';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class EllipseNode {
  constructor(private raw: RawEllipseNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  arcData: ArcData;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "ELLIPSE"
   */
  type: 'ELLIPSE';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class RegularPolygonNode {
  constructor(private raw: RawRegularPolygonNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * Radius of each corner if a single radius is set for all corners
   */
  cornerRadius?: number;

  /**
   * A value that lets you control how "smooth" the corners are. Ranges from 0 to 1. 0 is the default and means that the corner is perfectly circular. A value of 0.6 means the corner matches the iOS 7 "squircle" icon shape. Other values produce various other curves.
   */
  cornerSmoothing?: number;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise.
   *
   * Values are given in the order top-left, top-right, bottom-right, bottom-left.
   */
  rectangleCornerRadii?: undefined[];

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "REGULAR_POLYGON"
   */
  type: 'REGULAR_POLYGON';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class RectangleNode {
  constructor(private raw: RawRectangleNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * Radius of each corner if a single radius is set for all corners
   */
  cornerRadius?: number;

  /**
   * A value that lets you control how "smooth" the corners are. Ranges from 0 to 1. 0 is the default and means that the corner is perfectly circular. A value of 0.6 means the corner matches the iOS 7 "squircle" icon shape. Other values produce various other curves.
   */
  cornerSmoothing?: number;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * An object including the top, bottom, left, and right stroke weights. Only returned if individual stroke weights are used.
   */
  individualStrokeWeights?: StrokeWeights;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise.
   *
   * Values are given in the order top-left, top-right, bottom-right, bottom-left.
   */
  rectangleCornerRadii?: undefined[];

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "RECTANGLE"
   */
  type: 'RECTANGLE';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class TextNode {
  constructor(private raw: RawTextNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * The raw characters in the text node.
   */
  characters: string;

  /**
   * Array with same number of elements as characters in text rendered using this style. Each element is a reference to the `styleOverrideTable` and maps to the corresponding character in the characters field. Elements with value 0 have the default type style.
   */
  characterStyleOverrides: undefined[];

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * An array with the same number of elements as lines in the text node, where lines are delimited by newline or paragraph separator characters. Each element in the array corresponds to the indentation level of a specific line.
   */
  lineIndentations: undefined[];

  /**
   * An array with the same number of elements as lines in the text node, where lines are delimited by newline or paragraph separator characters. Each element in the array corresponds to the list type of a specific line. List types are represented as string enums with one of these possible values:
   *
   * - `NONE`: Not a list item.
   * - `ORDERED`: Text is an ordered list (numbered).
   * - `UNORDERED`: Text is an unordered list (bulleted).
   */
  lineTypes: undefined[];

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * Style of text including font family and weight.
   */
  style: TypeStyle;

  /**
   * Map from ID to TypeStyle for looking up style overrides.
   */
  styleOverrideTable: object;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "TEXT"
   */
  type: 'TEXT';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class TableNode {
  constructor(private raw: RawTableNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * An array of nodes that are direct children of this node
   */
  children: SubcanvasNode[];

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * The type of this node, represented by the string literal "TABLE"
   */
  type: 'TABLE';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class TableCellNode {
  constructor(private raw: RawTableCellNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * Text contained within a text box.
   */
  characters: string;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The type of this node, represented by the string literal "TABLE_CELL"
   */
  type: 'TABLE_CELL';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class SliceNode {
  constructor(private raw: RawSliceNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * The type of this node, represented by the string literal "SLICE"
   */
  type: 'SLICE';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class InstanceNode {
  constructor(private raw: RawInstanceNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * @deprecated
   * Background of the node. This is deprecated, as backgrounds for frames are now in the `fills` field.
   */
  background?: Paint[];

  /**
   * @deprecated
   * Background color of the node. This is deprecated, as frames now support more than a solid color as a background. Please use the `fills` field instead.
   */
  backgroundColor?: RGBA;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * An array of nodes that are direct children of this node
   */
  children: SubcanvasNode[];

  /**
   * Whether or not this node clip content outside of its bounds
   */
  clipsContent: boolean;

  /**
   * ID of component that this instance came from.
   */
  componentId: string;

  /**
   * A mapping of name to `ComponentProperty` for all component properties on this instance. Each property has a type, value, and other optional values.
   */
  componentProperties?: object;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * Radius of each corner if a single radius is set for all corners
   */
  cornerRadius?: number;

  /**
   * A value that lets you control how "smooth" the corners are. Ranges from 0 to 1. 0 is the default and means that the corner is perfectly circular. A value of 0.6 means the corner matches the iOS 7 "squircle" icon shape. Other values produce various other curves.
   */
  cornerSmoothing?: number;

  /**
   * Determines how the auto-layout frame’s wrapped tracks should be aligned in the counter axis direction. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`.
   */
  counterAxisAlignContent?: 'AUTO' | 'SPACE_BETWEEN';

  /**
   * Determines how the auto-layout frame's children should be aligned in the counter axis direction. This property is only applicable for auto-layout frames.
   */
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'BASELINE';

  /**
   * Whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
   */
  counterAxisSizingMode?: 'FIXED' | 'AUTO';

  /**
   * The distance between wrapped tracks of an auto-layout frame. This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`
   */
  counterAxisSpacing?: number;

  /**
   * Whether the node is marked ready for development.
   */
  devStatus?: object;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * IDs of instances that have been exposed to this node's level.
   */
  exposedInstances?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * An object including the top, bottom, left, and right stroke weights. Only returned if individual stroke weights are used.
   */
  individualStrokeWeights?: StrokeWeights;

  /**
   * If true, this node has been marked as exposed to its containing component or component set.
   */
  isExposedInstance?: boolean;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   * Determines the canvas stacking order of layers in this frame. When true, the first layer will be draw on top. This property is only applicable for auto-layout frames.
   */
  itemReverseZIndex?: boolean;

  /**
   * The distance between children of the frame. Can be negative. This property is only applicable for auto-layout frames.
   */
  itemSpacing?: number;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * An array of layout grids attached to this node (see layout grids section for more details). GROUP nodes do not have this attribute
   */
  layoutGrids?: LayoutGrid[];

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Whether this layer uses auto-layout to position its children.
   */
  layoutMode?: 'NONE' | 'HORIZONTAL' | 'VERTICAL';

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * Whether this auto-layout frame has wrapping enabled.
   */
  layoutWrap?: 'NO_WRAP' | 'WRAP';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Whether a node has primary axis scrolling, horizontal or vertical.
   */
  overflowDirection?: 'HORIZONTAL_SCROLLING' | 'VERTICAL_SCROLLING' | 'HORIZONTAL_AND_VERTICAL_SCROLLING' | 'NONE';

  /**
   * An array of all of the fields directly overridden on this instance. Inherited overrides are not included.
   */
  overrides: Overrides[];

  /**
   * The padding between the bottom border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingBottom?: number;

  /**
   * The padding between the left border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingLeft?: number;

  /**
   * The padding between the right border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingRight?: number;

  /**
   * The padding between the top border of the frame and its children. This property is only applicable for auto-layout frames.
   */
  paddingTop?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * Determines how the auto-layout frame's children should be aligned in the primary axis direction. This property is only applicable for auto-layout frames.
   */
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN';

  /**
   * Whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine). This property is only applicable for auto-layout frames.
   */
  primaryAxisSizingMode?: 'FIXED' | 'AUTO';

  /**
   * Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise.
   *
   * Values are given in the order top-left, top-right, bottom-right, bottom-left.
   */
  rectangleCornerRadii?: undefined[];

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * Determines whether strokes are included in layout calculations. When true, auto-layout frames behave like css "box-sizing: border-box". This property is only applicable for auto-layout frames.
   */
  strokesIncludedInLayout?: boolean;

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "INSTANCE"
   */
  type: 'INSTANCE';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class EmbedNode {
  constructor(private raw: RawEmbedNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * The type of this node, represented by the string literal "EMBED"
   */
  type: 'EMBED';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class LinkUnfurlNode {
  constructor(private raw: RawLinkUnfurlNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * The type of this node, represented by the string literal "LINK_UNFURL"
   */
  type: 'LINK_UNFURL';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class StickyNode {
  constructor(private raw: RawStickyNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * If true, author name is visible.
   */
  authorVisible?: boolean;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * Text contained within a text box.
   */
  characters: string;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The type of this node, represented by the string literal "STICKY"
   */
  type: 'STICKY';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class ShapeWithTextNode {
  constructor(private raw: RawShapeWithTextNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * Text contained within a text box.
   */
  characters: string;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * Radius of each corner if a single radius is set for all corners
   */
  cornerRadius?: number;

  /**
   * A value that lets you control how "smooth" the corners are. Ranges from 0 to 1. 0 is the default and means that the corner is perfectly circular. A value of 0.6 means the corner matches the iOS 7 "squircle" icon shape. Other values produce various other curves.
   */
  cornerSmoothing?: number;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise.
   *
   * Values are given in the order top-left, top-right, bottom-right, bottom-left.
   */
  rectangleCornerRadii?: undefined[];

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Geometric shape type. Most shape types have the same name as their tooltip but there are a few exceptions. ENG_DATABASE: Cylinder, ENG_QUEUE: Horizontal cylinder, ENG_FILE: File, ENG_FOLDER: Folder.
   */
  shapeType: ShapeType;

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The type of this node, represented by the string literal "SHAPE_WITH_TEXT"
   */
  type: 'SHAPE_WITH_TEXT';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class ConnectorNode {
  constructor(private raw: RawConnectorNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * Text contained within a text box.
   */
  characters: string;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * The ending point of the connector.
   */
  connectorEnd: ConnectorEndpoint;

  /**
   * A string enum describing the end cap of the end of the connector.
   */
  connectorEndStrokeCap: 'NONE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED';

  /**
   * Connector line type.
   */
  connectorLineType: ConnectorLineType;

  /**
   * The starting point of the connector.
   */
  connectorStart: ConnectorEndpoint;

  /**
   * A string enum describing the end cap of the start of the connector.
   */
  connectorStartStrokeCap: 'NONE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED';

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * Connector text background.
   */
  textBackground?: ConnectorTextBackground;

  /**
   * The type of this node, represented by the string literal "CONNECTOR"
   */
  type: 'CONNECTOR';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class WashiTapeNode {
  constructor(private raw: RawWashiTapeNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  children: SubcanvasNode[];

  /**
   * Bounding box of the node in absolute space coordinates.
   */
  absoluteBoundingBox: Rectangle | null;

  /**
   * The actual bounds of a node accounting for drop shadows, thick strokes, and anything else that may fall outside the node's regular bounding box defined in `x`, `y`, `width`, and `height`. The `x` and `y` inside this property represent the absolute position of the node on the page. This value will be `null` if the node is invisible.
   */
  absoluteRenderBounds: Rectangle | null;

  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode;

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * Horizontal and vertical layout constraints for node.
   */
  constraints?: LayoutConstraint;

  /**
   * An array of effects attached to this node (see effects section for more details)
   */
  effects: Effect[];

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object fill.
   */
  fillGeometry?: Path[];

  /**
   * Map from ID to PaintOverride for looking up fill overrides. To see which regions are overriden, you must use the `geometry=paths` option. Each path returned may have an `overrideID` which maps to this table.
   */
  fillOverrideTable?: object;

  /**
   * An array of fill paints applied to the node.
   */
  fills: Paint[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * Does this node mask sibling nodes in front of it?
   */
  isMask?: boolean;

  /**
   * @deprecated
   * True if maskType is VECTOR. This field is deprecated; use maskType instead.
   */
  isMaskOutline?: boolean;

  /**
   *
   * Determines if the layer should stretch along the parent's counter axis. This property is only provided for direct children of auto-layout frames.
   *
   * - `INHERIT`
   * - `STRETCH`
   *
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame. This property is only provided for direct children of auto-layout frames.
   *
   * - `MIN`
   * - `CENTER`
   * - `MAX`
   * - `STRETCH`
   *
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM". In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  layoutAlign?: 'INHERIT' | 'STRETCH' | 'MIN' | 'CENTER' | 'MAX';

  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise. Determines whether a layer should stretch along the parent's primary axis. A `0` corresponds to a fixed size and `1` corresponds to stretch.
   */
  layoutGrow?: number;

  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   */
  layoutPositioning?: 'AUTO' | 'ABSOLUTE';

  /**
   * The horizontal sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingHorizontal?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * The vertical sizing setting on this auto-layout frame or frame child.
   * - `FIXED`
   * - `HUG`: only valid on auto-layout frames and text nodes
   * - `FILL`: only valid on auto-layout frame children
   */
  layoutSizingVertical?: 'FIXED' | 'HUG' | 'FILL';

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * If this layer is a mask, this property describes the operation used to mask the layer's siblings. The value may be one of the following:
   *
   * - ALPHA: the mask node's alpha channel will be used to determine the opacity of each pixel in the masked result.
   * - VECTOR: if the mask node has visible fill paints, every pixel inside the node's fill regions will be fully visible in the masked result. If the mask has visible stroke paints, every pixel inside the node's stroke regions will be fully visible in the masked result.
   * - LUMINANCE: the luminance value of each pixel of the mask node will be used to determine the opacity of that pixel in the masked result.
   */
  maskType?: 'ALPHA' | 'VECTOR' | 'LUMINANCE';

  /**
   * The maximum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxHeight?: number;

  /**
   * The maximum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  maxWidth?: number;

  /**
   * The minimum height of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minHeight?: number;

  /**
   * The minimum width of the frame. This property is only applicable for auto-layout frames or direct children of auto-layout frames.
   */
  minWidth?: number;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Opacity of the node
   */
  opacity?: number;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * Keep height and width constrained to same ratio.
   */
  preserveRatio?: boolean;

  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent. The bottom row of the matrix is implicitly always (0, 0, 1). Use to transform coordinates in geometry. Only present if `geometry=paths` is passed.
   */
  relativeTransform?: Transform;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * Width and height of element. This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation. Only present if `geometry=paths` is passed.
   */
  size?: Vector;

  /**
   * Position of stroke relative to vector outline, as a string enum
   *
   * - `INSIDE`: stroke drawn inside the shape boundary
   * - `OUTSIDE`: stroke drawn outside the shape boundary
   * - `CENTER`: stroke drawn centered along the shape boundary
   */
  strokeAlign?: 'INSIDE' | 'OUTSIDE' | 'CENTER';

  /**
   * A string enum describing the end caps of vector paths.
   */
  strokeCap?: 'NONE' | 'ROUND' | 'SQUARE' | 'LINE_ARROW' | 'TRIANGLE_ARROW' | 'DIAMOND_FILLED' | 'CIRCLE_FILLED' | 'TRIANGLE_FILLED' | 'WASHI_TAPE_1' | 'WASHI_TAPE_2' | 'WASHI_TAPE_3' | 'WASHI_TAPE_4' | 'WASHI_TAPE_5' | 'WASHI_TAPE_6';

  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector stroke will use when drawn.
   *
   * For example a value of [1, 2] indicates that the stroke will be drawn with a dash of length 1 followed by a gap of length 2, repeated.
   */
  strokeDashes?: undefined[];

  /**
   * Only specified if parameter `geometry=paths` is used. An array of paths representing the object stroke.
   */
  strokeGeometry?: Path[];

  /**
   * A string enum with value of "MITER", "BEVEL", or "ROUND", describing how corners in vector paths are rendered.
   */
  strokeJoin?: 'MITER' | 'BEVEL' | 'ROUND';

  /**
   * Only valid if `strokeJoin` is "MITER". The corner angle, in degrees, below which `strokeJoin` will be set to "BEVEL" to avoid super sharp corners. By default this is 28.96 degrees.
   */
  strokeMiterAngle?: number;

  /**
   * An array of stroke paints applied to the node.
   */
  strokes?: Paint[];

  /**
   * The weight of strokes on the node.
   */
  strokeWeight?: number;

  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node. The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles?: object;

  /**
   * The duration of the prototyping transition on this node (in milliseconds). This will override the default transition duration on the prototype, for this node.
   */
  transitionDuration?: number;

  /**
   * The easing curve used in the prototyping transition on this node.
   */
  transitionEasing?: EasingType;

  /**
   * Node ID of node to transition to in prototyping
   */
  transitionNodeID?: string;

  /**
   * The type of this node, represented by the string literal "WASHI_TAPE"
   */
  type: 'WASHI_TAPE';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export class WidgetNode {
  constructor(private raw: RawWidgetNode) {
    Object.assign(this, raw);
    if (raw.children && Array.isArray(raw.children)) {
      this.children = raw.children.map(createNode);
    }
  }

  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single `VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`, and `textRangeFills`, it is possible to have multiple variables bound to the field.
   */
  boundVariables?: object;

  /**
   * An array of nodes that are direct children of this node
   */
  children: SubcanvasNode[];

  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences?: object;

  /**
   * A mapping of variable collection ID to mode ID representing the explicitly set modes for this node.
   */
  explicitVariableModes?: object;

  /**
   * An array of export settings representing images to export from the node.
   */
  exportSettings?: ExportSetting[];

  /**
   * A string uniquely identifying this node within the document.
   */
  id: string;

  /**
   * @deprecated
   * Whether the layer is fixed while the parent is scrolling
   */
  isFixed?: boolean;

  /**
   * If true, layer is locked and cannot be edited
   */
  locked?: boolean;

  /**
   * The name given to the node by the user in the tool.
   */
  name: string;

  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData?: any;

  /**
   * The rotation of the node, if not 0.
   */
  rotation?: number;

  /**
   * How layer should be treated when the frame is resized
   */
  scrollBehavior: 'SCROLLS' | 'FIXED' | 'STICKY_SCROLLS';

  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData?: any;

  /**
   * The type of this node, represented by the string literal "WIDGET"
   */
  type: 'WIDGET';

  /**
   * Whether or not the node is visible on the canvas.
   */
  visible?: boolean;
}

export const isDocumentNodeInstance = <N extends AnyNode>(node: N): node is N & DocumentNode => 'type' in node && node.type === 'DOCUMENT';
export const isCanvasNodeInstance = <N extends AnyNode>(node: N): node is N & CanvasNode => 'type' in node && node.type === 'CANVAS';
export const isBooleanOperationNodeInstance = <N extends AnyNode>(node: N): node is N & BooleanOperationNode => 'type' in node && node.type === 'BOOLEAN_OPERATION';
export const isSectionNodeInstance = <N extends AnyNode>(node: N): node is N & SectionNode => 'type' in node && node.type === 'SECTION';
export const isFrameNodeInstance = <N extends AnyNode>(node: N): node is N & FrameNode => 'type' in node && node.type === 'FRAME';
export const isGroupNodeInstance = <N extends AnyNode>(node: N): node is N & GroupNode => 'type' in node && node.type === 'GROUP';
export const isComponentNodeInstance = <N extends AnyNode>(node: N): node is N & ComponentNode => 'type' in node && node.type === 'COMPONENT';
export const isComponentSetNodeInstance = <N extends AnyNode>(node: N): node is N & ComponentSetNode => 'type' in node && node.type === 'COMPONENT_SET';
export const isVectorNodeInstance = <N extends AnyNode>(node: N): node is N & VectorNode => 'type' in node && node.type === 'VECTOR';
export const isStarNodeInstance = <N extends AnyNode>(node: N): node is N & StarNode => 'type' in node && node.type === 'STAR';
export const isLineNodeInstance = <N extends AnyNode>(node: N): node is N & LineNode => 'type' in node && node.type === 'LINE';
export const isEllipseNodeInstance = <N extends AnyNode>(node: N): node is N & EllipseNode => 'type' in node && node.type === 'ELLIPSE';
export const isRegularPolygonNodeInstance = <N extends AnyNode>(node: N): node is N & RegularPolygonNode => 'type' in node && node.type === 'REGULAR_POLYGON';
export const isRectangleNodeInstance = <N extends AnyNode>(node: N): node is N & RectangleNode => 'type' in node && node.type === 'RECTANGLE';
export const isTextNodeInstance = <N extends AnyNode>(node: N): node is N & TextNode => 'type' in node && node.type === 'TEXT';
export const isTableNodeInstance = <N extends AnyNode>(node: N): node is N & TableNode => 'type' in node && node.type === 'TABLE';
export const isTableCellNodeInstance = <N extends AnyNode>(node: N): node is N & TableCellNode => 'type' in node && node.type === 'TABLE_CELL';
export const isSliceNodeInstance = <N extends AnyNode>(node: N): node is N & SliceNode => 'type' in node && node.type === 'SLICE';
export const isInstanceNodeInstance = <N extends AnyNode>(node: N): node is N & InstanceNode => 'type' in node && node.type === 'INSTANCE';
export const isEmbedNodeInstance = <N extends AnyNode>(node: N): node is N & EmbedNode => 'type' in node && node.type === 'EMBED';
export const isLinkUnfurlNodeInstance = <N extends AnyNode>(node: N): node is N & LinkUnfurlNode => 'type' in node && node.type === 'LINK_UNFURL';
export const isStickyNodeInstance = <N extends AnyNode>(node: N): node is N & StickyNode => 'type' in node && node.type === 'STICKY';
export const isShapeWithTextNodeInstance = <N extends AnyNode>(node: N): node is N & ShapeWithTextNode => 'type' in node && node.type === 'SHAPE_WITH_TEXT';
export const isConnectorNodeInstance = <N extends AnyNode>(node: N): node is N & ConnectorNode => 'type' in node && node.type === 'CONNECTOR';
export const isWashiTapeNodeInstance = <N extends AnyNode>(node: N): node is N & WashiTapeNode => 'type' in node && node.type === 'WASHI_TAPE';
export const isWidgetNodeInstance = <N extends AnyNode>(node: N): node is N & WidgetNode => 'type' in node && node.type === 'WIDGET';
export const hasChildren = (node: AnyNode): node is DocumentNode | CanvasNode | BooleanOperationNode | SectionNode | FrameNode | GroupNode | ComponentNode | ComponentSetNode | TableNode | InstanceNode | WidgetNode => 'children' in node;

const typeConstructorMap = {
  DOCUMENT: DocumentNode,
  CANVAS: CanvasNode,
  BOOLEAN_OPERATION: BooleanOperationNode,
  SECTION: SectionNode,
  FRAME: FrameNode,
  GROUP: GroupNode,
  COMPONENT: ComponentNode,
  COMPONENT_SET: ComponentSetNode,
  VECTOR: VectorNode,
  STAR: StarNode,
  LINE: LineNode,
  ELLIPSE: EllipseNode,
  REGULAR_POLYGON: RegularPolygonNode,
  RECTANGLE: RectangleNode,
  TEXT: TextNode,
  TABLE: TableNode,
  TABLE_CELL: TableCellNode,
  SLICE: SliceNode,
  INSTANCE: InstanceNode,
  EMBED: EmbedNode,
  LINK_UNFURL: LinkUnfurlNode,
  STICKY: StickyNode,
  SHAPE_WITH_TEXT: ShapeWithTextNode,
  CONNECTOR: ConnectorNode,
  WASHI_TAPE: WashiTapeNode,
  WIDGET: WidgetNode,
} as const;

export type NodeTypes = keyof typeof typeConstructorMap;

export type NodeConstructors = (typeof typeConstructorMap)[NodeTypes];

export type TypeOfRawNode<T extends RawNode> = T extends { type: infer R } ? R : never;

export type InstanceByRawNode<T extends RawNode> = T extends { type: infer R } ? InstanceType<(typeof typeConstructorMap)[R]> : never;

export function createNode<N extends RawNode>(node: N): InstanceByRawNode<N> {
  return new typeConstructorMap[node.type](node);
}

export function withPrototype(prototype) {
  return function createNode<N extends RawNode>(node: N): InstanceByRawNode<N> {
    const nodeInstance = new typeConstructorMap[node.type](node);
    return Object.setPrototypeOf(nodeInstance, prototype);
  };
}

export function getNodeConstructor<N extends RawNode>(node: N): (typeof typeConstructorMap)[TypeOfRawNode<N>] {
  return typeConstructorMap[node.type];
}
