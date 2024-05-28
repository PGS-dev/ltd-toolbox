import type { Node } from '@figma/rest-api-spec';
import { SingleNode } from './single-node';

export interface PathBreadcrumb {
  name: string;
  id: string;
}

export type FigmaNodeId = `${number}:${number}` | string;

export const isSingleNode = (value: unknown): value is Node => {
  if (!value) return false;
  return value instanceof SingleNode;
};

export interface GlobSearchNodes {
  node: SingleNode;
  path: PathBreadcrumb[];
}
