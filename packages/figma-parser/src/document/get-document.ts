import type { DocumentNode, GetFileResponse } from '@figma/rest-api-spec';
import type { FigmaApiInterface } from '../core/types';
import { SingleNode } from './single-node';

/**
 * Asynchronously retrieves a Figma document by its file ID and wraps it in a SingleNode instance for easy manipulation and access.
 */
export async function getDocument(api: FigmaApiInterface, fileId: string) {
  const file = await api.request<GetFileResponse>(`files/${fileId}`);

  return new SingleNode<DocumentNode>(file.document);
}
