import { DocumentNode, GetFileResponse } from '@figma/rest-api-spec';
import { FigmaApiInterface } from '../core/api';
import { SingleNode } from './single-node';

/**
 * Asynchronously retrieves a Figma document by its file ID and wraps it in a SingleNode instance for easy manipulation and access.
 */
export async function getDocument(host: FigmaApiInterface, fileId: string) {
  const file = await host.request<GetFileResponse>(`files/${fileId}`);

  return new SingleNode<DocumentNode>(file.document);
}
