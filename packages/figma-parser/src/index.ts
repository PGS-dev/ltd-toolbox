export { FigmaParser } from './parser/parser';
export { FigmaTypes };

import * as FigmaTypes from './types';

// decode-named-character-reference dependency of one of mdast plugins causes errors
// by introducing unnecesary document.createElement() calls.
// This plugin is temporary disabled.
// export { MarkdownPlugin } from './plugins/markdown/markdown.plugin'
// export { universalTextPlugin }  from './plugins/markdown/universal-text-plugin'
// export type { FetchContentPlugin }  from './plugins/markdown/types'

export { StylesPlugin } from './plugins/styles/styles.plugin';
export { DesignTokens } from './plugins/styles/transformers/design-tokens/index';
export type {
  ColorToken,
  ColorTokenValue,
  DesignToken,
  DesignTokensFormat,
  GradientStop,
  GradientToken,
  GradientTokenValue,
  ShadowStop,
  ShadowToken,
  ShadowTokenValue,
  TypographyToken,
  TypographyTokenValue,
} from './plugins/styles/transformers/design-tokens/index';

export { NodeCollection } from './parser/node-collection';
export { SingleNode } from './parser/single-node';
export {
  hasChildren,
  isBooleanOperationNode,
  isCanvasNode,
  isComponentNode,
  isComponentSetNode,
  isDocumentNode,
  isEllipseNode,
  isFigmaNodeId,
  isFrameNode,
  isGroupNode,
  isInstanceNode,
  isLineNode,
  isNode,
  isRectangleNode,
  isRegularPolygonNode,
  isSingleNode,
  isSliceNode,
  isStarNode,
  isTextNode,
  isVectorNode,
  nodeTypes,
} from './parser/types';
export type {
  SingleBooleanOperationNode,
  SingleCanvasNode,
  SingleComponentNode,
  SingleComponentSetNode,
  SingleDocumentNode,
  SingleEllipseNode,
  SingleFrameNode,
  SingleGroupNode,
  SingleInstanceNode,
  SingleLineNode,
  SingleRectangleNode,
  SingleRegularPolygonNode,
  SingleSliceNode,
  SingleStarNode,
  SingleTextNode,
  SingleVectorNode,
} from './parser/types';
