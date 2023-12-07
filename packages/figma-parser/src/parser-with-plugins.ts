import { FigmaParser, FigmaParserOptions } from './parser';
import { DocumentPlugin } from './plugins/document/index';
import { HardCachePlugin } from './plugins/hard-cache/index';
import { StylesPlugin } from './plugins/styles/index';
import { FigmaPAT } from './types';

export function ParserFactory(token: FigmaPAT, options?: FigmaParserOptions) {
  return new FigmaParser(token, {
    ...options || {},
    plugins: [DocumentPlugin, StylesPlugin, HardCachePlugin],
  });
}
