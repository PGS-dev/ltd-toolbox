import type { Node } from '@figma/rest-api-spec';
import { hasProperty } from '../shared';

/**
 * Represents a single node in a Figma file, providing utilities for navigation, search, and data extraction.
 */
export class SingleNode<T extends Node = Node> {
  children: SingleNode[] = [];

  /**
   * Constructs a SingleNode instance from a Figma Node object or an existing SingleNode instance.
   */
  constructor(
    public raw: T,
    public parent?: SingleNode
  ) {
    if (hasProperty(raw, 'children') && Array.isArray(raw.children)) {
      this.children = raw.children.map((rawChildNode) => new SingleNode(rawChildNode, this));
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
}
