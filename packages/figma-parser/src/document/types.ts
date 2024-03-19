import type {
  BooleanOperationNode,
  CanvasNode,
  ComponentNode,
  ComponentSetNode,
  DocumentNode,
  EllipseNode,
  FrameNode,
  GroupNode,
  InstanceNode,
  LineNode,
  Node,
  RectangleNode,
  RegularPolygonNode,
  SliceNode,
  StarNode,
  TextNode,
  VectorNode,
} from '@figma/rest-api-spec';
import { AbstractNode } from '../shared/node.abstract';
import { OnPurposeAny } from '../types';
import { SingleNode } from './single-node';

export interface PathBreadcrumb {
  name: string;
  id: string;
}

export type FigmaNodeId = `${number}:${number}` | string;

export const hasChildren = (node: Node): node is Node & { children: OnPurposeAny } => !!node && 'children' in node && Array.isArray(node.children) && node.children.length > 0;

export const isFigmaNodeId = (value: string): value is FigmaNodeId => /\d+:\d+/.test(value);

export const nodeTypes = ['DOCUMENT', 'CANVAS', 'FRAME', 'GROUP', 'VECTOR', 'BOOLEAN_OPERATION', 'STAR', 'LINE', 'ELLIPSE', 'REGULAR_POLYGON', 'RECTANGLE', 'TEXT', 'SLICE', 'COMPONENT', 'COMPONENT_SET', 'INSTANCE'];

export const isNode = (value: object): value is Node => {
  if (!value) return false;
  return 'id' in value && 'name' in value && 'type' in value && nodeTypes.includes(value.type as string);
};

export const isSingleNode = (value: unknown): value is Node => {
  if (!value) return false;
  return value instanceof SingleNode;
};

export interface GlobSearchNodes {
  node: SingleNode;
  path: PathBreadcrumb[];
}

export const isDocumentNode = (node: AbstractNode): node is AbstractNode<DocumentNode> => !!node && node.raw.type === 'DOCUMENT';
export const isCanvasNode = (node: AbstractNode): node is AbstractNode<CanvasNode> => !!node && node.raw.type === 'CANVAS';
export const isFrameNode = (node: AbstractNode): node is AbstractNode<FrameNode> => !!node && node.raw.type === 'FRAME';
export const isGroupNode = (node: AbstractNode): node is AbstractNode<GroupNode> => !!node && node.raw.type === 'GROUP';
export const isVectorNode = (node: AbstractNode): node is AbstractNode<VectorNode> => !!node && node.raw.type === 'VECTOR';
export const isBooleanOperationNode = (node: AbstractNode): node is AbstractNode<BooleanOperationNode> => !!node && node.raw.type === 'BOOLEAN_OPERATION';
export const isStarNode = (node: AbstractNode): node is AbstractNode<StarNode> => !!node && node.raw.type === 'STAR';
export const isLineNode = (node: AbstractNode): node is AbstractNode<LineNode> => !!node && node.raw.type === 'LINE';
export const isEllipseNode = (node: AbstractNode): node is AbstractNode<EllipseNode> => !!node && node.raw.type === 'ELLIPSE';
export const isRegularPolygonNode = (node: AbstractNode): node is AbstractNode<RegularPolygonNode> => !!node && node.raw.type === 'REGULAR_POLYGON';
export const isRectangleNode = (node: AbstractNode): node is AbstractNode<RectangleNode> => !!node && node.raw.type === 'RECTANGLE';
export const isTextNode = (node: AbstractNode): node is AbstractNode<TextNode> => !!node && node.raw.type === 'TEXT';
export const isSliceNode = (node: AbstractNode): node is AbstractNode<SliceNode> => !!node && node.raw.type === 'SLICE';
export const isComponentNode = (node: AbstractNode): node is AbstractNode<ComponentNode> => !!node && node.raw.type === 'COMPONENT';
export const isComponentSetNode = (node: AbstractNode): node is AbstractNode<ComponentSetNode> => !!node && node.raw.type === 'COMPONENT_SET';
export const isInstanceNode = (node: AbstractNode): node is AbstractNode<InstanceNode> => !!node && node.raw.type === 'INSTANCE';
