import type { GetFileResponse, Node } from '@figma/rest-api-spec';
import type { ErrorDescriptions, FigmaApiInterface } from '../core/types';
import { ContentNode } from './content-node';

const errorDescriptions: ErrorDescriptions = {
  403: `The developer / OAuth token is invalid or expired`,
  404: `The specified file was not found`,
};

export async function getContents(apiClient: FigmaApiInterface, fileId: string) {
  const file = await apiClient.withErrorDescriptions(errorDescriptions).request<GetFileResponse>(`files/${fileId}`);
  const node = new ContentNode<Node>(file.document, undefined, { apiClient, fileId });

  return node;
}
