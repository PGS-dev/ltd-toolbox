import type { GetFileNodesResponse, GetFileStylesResponse } from '@figma/rest-api-spec';
import type { ErrorDescriptions, FigmaApiInterface } from '../core/types';
import { GetStylesError, stylesLogger } from './get-styles.error';
import { StylesProcessor } from './styles-processor';

const errorDescriptions: ErrorDescriptions = {
  400: (response) => {
    let message = `Invalid parameter`;

    if (response.message) {
      message += ' (' + response.message + ').';
    }

    return message;
  },
  403: `The developer / OAuth token is invalid or expired`,
  404: `The specified file was not found`,
};

/**
 * Asynchronously fetches and processes styles from a specified Figma file.
 */
export async function getStyles(api: FigmaApiInterface, fileId: string) {
  if (!fileId) throw new GetStylesError('Expected fileId.');
  const apiWithErrors = api.withErrorDescriptions(errorDescriptions);
  const stylesUrl = `files/${fileId}/styles`;
  const fileStyles = await apiWithErrors.request<GetFileStylesResponse>(stylesUrl, undefined).then((response) => response?.meta?.styles || []);

  if (fileStyles.length === 0) {
    stylesLogger.warn(`No styles were found in ${fileId} file!`);
    return new StylesProcessor([], {});
  }

  const nodeIds = fileStyles.map((style) => style.node_id).join(',');

  const nodesUrl = `files/${fileId}/nodes`;
  const fileNodes = await apiWithErrors.request<GetFileNodesResponse>(nodesUrl, { ids: nodeIds }).then((response) => response.nodes);

  if (Object.keys(fileNodes).length === 0) {
    stylesLogger.warn(`No style nodes were found in ${fileId} file!`);
  }

  return new StylesProcessor(fileStyles, fileNodes);
}
