import { Node } from '@figma/rest-api-spec';
import pm from 'picomatch';
import { NodeCollection } from './node-collection';
import { FigmaNodeId, GlobSearchNodes, hasChildren, isTextNode, PathBreadcrumb, SingleTextNode } from './types';

type NodeType = Node['type'];

/**
 * Represents a single node in a Figma file, providing utilities for navigation, search, and data extraction.
 */
export class SingleNode {
  id: FigmaNodeId = '';
  name: string = '';
  children!: NodeCollection;
  type: NodeType | string = '';

  /**
   * Constructs a SingleNode instance from a Figma Node object or an existing SingleNode instance.
   */
  constructor(node: Node | SingleNode) {
    if (node instanceof SingleNode) return node;
    Object.assign(this, node);

    if (hasChildren(node)) {
      this.children = new NodeCollection(node.children, this);
    }
  }

  /**
   * Prints a table in the console with information about the node, including its children count, id, name, and type.
   */
  table() {
    console.table({
      children: this.children.length,
      id: this.id,
      name: this.name,
      type: this.type,
    });
  }

  /**
   * Returns the name of the node as a string representation.
   */
  toString() {
    return this.name;
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
  walk(callback: (node: SingleNode, path: PathBreadcrumb[]) => void) {
    function walker(node: SingleNode, path: PathBreadcrumb[] = []) {
      if (!node) return;

      const breadcrumb: PathBreadcrumb = {
        name: node.name,
        id: node.id,
      };

      callback(node, [...path, breadcrumb]);

      if (node.children && node.children.length > 0) {
        node.children.forEach((node: SingleNode) => walker(node, [...path, breadcrumb]));
      }
    }

    walker(this);
  }

  /**
   * Finds the first node deep in the tree that matches the given predicate.
   */
  findDeep(predicate: (node: SingleNode, path?: PathBreadcrumb[]) => boolean): SingleNode | null {
    let output: SingleNode | null = null;
    function walker(node: SingleNode, path: PathBreadcrumb[] = []) {
      if (!node) return;

      const breadcrumb: PathBreadcrumb = {
        name: node.name,
        id: node.id,
      };

      if (predicate(node, [...path, breadcrumb])) {
        output = node;
      }

      if (node.children && node.children.length > 0) {
        for (const childNode of node.children) {
          if (output) break;
          walker(childNode, [...path, breadcrumb]);
        }
      }
    }

    walker(this);
    return output;
  }

  /**
   * Filters nodes deep in the tree that match the given predicate.
   */
  filterDeep(predicate: (node: SingleNode, path?: PathBreadcrumb[]) => boolean) {
    const output: SingleNode[] = [];
    function walker(node: SingleNode, path: PathBreadcrumb[] = []) {
      if (!node) return;

      const breadcrumb: PathBreadcrumb = {
        name: node.name,
        id: node.id,
      };

      if (predicate(node, [...path, breadcrumb])) {
        output.push(node);
      }

      if (node.children && node.children.length > 0) {
        for (const childNode of node.children) {
          walker(childNode, [...path, breadcrumb]);
        }
      }
    }

    walker(this);
    return new NodeCollection(output);
  }

  /**
   * Collects and returns the text from all text nodes deep in the tree.
   */
  text(): string[] {
    const textNodes: SingleTextNode[] = [];

    this.walk((node) => {
      if (isTextNode(node)) {
        textNodes.push(node);
      }
    });

    return textNodes.map((node) => node.characters);
  }
}
