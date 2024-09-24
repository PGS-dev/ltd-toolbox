import type { GetFileNodesResponse, GetFileResponse } from '@figma/rest-api-spec'
import type { ErrorDescriptions, FigmaApiInterface } from '../core/types'
import { createTree } from './content-node'

const errorDescriptions: ErrorDescriptions = {
  403: `The developer / OAuth token is invalid or expired`,
  404: `The specified file was not found`,
};

export async function getContents(apiClient: FigmaApiInterface, fileId: string, nodeId?: string) {
  const url = nodeId ? `files/${fileId}/nodes` : `files/${fileId}`
  const file = await apiClient.withErrorDescriptions(errorDescriptions).request<GetFileResponse | GetFileNodesResponse>(url, nodeId ? {ids: [nodeId]} : undefined);
  let doc

  if ( nodeId && 'nodes' in file ) {
    doc = (file as GetFileNodesResponse)?.nodes[nodeId]?.document
  } else {
    doc = (file as GetFileResponse).document
  }

  const out = createTree(doc);
  out.currentContext = {
    apiClient,
    fileId,
  };
  return out;
}
