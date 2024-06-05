import type { ParentNode } from '../parent.node';
import type { Ctor } from '../types';

export function Blank<Base extends Ctor<ParentNode>>(BaseClass: Base) {
  return class extends BaseClass {
    echo(name: string): void {
      console.log(name);
    }
  };
}
