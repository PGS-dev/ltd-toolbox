import { GetFileNodesResponse, GetFileStylesResponse } from '@figma/rest-api-spec';
import { FigmaApiInterface } from '../core/api';
import { StylesProcessor } from './styles-processor';

/**
 * Asynchronously fetches and processes styles from a specified Figma file.
 */
export async function getStyles(host: FigmaApiInterface, fileId: string) {
  if (!fileId) throw new Error('Expected fileId.');
  const stylesUrl = `files/${fileId}/styles`;
  const fileStyles = await host.request<GetFileStylesResponse>(stylesUrl).then((response) => response?.meta?.styles);

  const nodeIds = fileStyles?.map((style) => style.node_id).join(',');

  const nodesUrl = `files/${fileId}/nodes`;
  const fileNodes = await host.request<GetFileNodesResponse>(nodesUrl, { ids: nodeIds }).then((response) => response.nodes);

  return new StylesProcessor(fileStyles, fileNodes);
}
