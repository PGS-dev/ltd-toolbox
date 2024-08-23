import { getNodeConstructor, type RawNode } from '@ltd-toolbox/figma-node-classes';
import { NodeUtils, type NodeUtilsInterface } from '../shared/nodes/node-mixins/node-utils.mixin';
import type { Ctor } from '../shared/nodes/types';
import type { OnPurposeAny } from '../types';
import { Parseable, type ParsableMixin } from './node-mixins/parsable.mixin';
import { WithImagesGetters, type WithImageGettersMixin } from './node-mixins/with-image-getters.mixin';
import { WithTextGetters, type WithTextGettersMixin } from './node-mixins/with-text-getters.mixin';
import type { CurrentContext } from './types';

export type ContentUtilsInterface = ParsableMixin & WithImageGettersMixin & WithTextGettersMixin;

export function ContentUtils<Base extends Ctor>(BaseClass: Base) {
  return Parseable(WithImagesGetters(WithTextGetters(BaseClass)));
}

export interface Tree<N extends RawNode = RawNode> extends ContentUtilsInterface, NodeUtilsInterface<Tree>, Record<keyof RawNode, OnPurposeAny> {
  currentContext?: CurrentContext;
  children: Tree<N>[];
  parent: Tree;
}

export function createTree<NodeObject extends RawNode>(raw: NodeObject, parent?: Tree) {
  const ctor = NodeUtils(ContentUtils(getNodeConstructor(raw)));
  const out = new ctor(raw as OnPurposeAny) as unknown as Tree;
  out.parent = parent!;

  if ('children' in raw) {
    (out as OnPurposeAny).children = raw.children.map((childNode) => createTree(childNode, out) as unknown as Tree);
  }

  return out as Tree;
}
