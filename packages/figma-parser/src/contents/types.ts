import { TypeStyle } from '@figma/rest-api-spec';
import { RootContent } from 'mdast';
import { SingleNode } from '../document/single-node';

export interface FetchContentPlugin {
  test: (node: SingleNode) => boolean;
  transform: (node: SingleNode) => RootContent | RootContent[];
}

export type LetterTuples = [string, number];

export interface TypeStyleTable {
  [p: string]: TypeStyle;
}
