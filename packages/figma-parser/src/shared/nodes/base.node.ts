import type { Node } from '@figma/rest-api-spec';
import type { OnPurposeAny } from '../../types';
import { hasChildren } from '../types';
import { FigmaNode } from './figma.node';

export type WithChildren<T> = {
  children?: T[];
  [k: string]: OnPurposeAny;
};

/**
 * Represents a single node in a Figma file, providing utilities for navigation, search, and data extraction.
 */
export class NodeBase<T extends Node = Node> extends FigmaNode {
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
      this.children = raw.children.map((rawChildNode) => new new.target(rawChildNode, this) as this);
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
