import { NodeCollection } from './node-collection';
import { SingleNode } from './single-node';
import type {
  BooleanOperation,
  Canvas,
  Component,
  ComponentSet,
  Document,
  Ellipse,
  Frame,
  Group,
  Instance,
  Line,
  Node,
  Rectangle,
  RegularPolygon,
  Slice,
  Star,
  Text,
  Vector,
} from '../../full-figma-types';

export interface PathBreadcrumb {
  name: string;
  id: string;
}

export type FigmaNodeId = `${number}:${number}` | string;

export const hasChildren = <T = Node>(node: object): node is Node & { children: ReadonlyArray<T> } => !!node && "children" in node && Array.isArray(node.children) && node.children.length > 0;

export const isFigmaNodeId = (value: string): value is FigmaNodeId =>
  /\d+:\d+/.test(value);

export const nodeTypes = [
  "DOCUMENT",
  "CANVAS",
  "FRAME",
  "GROUP",
  "VECTOR",
  "BOOLEAN_OPERATION",
  "STAR",
  "LINE",
  "ELLIPSE",
  "REGULAR_POLYGON",
  "RECTANGLE",
  "TEXT",
  "SLICE",
  "COMPONENT",
  "COMPONENT_SET",
  "INSTANCE",
];

export const isNode = (value: object): value is Node => {
  if (!value) return false;
  return (
    "id" in value &&
    "name" in value &&
    "type" in value &&
    nodeTypes.includes(value.type as string)
  );
};

export const isSingleNode = (value: unknown): value is Node => {
  if (!value) return false;
  return value instanceof SingleNode;
};

export type CallbackFunction<OUT = void> = (
  node: SingleNode,
  index?: number,
  collection?: NodeCollection,
) => OUT;

export interface GlobSearchNodes {
  node: SingleNode;
  path: PathBreadcrumb[];
}

export type SingleDocumentNode = SingleNode & Document;
export type SingleCanvasNode = SingleNode & Canvas;
export type SingleFrameNode = SingleNode & Frame;
export type SingleGroupNode = SingleNode & Group;
export type SingleVectorNode = SingleNode & Vector;
export type SingleBooleanOperationNode = SingleNode & BooleanOperation;
export type SingleStarNode = SingleNode & Star;
export type SingleLineNode = SingleNode & Line;
export type SingleEllipseNode = SingleNode & Ellipse;
export type SingleRegularPolygonNode = SingleNode & RegularPolygon;
export type SingleRectangleNode = SingleNode & Rectangle;
export type SingleTextNode = SingleNode & Text;
export type SingleSliceNode = SingleNode & Slice;
export type SingleComponentNode = SingleNode & Component;
export type SingleComponentSetNode = SingleNode & ComponentSet;
export type SingleInstanceNode = SingleNode & Instance;

export const isDocumentNode = (node: SingleNode): node is SingleDocumentNode =>
  node.type === "DOCUMENT";
export const isCanvasNode = (node: SingleNode): node is SingleCanvasNode =>
  node.type === "CANVAS";
export const isFrameNode = (node: SingleNode): node is SingleFrameNode =>
  node.type === "FRAME";
export const isGroupNode = (node: SingleNode): node is SingleGroupNode =>
  node.type === "GROUP";
export const isVectorNode = (node: SingleNode): node is SingleVectorNode =>
  node.type === "VECTOR";
export const isBooleanOperationNode = (
  node: SingleNode,
): node is SingleBooleanOperationNode => node.type === "BOOLEAN_OPERATION";
export const isStarNode = (node: SingleNode): node is SingleStarNode =>
  node.type === "STAR";
export const isLineNode = (node: SingleNode): node is SingleLineNode =>
  node.type === "LINE";
export const isEllipseNode = (node: SingleNode): node is SingleEllipseNode =>
  node.type === "ELLIPSE";
export const isRegularPolygonNode = (
  node: SingleNode,
): node is SingleRegularPolygonNode => node.type === "REGULAR_POLYGON";
export const isRectangleNode = (
  node: SingleNode,
): node is SingleRectangleNode => node.type === "RECTANGLE";
export const isTextNode = (node: SingleNode): node is SingleTextNode =>
  node.type === "TEXT";
export const isSliceNode = (node: SingleNode): node is SingleSliceNode =>
  node.type === "SLICE";
export const isComponentNode = (
  node: SingleNode,
): node is SingleComponentNode => node.type === "COMPONENT";
export const isComponentSetNode = (
  node: SingleNode,
): node is SingleComponentSetNode => node.type === "COMPONENT_SET";
export const isInstanceNode = (node: SingleNode): node is SingleInstanceNode =>
  node.type === "INSTANCE";
