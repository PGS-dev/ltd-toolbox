import { NodeCollection } from './node-collection';
import type { Node, NodeType } from '../../full-figma-types';
import { Text } from '../../full-figma-types';
import {
  FigmaId,
  GlobSearchNodes,
  hasChildren,
  isTextNode,
  PathBreadcrumb,
} from './types';
import pm from "picomatch";

export class SingleNode {
  id: FigmaId = ''
  name: string = ''
  children: NodeCollection = new NodeCollection([], this)
  type: NodeType | string = '';

  constructor(node: Node | SingleNode) {
    if (node instanceof SingleNode) return node;
    Object.assign(this, node);
    if (hasChildren(node)) {
      this.children = new NodeCollection(node.children, this);
    }
  }

  table() {
    console.table({
      children: this.children.length,
      id: this.id,
      name: this.name,
      type: this.type,
    });
  }

  toString() {
    return this.name;
  }

  glob(...paths: string[]): GlobSearchNodes[];
  glob(paths: string | string[]): GlobSearchNodes[] {
    const pathsArray = Array.isArray(paths) ? paths : [paths];
    const lowerCasePaths = pathsArray.map((p) => p.toLowerCase());
    const matcher = pm(lowerCasePaths);
    const output: GlobSearchNodes[] = [];

    this.walk((node, path) => {
      const nodePath = path.map((path) => path.name.toLowerCase()).join("/");

      if (matcher(nodePath)) {
        output.push({ path, node });
      }
    });

    return output;
  }

  walk(callback: (node: SingleNode, path: PathBreadcrumb[]) => void) {
    function walker(node: SingleNode, path: PathBreadcrumb[] = []) {
      if (!node) return;

      const breadcrumb: PathBreadcrumb = {
        name: node.name,
        id: node.id,
      };

      callback(node, [...path, breadcrumb]);

      if (node.children && node.children.length > 0) {
        node.children.each((node: SingleNode) =>
          walker(node, [...path, breadcrumb]),
        );
      }
    }

    walker(this);
  }

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

  filterDeep(
    predicate: (node: SingleNode, path?: PathBreadcrumb[]) => boolean,
  ) {
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
    return output;
  }

  text(): string[] {
    const textNodes: (SingleNode & Text)[] = [];

    this.walk((node) => {
      if (isTextNode(node)) {
        textNodes.push(node);
      }
    });

    return textNodes.map((node) => node.characters);
  }
}
