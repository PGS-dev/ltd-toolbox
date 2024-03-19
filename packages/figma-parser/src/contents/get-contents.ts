import { GetFileResponse } from '@figma/rest-api-spec';
import { FigmaApiInterface } from '../core/api';
import { ContentNode } from './content-node';

export async function getContents(host: FigmaApiInterface, fileId: string) {
  const file = await host.request<GetFileResponse>(`files/${fileId}`);
  const node = new ContentNode(file.document);

  return node;
}
