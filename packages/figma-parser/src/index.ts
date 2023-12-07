import { FigmaParser, FigmaParserOptions, FigmaPAT } from './parser';

export * from './parser/index';
export * from './plugins/styles/index';
export * from './types'

// decode-named-character-reference dependency of one of mdast plugins causes errors
// by introducing unnecesary document.createElement() calls.
// This plugin is temporary disabled.
// export { MarkdownPlugin } from './plugins/markdown/markdown.plugin'
// export { universalTextPlugin }  from './plugins/markdown/universal-text-plugin'
// export type { FetchContentPlugin }  from './plugins/markdown/types'

export default function (token: FigmaPAT, options?: Partial<FigmaParserOptions>) {
  return new FigmaParser(token, options) as FigmaParser;
}


export { VariablesPlugin } from './plugins/variables/variables.plugin'
