import { FigmaParser } from '../../parser';
import type { FileResponse } from '../../full-figma-types';
import { SingleNode } from './single-node';

export class DocumentPlugin {
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

declare module "../../parser" {
  export interface FigmaParser {
    document(fileId: string): Promise<SingleNode>;
  }
}
