import { TextNode } from '@figma/rest-api-spec';
import { ContentNode } from './content-node';
import { TypeStyleTable } from './types';

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

export const getNodeDecoratedText = (node: ContentNode<TextNode>) => {
  const styleOverrides = node.raw.characterStyleOverrides.concat(new Array(node.raw.characters.length - node.raw.characterStyleOverrides.length).fill(0));
  const overrideMap = styleOverrideMap(node.raw.styleOverrideTable);
  const formatted = styleOverrides.reduce((acc, current, index, array) => {
    const prev = array[Math.max(0, index - 1)];

    if (current !== prev && current === 0) {
      return acc + overrideMap[prev] + node.raw.characters[index];
    }

    if (current !== prev && prev === 0) {
      return acc + overrideMap[current] + node.raw.characters[index];
    }

    return acc + node.raw.characters[index];
  }, '');

  return formatted;
};
