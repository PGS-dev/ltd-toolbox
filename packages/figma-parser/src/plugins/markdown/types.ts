import { RootContent } from 'mdast';
import { TypeStyle } from '../../full-figma-types';
import { SingleNode } from '../../parser/single-node';

export interface FetchContentPlugin {
  test: (node: SingleNode) => boolean;
  transform: (node: SingleNode) => RootContent | RootContent[];
}

export type LetterTuples = [string, number];

export interface TypeStyleTable {
  [p: string]: TypeStyle;
}
