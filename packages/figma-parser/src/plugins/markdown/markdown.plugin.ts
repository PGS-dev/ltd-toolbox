import { FigmaParser } from '../../parser';
import { SingleNode } from '../document/single-node';
import { MarkdownProcessor } from './markdown-processor';

export class MarkdownPlugin {
  constructor(private host: FigmaParser) {
    this.host.markdown = this.markdown.bind(this);
  }

  markdown(node: SingleNode): MarkdownProcessor {
    return new MarkdownProcessor(node);
  }
}
