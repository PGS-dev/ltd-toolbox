import { Node } from '../../full-figma-types.ts'
import { FigmaId, CallbackFunction } from './types.ts'
import { SingleNode } from './single-node.ts'

export class NodeCollection {
  length: number = 0;

  [i: number]: SingleNode

  constructor(nodes: Node[] | ReadonlyArray<Node> | SingleNode[], private parent: SingleNode) {
    let length = 0
    nodes.forEach((node, index) => {
      this[index] = node instanceof SingleNode ? node : new SingleNode(node)
      this.length = index + 1
    })
  }

  table(): void {
    const lines = Array.from(this).map((node, index) => ({
      name: node.name,
      id: node.id,
      type: node.type
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

  getById(id: FigmaId | string): SingleNode {
    return this.get((node: SingleNode) => node.id === id)
  }

  getByName(name: string, caseInsensitive = false): SingleNode {
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

  * [Symbol.iterator]() {
    for (let i = 0; i <= this.length - 1; i++) {
      yield this[i]
    }
  }
}
