export { FigmaParser } from "./parser";
export { ParserFactory } from './parser-with-plugins'

import * as FigmaTypes from './types';
export { FigmaTypes }

// decode-named-character-reference dependency of one of mdast plugins causes errors
// by introducing unnecesary document.createElement() calls.
// This plugin is temporary disabled.
// export { MarkdownPlugin } from './plugins/markdown/markdown.plugin'
// export { universalTextPlugin }  from './plugins/markdown/universal-text-plugin'
// export type { FetchContentPlugin }  from './plugins/markdown/types'

export { HardCachePlugin } from './plugins/hard-cache/hard-cache.plugin'

export { StylesPlugin } from './plugins/styles/styles.plugin'
export { DesignTokens } from './plugins/styles/transformers/design-tokens/index'
export type { DesignTokensFormat, DesignToken, TypographyTokenValue,
  GradientStop,
  ShadowStop,
  ShadowTokenValue,
  ColorToken,
  ColorTokenValue,
  TypographyToken,
  ShadowToken,
  GradientToken,
  GradientTokenValue } from './plugins/styles/transformers/design-tokens/index'


export { DocumentPlugin } from './plugins/document/document.plugin'
export { SingleNode } from './plugins/document/single-node'
export { NodeCollection } from './plugins/document/node-collection'
export { nodeTypes, hasChildren, isFigmaNodeId, isSingleNode, isNode, isDocumentNode,
  isCanvasNode,
  isFrameNode,
  isGroupNode,
  isVectorNode,
  isBooleanOperationNode,
  isStarNode,
  isLineNode,
  isEllipseNode,
  isRegularPolygonNode,
  isRectangleNode,
  isTextNode,
  isSliceNode,
  isComponentNode,
  isComponentSetNode,
  isInstanceNode } from './plugins/document/types'
export type { SingleDocumentNode,
  SingleCanvasNode,
  SingleFrameNode,
  SingleGroupNode,
  SingleVectorNode,
  SingleBooleanOperationNode,
  SingleStarNode,
  SingleLineNode,
  SingleEllipseNode,
  SingleRegularPolygonNode,
  SingleRectangleNode,
  SingleTextNode,
  SingleSliceNode,
  SingleComponentNode,
  SingleComponentSetNode,
  SingleInstanceNode  } from './plugins/document/types'
