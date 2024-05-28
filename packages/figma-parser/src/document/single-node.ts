import type { Node } from '@figma/rest-api-spec';
import { NodeBase } from '../shared/node.abstract';
import type { PathBreadcrumb } from './types';

export type WalkPredicate = (node: SingleNode, path: PathBreadcrumb[]) => void;

/**
 * Represents a single node in a Figma file, providing utilities for navigation, search, and data extraction.
 */
export class SingleNode<T extends Node = Node> extends NodeBase<T> {}
