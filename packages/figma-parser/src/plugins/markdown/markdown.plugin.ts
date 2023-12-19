import { FigmaParser } from '../../parser/parser';
import { SingleNode } from '../../parser/single-node';
import { MarkdownProcessor } from './markdown-processor';

export class MarkdownPlugin {
  constructor(private host: FigmaParser) {
    this.host.markdown = this.markdown.bind(this);
  }

  markdown(node: SingleNode): MarkdownProcessor {
    return new MarkdownProcessor(node);
  }
}

declare module '../../parser/parser' {
  export interface FigmaParser {
    markdown(node: SingleNode): MarkdownProcessor;
  }
}
