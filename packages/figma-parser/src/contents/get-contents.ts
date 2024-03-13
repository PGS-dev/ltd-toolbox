import { GetFileResponse } from '@figma/rest-api-spec';
import { FigmaApiInterface } from '../core/api';
import { SingleNode } from '../document/single-node';
import { MarkdownProcessor } from './markdown-processor';

export async function getContents(host: FigmaApiInterface, fileId: string) {
  const file = await host.request<GetFileResponse>(`files/${fileId}`);
  const node = new SingleNode(file.document);

  return new MarkdownProcessor(node);
}
