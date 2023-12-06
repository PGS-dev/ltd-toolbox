import { SingleNode } from './plugins/document'
import { MarkdownProcessor } from './plugins/markdown'
import { StylesPlugin } from './plugins/styles'


declare module "./parser" {
  export interface FigmaParserOptions {
    hardCache?: boolean;
    cacheDir?: string;
  }
}

declare module "./parser" {
  export interface FigmaParser {
    document(fileId: string): Promise<SingleNode >;
  }
}

declare module "./parser" {
  export interface FigmaParser {
    styles(fileId: string): Promise<StylesPlugin>;
  }
}

declare module "./parser" {
  export interface FigmaParser {
    markdown(node: SingleNode): MarkdownProcessor;
  }
}



