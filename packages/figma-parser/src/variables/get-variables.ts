import { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import { FigmaApiInterface } from '../core/api';
import { CollectionsSet } from './collections-set';

/**
 * Asynchronously fetches and constructs a set of local variable collections from a Figma file.
 * This function queries the Figma API for local variables and their collections, then organizes these into a CollectionsSet instance for easy access and manipulation.
 */
export async function getVariables(host: FigmaApiInterface, fileId: string): Promise<CollectionsSet> {
  const localVariablesUrl = `files/${fileId}/variables/local`;

  const { variables, variableCollections } = await host.request<GetLocalVariablesResponse>(localVariablesUrl).then((response) => response.meta);

  return new CollectionsSet(variableCollections, variables);
}
