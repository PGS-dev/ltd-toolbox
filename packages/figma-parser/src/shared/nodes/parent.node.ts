import { isObject } from '../is-object.util';
import type { ParentInterface } from './types';

export class ParentNode<T extends ParentInterface = object> {
  children: this[] = [];

  constructor(
    public raw?: T,
    public parent?: T
  ) {
    if (raw && raw.children) {
      this.children = raw.children!.map((rawChildNode) => {
        if (!isObject(rawChildNode)) return rawChildNode;

        return new new.target(rawChildNode) as this;
      }, this);
    }
  }
}
