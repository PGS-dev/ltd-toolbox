import { FigmaParser } from "../../parser.js";
import type { FileResponse } from "../../full-figma-types.d.js";
import { SingleNode } from "./single-node.js";

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
