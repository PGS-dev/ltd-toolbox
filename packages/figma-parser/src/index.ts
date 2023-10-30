import { FigmaPAT } from './types'
import { FigmaParser, FigmaParserOptions } from './parser.ts'

import { HardCache } from './plugins/hard-cache/index.js'
import { Styles } from './plugins/styles/index.js'
import { Document } from './plugins/document/index.js'
import { Markdown } from './plugins/markdown/index.js'

export { FigmaParser } from "./parser.js";

export * from "./plugins/styles/transformers/design-tokens/index.js";
export * from './plugins/hard-cache'
export * from './plugins/document'
export * from './plugins/styles'
export * from './plugins/markdown'

export default function(token: FigmaPAT, options: FigmaParserOptions) {
  return new FigmaParser(token, {
    ...options,
    plugins: [ Document, Styles, Markdown, HardCache ]
  })
}
