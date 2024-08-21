import type { GetFileResponse } from '@figma/rest-api-spec';
import type { RawDocumentNode } from '@ltd-toolbox/figma-node-classes';
import type { ErrorDescriptions, FigmaApiInterface } from '../core/types';
import { createTree } from './content-node';

const errorDescriptions: ErrorDescriptions = {
  403: `The developer / OAuth token is invalid or expired`,
  404: `The specified file was not found`,
};

export async function getContents(apiClient: FigmaApiInterface, fileId: string) {
  const file = await apiClient.withErrorDescriptions(errorDescriptions).request<GetFileResponse>(`files/${fileId}`);
  const doc = file.document as unknown as RawDocumentNode;
  const out = createTree(doc);
  out.currentContext = {
    apiClient,
    fileId
  }
  return out
}
