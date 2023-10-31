export { FigmaParser } from "./parser.ts";
export * from './types.ts';

export * from './plugins/hard-cache'
export * from './plugins/document'
export * from './plugins/styles'
export * from './plugins/markdown'

import { FigmaPAT } from './types.ts'
import { FigmaParser, FigmaParserOptions } from './parser.ts'

import { HardCache } from './plugins/hard-cache/index.ts'
import { Document } from './plugins/document/index.ts'
import { Styles } from './plugins/styles/index.ts'
import { Markdown } from './plugins/markdown/index.ts'

export default function(token: FigmaPAT, options: FigmaParserOptions) {
  return new FigmaParser(token, {
    ...options,
    plugins: [ Document, Styles, Markdown, HardCache ]
  })
}
