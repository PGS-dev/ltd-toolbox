import { FigmaParser, FigmaParserOptions } from './parser.js'
import { HardCachePlugin } from './plugins/hard-cache/index'
import { DocumentPlugin } from './plugins/document/index'
import { StylesPlugin } from './plugins/styles/index'
import { MarkdownPlugin } from './plugins/markdown/index'
import { FigmaPAT } from './types.js'

export default function(token: FigmaPAT, options: FigmaParserOptions) {
  return new FigmaParser(token, {
    ...options,
    plugins: [ DocumentPlugin, StylesPlugin, MarkdownPlugin, HardCachePlugin ]
  })
}
