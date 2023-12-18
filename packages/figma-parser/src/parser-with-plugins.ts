import { FigmaParser, FigmaParserOptions, FigmaPAT } from './parser/parser';
import { HardCachePlugin } from './plugins/hard-cache/index';
import { StylesPlugin } from './plugins/styles/index';

export function ParserFactory(token: FigmaPAT, options: FigmaParserOptions) {
  return new FigmaParser(token, {
    ...options,
    plugins: [StylesPlugin, HardCachePlugin],
  });
}
