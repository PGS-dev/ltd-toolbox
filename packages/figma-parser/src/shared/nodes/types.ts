import type { Node } from '@figma/rest-api-spec';
import type { OnPurposeAny } from '../../types';

export interface ParentInterface {
  [k: string | number | symbol]: OnPurposeAny;
  children?: ParentInterface[];
}

export type Ctor<T = object> = new (...args: OnPurposeAny[]) => T;

export type NodeKeys = keyof Node;
export type NodeProperties = { [k in keyof Node]: Readonly<Node[k]> };
