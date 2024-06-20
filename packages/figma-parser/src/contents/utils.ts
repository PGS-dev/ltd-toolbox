import type { TextNode } from '@ltd-toolbox/figma-node-classes';
import type { GetterTreeNode, TypeStyleTable } from './types';

export type LineType = 'ORDERED' | 'UNORDERED' | 'NONE' | 'LIST';

export const styleOverrideMap = (table: TypeStyleTable) => {
  const styles = Object.entries(table)
    .map(([styleId, textStyle]) => {
      if (textStyle.italic === true && textStyle.fontWeight! >= 700) return [styleId, '***'];
      if (textStyle.fontWeight! >= 700) return [styleId, '**'];
      if (textStyle.italic === true) return [styleId, '*'];
    })
    .filter(Boolean) as [string, string][];
  styles.unshift(['0', '']);
  return Object.fromEntries(styles);
};

export const getNodeDecoratedText = <Node extends TextNode>(node: Node) => {
  const styleOverrides = node.characterStyleOverrides.concat(new Array(node.characters.length - node.characterStyleOverrides.length).fill(0));
  const overrideMap = styleOverrideMap(node.styleOverrideTable as TypeStyleTable);
  const formatted = styleOverrides.reduce((acc, current, index, array) => {
    const prev = array[Math.max(0, index - 1)];

    if (current !== prev && current === 0) {
      return acc + overrideMap[prev] + node.characters[index];
    }

    if (current !== prev && prev === 0) {
      return acc + overrideMap[current] + node.characters[index];
    }

    return acc + node.characters[index];
  }, '');

  return formatted;
};

export const isFauxNode = (node: GetterTreeNode): node is GetterTreeNode & { children: [GetterTreeNode] } => {
  return Object.keys(node).length === 1 && 'children' in node && node.children?.length === 1;
};
