import { SingleNode } from './plugins/document';
import { MarkdownProcessor } from './plugins/markdown';
import { StylesPlugin } from './plugins/styles';


export interface FigmaParserOptions {
  hardCache?: boolean;
  cacheDir?: string;
}

export interface FigmaParser {
  document(fileId: string): Promise<SingleNode>;
}

export interface FigmaParser {
  styles(fileId: string): Promise<StylesPlugin>;
}

export interface FigmaParser {
  markdown(node: SingleNode): MarkdownProcessor;
}
