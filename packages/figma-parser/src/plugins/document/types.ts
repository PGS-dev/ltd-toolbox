import { Node } from '../../full-figma-types.ts'
import { NodeCollection } from './node-collection.ts'
import { SingleNode } from './single-node.ts'

export interface PathBreadcrumb {
  name: string;
  id: string;
}

export type FigmaId = `${number}:${number}` | string

export const hasChildren = <T = Node>(node: any): node is Node & { children: ReadonlyArray<T> } =>
  node && 'children' in node && node.children.length > 0;

export const isFigmaId = (value: any): value is FigmaId => /\d+:\d+/.test(value)

export const nodeTypes = ['DOCUMENT', 'CANVAS', 'FRAME', 'GROUP', 'VECTOR', 'BOOLEAN_OPERATION', 'STAR', 'LINE', 'ELLIPSE', 'REGULAR_POLYGON', 'RECTANGLE', 'TEXT', 'SLICE', 'COMPONENT', 'COMPONENT_SET', 'INSTANCE'];

export const isNode = (value: any): value is Node => {
  if (!value) return false
  return 'id' in value && 'name' in value &&'type' in value && nodeTypes.includes(value.type)
}

export type CallbackFunction<OUT = void> = (node: SingleNode, index?: number, collection?: NodeCollection) => OUT

export interface GlobSearchNodes {
  node: SingleNode,
  path: PathBreadcrumb[]
}
