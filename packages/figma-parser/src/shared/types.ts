import {
  BooleanOperationNode,
  CanvasNode,
  ComponentNode,
  ComponentSetNode,
  ConnectorNode,
  DocumentNode,
  EllipseNode,
  EmbedNode,
  FrameNode,
  GroupNode,
  InstanceNode,
  LineNode,
  LinkUnfurlNode,
  Node,
  RectangleNode,
  RegularPolygonNode,
  SectionNode,
  ShapeWithTextNode,
  SliceNode,
  StarNode,
  StickyNode,
  TableCellNode,
  TableNode,
  TextNode,
  VectorNode,
  WashiTapeNode,
  WidgetNode,
} from '@figma/rest-api-spec';
import { NodeBase } from './node.abstract';

export const isBooleanOperationNode = (node: NodeBase): node is NodeBase<BooleanOperationNode> & BooleanOperationNode => node.type === 'BOOLEAN_OPERATION';
export const isComponentNode = (node: NodeBase): node is NodeBase<ComponentNode> & ComponentNode => node.type === 'COMPONENT';
export const isComponentSetNode = (node: NodeBase): node is NodeBase<ComponentSetNode> & ComponentSetNode => node.type === 'COMPONENT_SET';
export const isConnectorNode = (node: NodeBase): node is NodeBase<ConnectorNode> & ConnectorNode => node.type === 'CONNECTOR';
export const isEllipseNode = (node: NodeBase): node is NodeBase<EllipseNode> & EllipseNode => node.type === 'ELLIPSE';
export const isEmbedNode = (node: NodeBase): node is NodeBase<EmbedNode> & EmbedNode => node.type === 'EMBED';
export const isFrameNode = (node: NodeBase): node is NodeBase<FrameNode> & FrameNode => node.type === 'FRAME';
export const isGroupNode = (node: NodeBase): node is NodeBase<GroupNode> & GroupNode => node.type === 'GROUP';
export const isInstanceNode = (node: NodeBase): node is NodeBase<InstanceNode> & InstanceNode => node.type === 'INSTANCE';
export const isLineNode = (node: NodeBase): node is NodeBase<LineNode> & LineNode => node.type === 'LINE';
export const isLinkUnfurlNode = (node: NodeBase): node is NodeBase<LinkUnfurlNode> & LinkUnfurlNode => node.type === 'LINK_UNFURL';
export const isRectangleNode = (node: NodeBase): node is NodeBase<RectangleNode> & RectangleNode => node.type === 'RECTANGLE';
export const isRegularPolygonNode = (node: NodeBase): node is NodeBase<RegularPolygonNode> & RegularPolygonNode => node.type === 'REGULAR_POLYGON';
export const isSectionNode = (node: NodeBase): node is NodeBase<SectionNode> & SectionNode => node.type === 'SECTION';
export const isShapeWithTextNode = (node: NodeBase): node is NodeBase<ShapeWithTextNode> & ShapeWithTextNode => node.type === 'SHAPE_WITH_TEXT';
export const isSliceNode = (node: NodeBase): node is NodeBase<SliceNode> & SliceNode => node.type === 'SLICE';
export const isStarNode = (node: NodeBase): node is NodeBase<StarNode> & StarNode => node.type === 'STAR';
export const isStickyNode = (node: NodeBase): node is NodeBase<StickyNode> & StickyNode => node.type === 'STICKY';
export const isTableNode = (node: NodeBase): node is NodeBase<TableNode> & TableNode => node.type === 'TABLE';
export const isTableCellNode = (node: NodeBase): node is NodeBase<TableCellNode> & TableCellNode => node.type === 'TABLE_CELL';
export const isTextNode = (node: NodeBase): node is NodeBase<TextNode> & TextNode => node.type === 'TEXT';
export const isVectorNode = (node: NodeBase): node is NodeBase<VectorNode> & VectorNode => node.type === 'VECTOR';
export const isWashiTapeNode = (node: NodeBase): node is NodeBase<WashiTapeNode> & WashiTapeNode => node.type === 'WASHI_TAPE';
export const isWidgetNode = (node: NodeBase): node is NodeBase<WidgetNode> & WidgetNode => node.type === 'WIDGET';
export const isDocumentNode = (node: NodeBase): node is NodeBase<DocumentNode> & DocumentNode => node.type === 'DOCUMENT';
export const isCanvasNode = (node: NodeBase): node is NodeBase<CanvasNode> & CanvasNode => node.type === 'CANVAS';

export function hasChildren<T>(node: NodeBase): node is NodeBase & { children: T[] };
export function hasChildren(node: NodeBase): node is NodeBase & { children: NodeBase[] };
export function hasChildren(node: Node): node is Node & { children: Node[] };
export function hasChildren(node: NodeBase | Node): boolean {
  return !!node && 'children' in node && Array.isArray(node.children) && node.children.length > 0;
}

type NodeProperties = { [k in keyof Node]: Readonly<Node[k]> };

class _FigmaNodeMock {
  constructor(raw: Node) {
    Object.assign(this, raw);
  }
}

export const FigmaNodeMock = _FigmaNodeMock as new (raw: Node) => NodeProperties;
