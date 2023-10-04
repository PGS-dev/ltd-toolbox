import { Node } from '../../full-figma-types.ts'
import { FigmaId, CallbackFunction, PathBreadcrumb } from './types.ts'
import { SingleNode } from './single-node.ts'

export class NodeCollection {
  public readonly length: number = 0;
  public readonly parent: SingleNode;

  [i: number]: SingleNode

  constructor(nodes: Node[] | ReadonlyArray<Node> | SingleNode[], parent: SingleNode) {
    let length = 0

    nodes.forEach((node, index) => {
      this[index] = node instanceof SingleNode ? node : new SingleNode(node)
      length++
    })

    this.parent = parent
    this.length = length
  }

  table(): void {
    const lines = Array.from(this).map((node, index) => ({
      name: node?.name,
      id: node?.id,
      type: node?.type
    }))

    console.table(lines)
  }

  toString() {
    const out: string[] = []
    for (let i = 0; i <= this.length - 1; i++) {
      out.push(this[i].toString())
    }
    return out.join(', ')
  }

  at(index: number) {
    if (index > 0 && index > this.length - 1) throw new Error(`Maximum index for this collection is ${this.length - 1}`)
    if (index < 0 && index < -this.length) throw new Error(`Minimum index for this collection is ${-this.length}`)

    if (index < 0) {
      return this[this.length + index]
    }

    return this[index]
  }

  get(predicate: CallbackFunction<boolean>): SingleNode {
    for (let i = 0; i <= this.length - 1; i++) {
      if (predicate(this[i], i, this)) {
        return this[i]
      }
    }
  }

  id(id: FigmaId | string): SingleNode {
    return this.get((node: SingleNode) => node.id === id)
  }

  name(name: string, caseInsensitive = false): SingleNode {
    return this.get((node: SingleNode) => {
      if (caseInsensitive) {
        return node.name.toLowerCase() === name.toLowerCase()
      }
      return node.name === name
    })
  }

  filter(predicate: CallbackFunction<boolean>) {
    let out: SingleNode[] = []

    for (let i = 0; i <= this.length - 1; i++) {
      if (predicate(this[i], i, this)) {
        out.push(this[i])
      }
    }
    return new NodeCollection(out, this.parent)
  }

  each(callback: CallbackFunction): void {
    for (let i = 0; i <= this.length - 1; i++) {
      callback(this[i], i, this)
    }
  }

  walk(callback: (node: SingleNode, path: PathBreadcrumb[]) => void) {
    for (let i = 0; i <= this.length - 1; i++) {
      this[i].walk(callback)
    }
  }

  * [Symbol.iterator]() {
    for (let i = 0; i <= this.length - 1; i++) {
      yield this[i]
    }
  }
}
