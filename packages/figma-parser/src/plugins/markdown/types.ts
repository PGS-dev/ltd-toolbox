import { RootContent } from 'mdast';
import { TypeStyle } from '../../types';
import { SingleNode } from '../nodes';

export interface FetchContentPlugin {
  test: (node: SingleNode) => boolean;
  transform: (node: SingleNode) => RootContent | RootContent[];
}

export type LetterTuples = [string, number];

export interface TypeStyleTable {
  [p: string]: TypeStyle;
}
