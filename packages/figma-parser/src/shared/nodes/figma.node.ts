import type { Node } from '@figma/rest-api-spec';
import { ParentNode } from './parent.node';
import type { NodeProperties } from './types';

class _FigmaNodeMock extends ParentNode {
  constructor(raw: Node) {
    super(raw);
    Object.assign(this, raw);
  }
}

export const FigmaNode = _FigmaNodeMock as new (raw: Node) => NodeProperties & ParentNode;
