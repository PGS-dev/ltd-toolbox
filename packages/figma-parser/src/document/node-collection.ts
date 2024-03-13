import { Node } from '@figma/rest-api-spec';
import { SingleNode } from './single-node';
import { FigmaNodeId, PathBreadcrumb } from './types';

type CallbackFunction<T = void> = (node: SingleNode, index?: number, collection?: NodeCollection) => T;

export class NodeCollection {
  public readonly length: number = 0;

  [i: number]: SingleNode;

  constructor(nodes: Node[] | ReadonlyArray<Node> | SingleNode[], public readonly parent?: SingleNode) {
    let length = 0;

    nodes.forEach((node, index) => {
      this[index] = node instanceof SingleNode ? node : new SingleNode(node);
      length++;
    });

    this.length = length;
  }

  /**
   * Prints a table in the console listing the name, ID, and type of each node in the collection.
   */
  table(): void {
    const lines = Array.from(this).map((node) => ({
      name: node?.name,
      id: node?.id,
      type: node?.type,
    }));

    console.table(lines);
  }

  /**
   * Creates a string representation of the collection by joining the string representations of each node with a comma.
   */
  toString() {
    const out: string[] = [];
    for (let i = 0; i <= this.length - 1; i++) {
      out.push(this[i].toString());
    }
    return out.join(', ');
  }

  /**
   * Retrieves the node at a specified index, supporting positive and negative indexing.
   * Throws an error if the index is out of bounds.
   */
  at(index: number) {
    if (index > 0 && index > this.length - 1) throw new Error(`Maximum index for this collection is ${this.length - 1}`);
    if (index < 0 && index < -this.length) throw new Error(`Minimum index for this collection is ${-this.length}`);

    if (index < 0) {
      return this[this.length + index];
    }

    return this[index];
  }

  /**
   * Finds the first node that satisfies the provided testing function.
   * Returns the node if found, undefined otherwise.
   */
  get(predicate: CallbackFunction<boolean>): SingleNode | undefined {
    for (let i = 0; i <= this.length - 1; i++) {
      if (predicate(this[i], i, this)) {
        return this[i];
      }
    }
    return;
  }

  /**
   * Finds a node by its ID. Case-sensitive.
   * Returns the node if found, undefined otherwise.
   */
  id(id: FigmaNodeId | string): SingleNode | undefined {
    return this.get((node: SingleNode) => node.id === id);
  }

  /**
   * Finds a node by its name, with an optional case-insensitive search.
   * Returns the node if found, undefined otherwise.
   */
  name(name: string, caseInsensitive = false): SingleNode | undefined {
    return this.get((node: SingleNode) => {
      if (caseInsensitive) {
        return node.name.toLowerCase() === name.toLowerCase();
      }
      return node.name === name;
    });
  }

  /**
   * Creates a new NodeCollection with all nodes that pass the test implemented by the provided function.
   */
  filter(predicate: CallbackFunction<boolean>) {
    const out: SingleNode[] = [];

    for (let i = 0; i <= this.length - 1; i++) {
      if (predicate(this[i], i, this)) {
        out.push(this[i]);
      }
    }
    return new NodeCollection(out, this.parent);
  }

  /**
   * Creates an array of values by running each node in the collection through the callback function.
   */
  map<Output>(callback: (node: SingleNode, index?: number, collection?: NodeCollection) => Output): Output[] {
    const out: Output[] = [];

    for (let i = 0; i <= this.length - 1; i++) {
      out.push(callback(this[i], i, this));
    }

    return out;
  }
  /**
   * Executes a provided function once for each node in the collection.
   */
  forEach(callback: CallbackFunction<void>): void {
    for (let i = 0; i <= this.length - 1; i++) {
      callback(this[i], i, this);
    }
  }

  /**
   * Recursively walks through each node and its children in the collection, executing a callback for each node.
   */
  walk(callback: (node: SingleNode, path: PathBreadcrumb[]) => void) {
    for (let i = 0; i <= this.length - 1; i++) {
      this[i].walk(callback);
    }
  }

  *[Symbol.iterator]() {
    for (let i = 0; i <= this.length - 1; i++) {
      yield this[i];
    }
  }
}
