import { CallbackFunction } from '../../parser';
import { Node } from '../../types';
import { SingleNode } from './single-node';
import { FigmaNodeId, NodeCollectionMixin, NodeMixin, PathBreadcrumb } from './types';

export class NodeCollection {
  public readonly length: number = 0;
  public readonly parent: SingleNode;

  [i: number]: SingleNode;

  constructor(
    nodes: Node[] | ReadonlyArray<Node> | SingleNode[],
    parent: SingleNode,
    private nodeMixins: NodeMixin[],
    private nodeCollectionMixins: NodeCollectionMixin[] = []
  ) {
    let length = 0;

    nodes.forEach((node, index) => {
      const nodeCtor = this.nodeMixins.reduce((wrapped, mixin) => mixin(wrapped), SingleNode);
      this[index] = node instanceof SingleNode ? node : new nodeCtor(node, this.nodeMixins, this.nodeCollectionMixins);
      length++;
    });

    this.parent = parent;
    this.length = length;
  }

  hasMixin(mixin: NodeCollectionMixin): this is SingleNode & typeof mixin {
    return this.nodeCollectionMixins.includes(mixin);
  }

  table(): void {
    const lines = Array.from(this).map((node) => ({
      name: node?.name,
      id: node?.id,
      type: node?.type,
    }));

    console.table(lines);
  }

  toString() {
    const out: string[] = [];
    for (let i = 0; i <= this.length - 1; i++) {
      out.push(this[i].toString());
    }
    return out.join(', ');
  }

  at(index: number) {
    if (index > 0 && index > this.length - 1) throw new Error(`Maximum index for this collection is ${this.length - 1}`);
    if (index < 0 && index < -this.length) throw new Error(`Minimum index for this collection is ${-this.length}`);

    if (index < 0) {
      return this[this.length + index];
    }

    return this[index];
  }

  get(predicate: CallbackFunction<boolean>): SingleNode | undefined {
    for (let i = 0; i <= this.length - 1; i++) {
      if (predicate(this[i], i, this)) {
        return this[i];
      }
    }
    return;
  }

  id(id: FigmaNodeId | string): SingleNode | undefined {
    return this.get((node: SingleNode) => node.id === id);
  }

  name(name: string, caseInsensitive = false): SingleNode | undefined {
    return this.get((node: SingleNode) => {
      if (caseInsensitive) {
        return node.name.toLowerCase() === name.toLowerCase();
      }
      return node.name === name;
    });
  }

  filter(predicate: CallbackFunction<boolean>) {
    const out: SingleNode[] = [];

    for (let i = 0; i <= this.length - 1; i++) {
      if (predicate(this[i], i, this)) {
        out.push(this[i]);
      }
    }
    return new NodeCollection(out, this.parent, this.nodeMixins, this.nodeCollectionMixins);
  }

  map<Output>(callback: (node: SingleNode, index?: number, collection?: NodeCollection) => Output): Output[] {
    const out: Output[] = [];

    for (let i = 0; i <= this.length - 1; i++) {
      out.push(callback(this[i], i, this));
    }

    return out;
  }

  each(callback: CallbackFunction<void>): void {
    for (let i = 0; i <= this.length - 1; i++) {
      callback(this[i], i, this);
    }
  }

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
