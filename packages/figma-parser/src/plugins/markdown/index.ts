import { SingleNode } from '../document/single-node.js'
import { FigmaParser } from '../../parser.js'
import { MarkdownProcessor } from './markdown-processor.ts'

export class Markdown {
  constructor(private host: FigmaParser) {
    this.host.markdown = this.markdown.bind(this);
  }

  markdown(node: SingleNode): MarkdownProcessor {
    return new MarkdownProcessor(node)
  }
}

declare module "../../parser.js" {
  export interface FigmaParser {
    markdown(node: SingleNode): MarkdownProcessor;
  }
}
