import { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import { FigmaApiInterface } from '../core/api';
import { CollectionsSet } from './collections-set';

export async function getVariables(host: FigmaApiInterface, fileId: string): Promise<CollectionsSet> {
  const localVariablesUrl = `files/${fileId}/variables/local`;

  const { variables, variableCollections } = await host.request<GetLocalVariablesResponse>(localVariablesUrl).then((response) => response.meta);

  return new CollectionsSet(variableCollections, variables);
}
