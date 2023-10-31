import { SingleNode } from '../document/single-node';
import { RootContent } from "mdast";
import { TypeStyle } from '../../full-figma-types';

export interface FetchContentPlugin {
  test: (node: SingleNode) => boolean;
  transform: (node: SingleNode) => RootContent | RootContent[];
}

export type LetterTuples = [string, number];

export interface TypeStyleTable {
  [p: string]: TypeStyle;
}
