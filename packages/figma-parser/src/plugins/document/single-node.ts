import { NodeCollection } from './node-collection.ts'
import { Node, NodeType } from '../../full-figma-types.ts'
import { FigmaId, hasChildren, PathBreadcrumb, CallbackFunction, GlobSearchNodes } from './types.ts'
import pm from 'picomatch'

export class SingleNode {
  id: FigmaId;
  name: string;
  children: NodeCollection;
  type: NodeType;

  constructor(node: Node | SingleNode) {
    if (node instanceof SingleNode) return node;
    Object.assign(this, node)
    if (hasChildren(node)) {
      this.children = new NodeCollection(node.children, this)
    }
  }

  table() {
    console.table({
      name: this.name,
      id: this.id,
      type: this.type,
      children: this.children.length
    })
  }

  toString() {
    return this.name
  }

  get(predicate: CallbackFunction<boolean>): SingleNode {
    return this.children.get(predicate)
  }

  glob(...paths: string[]): GlobSearchNodes[]
  glob(paths: string | string[]): GlobSearchNodes[] {
    const pathsArray = Array.isArray(paths) ? paths : [paths]
    const lowerCasePaths = pathsArray.map(p => p.toLowerCase())
    const matcher = pm(lowerCasePaths)
    const output: GlobSearchNodes[] = [];

    this.walk((node, path) => {
      const nodePath = path.map(path => path.name.toLowerCase()).join('/')

      if ( matcher(nodePath)) {
        output.push({path, node})
      }
    })

    return output
  }

  walk(callback: (node: SingleNode, path: PathBreadcrumb[]) => void) {
    const walker = (node: SingleNode, path: PathBreadcrumb[] = []) => {
      if (!node) return

      const breadcrumb: PathBreadcrumb = {
        name: node.name,
        id: node.id
      }

      callback(node, [...path, breadcrumb])

      if (node.children && node.children.length > 0) {
        node.children.each((node: SingleNode) =>
          walker(node, [...path, breadcrumb])
        );
      }
    };

    walker(this);
  }
}
