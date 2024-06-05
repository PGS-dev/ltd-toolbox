import type { ParentNode } from './nodes/parent.node';

export function walk<Node extends ParentNode>(root: Node, callback: (node: Node) => void) {
  function walker(node: Node) {
    if (!node) return;

    callback(node);

    if (node.children && node.children.length > 0) {
      node.children.forEach((childNode) => walker(childNode as Node));
    }
  }

  walker(root);
}
