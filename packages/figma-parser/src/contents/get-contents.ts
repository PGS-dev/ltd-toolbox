import type { GetFileNodesResponse, GetFileResponse } from '@figma/rest-api-spec';
import type { ErrorDescriptions, FigmaApiInterface } from '../core/types';
import { createTree } from './content-node';
import type { GetContentsOptions } from './types';

const errorDescriptions: ErrorDescriptions = {
  403: `The developer / OAuth token is invalid or expired`,
  404: `The specified file was not found`,
};

export async function getContents(apiClient: FigmaApiInterface, fileId: string, options?: GetContentsOptions) {
  const finalFileId = options?.branchId || fileId;

  let url = `files/${finalFileId}`;

  if (!!options?.nodeId || !!options?.ids) {
    url = `files/${finalFileId}/nodes`;
  }

  const requestParams = {
    ...(!!options?.version && { version: options.version }),
    ...(!!options?.depth && { depth: options.depth }),
    ...(!!options?.geometry && { geometry: options.geometry }),
    ...(!!options?.plugin_data && { plugin_data: options.plugin_data }),
    ...(!!options?.ids && { ids: options.ids }),
    ...(!!options?.nodeId && { ids: [options.nodeId] }),
  };

  const file = await apiClient.withErrorDescriptions(errorDescriptions).request<GetFileResponse | GetFileNodesResponse>(url, requestParams);

  if (options?.nodeId && 'nodes' in file) {
    const doc = (file as GetFileNodesResponse)?.nodes[options?.nodeId]?.document;
    const out = createTree(doc);
    out.currentContext = {
      apiClient,
      fileId: options?.branchId || fileId,
    };
    return out;
  } else if (options?.ids && 'nodes' in file) {
    const entries = Object.entries((file as GetFileNodesResponse).nodes).map(([id, tree]) => {
      const out = createTree(tree.document);

      out.currentContext = {
        apiClient,
        fileId: options?.branchId || fileId,
      };
      return [id, out];
    });

    return Object.fromEntries(entries);
  } else {
    const doc = (file as GetFileResponse).document;
    const out = createTree(doc);
    out.currentContext = {
      apiClient,
      fileId: options?.branchId || fileId,
    };
    return out;
  }
}
