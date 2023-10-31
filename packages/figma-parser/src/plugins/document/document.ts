import { FigmaParser } from '../../parser.ts';
import type { FileResponse } from '../../full-figma-types.d.ts';
import { SingleNode } from './single-node.ts';

export class Document {
  private host: FigmaParser;

  constructor(host: FigmaParser) {
    this.host = host;
    this.host.document = this.document.bind(this);
  }

  async document(fileId: string) {
    const file: FileResponse = await this.host.request(`files/${fileId}`);
    return new SingleNode(file.document);
  }
}

declare module "../../parser.js" {
  export interface FigmaParser {
    document(fileId: string): Promise<SingleNode>;
  }
}
