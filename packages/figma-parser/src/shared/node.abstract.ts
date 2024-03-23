import { Node } from '@figma/rest-api-spec';
import pm from 'picomatch';
import { GlobSearchNodes, PathBreadcrumb } from '../document/types';
import { OnPurposeAny } from '../types';
import { FigmaNodeMock, hasChildren } from './types';

export type WithChildren<T> = T & { children?: T[] };

/**
 * Represents a single node in a Figma file, providing utilities for navigation, search, and data extraction.
 */
export class NodeBase<T extends Node = Node> extends FigmaNodeMock {
  children: this[] = [];

  /**
   * Constructs a SingleNode instance from a Figma Node object or an existing SingleNode instance.
   */
  constructor(
    public raw: T,
    public parent?: NodeBase
  ) {
    super(raw);

    if (hasChildren(raw)) {
      this.children = raw.children.map((rawChildNode) => new (new.target as OnPurposeAny)(rawChildNode, this));
    }
  }

  /**
   * Prints a table in the console with information about the node, including its children count, id, name, and type.
   */
  table() {
    console.table({
      children: this.children.length,
      id: this.raw.id,
      name: this.raw.name,
      type: this.raw.type,
    });
  }

  /**
   * Returns the name of the node as a string representation.
   */
  toString() {
    return this.raw.name;
  }

  /**
   * Finds nodes that match given glob patterns.
   */
  glob(...paths: string[]): GlobSearchNodes[];
  glob(paths: string | string[]): GlobSearchNodes[] {
    const pathsArray = Array.isArray(paths) ? paths : [paths];
    const lowerCasePaths = pathsArray.map((p) => p.toLowerCase());
    const matcher = pm(lowerCasePaths);
    const output: GlobSearchNodes[] = [];

    this.walk((node, path) => {
      const nodePath = path.map((path) => path.name.toLowerCase()).join('/');

      if (matcher(nodePath)) {
        output.push({ path, node });
      }
    });

    return output;
  }

  /**
   * Walks through the node tree, executing a callback for each node.
   */
  walk(callback: (node: this, path: PathBreadcrumb[]) => void): void;
  walk<N extends NodeBase<T> = this>(callback: (node: N, path: PathBreadcrumb[]) => void) {
    function walker(node: N, path: PathBreadcrumb[] = []) {
      if (!node) return;

      const breadcrumb: PathBreadcrumb = {
        name: node.raw.name,
        id: node.raw.id,
      };

      callback(node, [...path, breadcrumb]);

      if (node.children && node.children.length > 0) {
        node.children.forEach((childNode) => walker(childNode as N, [...path, breadcrumb]));
      }
    }

    walker(this as unknown as N);
  }

  /**
   * Finds the first node deep in the tree that matches the given predicate.
   */
  findDeep(predicate: (node: this, path?: PathBreadcrumb[]) => boolean): this | null {
    let output: this | null = null;

    this.walk((node, path) => {
      if (predicate(node, path) && !output) {
        output = node;
      }
    });

    return output;
  }

  /**
   * Filters nodes deep in the tree that match the given predicate.
   */
  filterDeep(predicate: (node: this, path?: PathBreadcrumb[]) => boolean) {
    const output: this[] = [];
    this.walk((node, path) => {
      if (predicate(node, path)) {
        output.push(node);
      }
    });

    return output;
  }

  mapDeep<T extends WithChildren<OnPurposeAny>>(callback: (node: this) => WithChildren<T> | undefined): WithChildren<T> {
    const out = callback(this) || ({ children: [] } as WithChildren<T>);

    if (this.children?.length > 0 && !out?.children) {
      out.children = this.children.map((childNode) => childNode.mapDeep(callback)).filter(Boolean);
    }

    return out;
  }
}
