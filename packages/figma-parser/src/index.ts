export { FigmaParser } from './parser';
export { parserFactory } from './parser-with-plugins';
export { FigmaTypes };

import * as FigmaTypes from './types';

// decode-named-character-reference dependency of one of mdast plugins causes errors
// by introducing unnecesary document.createElement() calls.
// This plugin is temporary disabled.
// export { MarkdownPlugin } from './plugins/markdown/markdown.plugin'
// export { universalTextPlugin }  from './plugins/markdown/universal-text-plugin'
// export type { FetchContentPlugin }  from './plugins/markdown/types'

export { HardCachePlugin } from './plugins/hard-cache/hard-cache.plugin';

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

export { DocumentPlugin } from './plugins/document/document.plugin';
export { NodeCollection } from './plugins/document/node-collection';
export { SingleNode } from './plugins/document/single-node';
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
} from './plugins/document/types';
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
} from './plugins/document/types';
