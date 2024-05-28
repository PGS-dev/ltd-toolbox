import { GetFileResponse } from '@figma/rest-api-spec';
import { ErrorDescriptions, FigmaApiInterface } from '../core/types'
import { ContentNode } from './content-node';

const errorDescriptions: ErrorDescriptions = {
  403: `The developer / OAuth token is invalid or expired`,
  404: `The specified file was not found`
}

export async function getContents(api: FigmaApiInterface, fileId: string) {
  const file = await api.withErrorDescriptions(errorDescriptions).request<GetFileResponse>(`files/${fileId}`);
  const node = new ContentNode(file.document);

  return node;
}
