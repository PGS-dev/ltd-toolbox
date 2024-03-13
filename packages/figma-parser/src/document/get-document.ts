import { GetFileResponse } from '@figma/rest-api-spec';
import { FigmaApiInterface } from '../core/api';
import { SingleNode } from './single-node';

export async function getDocument(host: FigmaApiInterface, fileId: string) {
  const file = await host.request<GetFileResponse>(`files/${fileId}`);

  return new SingleNode(file.document);
}
