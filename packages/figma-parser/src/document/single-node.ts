import { Node } from '@figma/rest-api-spec';
import { AbstractNode } from '../shared/node.abstract';
import { PathBreadcrumb } from './types';

export type WalkPredicate = (node: SingleNode, path: PathBreadcrumb[]) => void;

/**
 * Represents a single node in a Figma file, providing utilities for navigation, search, and data extraction.
 */
export class SingleNode<T extends Node = Node> extends AbstractNode<T> {}
