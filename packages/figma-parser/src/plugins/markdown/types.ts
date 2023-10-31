import { SingleNode } from '../document/single-node.ts';
import { RootContent } from "mdast";
import { TypeStyle } from '../../full-figma-types.ts';

export interface FetchContentPlugin {
  test: (node: SingleNode) => boolean;
  transform: (node: SingleNode) => RootContent | RootContent[];
}

export type LetterTuples = [string, number];

export interface TypeStyleTable {
  [p: string]: TypeStyle;
}
