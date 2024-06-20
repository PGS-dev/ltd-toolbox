import type { Node } from '@figma/rest-api-spec';
import type { OnPurposeAny } from '../../types';

export interface ParentInterface {
  [k: string | number | symbol]: OnPurposeAny;
  children?: ParentInterface[];
  parent?: OnPurposeAny;
}

export type Ctor<T extends OnPurposeAny = OnPurposeAny> = new (...args: OnPurposeAny[]) => T;

export type NodeKeys = keyof Node;
export type NodeProperties = { [k in keyof Node]: Readonly<Node[k]> };
