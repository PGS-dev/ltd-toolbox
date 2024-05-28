import type { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import type { ErrorDescriptions, FigmaApiInterface } from '../core/types'
import { CollectionsSet } from './collections-set';

const errorDescriptions: ErrorDescriptions = {
  400: (response) => {
    let message = `Invalid parameter`

    if (response.message) {
      message += ' (' + response.message + ').'
    }

    return message
  },
  401: (response) => {
    let message = 'Issue with authentication.'

    if (response.message) {
      message += ' (' + response.message + ').'
    }

    return message
  },
  403: (response) => response.message || 'The developer / OAuth token is invalid or expired'
}

/**
 * Asynchronously fetches and constructs a set of local variable collections from a Figma file.
 * This function queries the Figma API for local variables and their collections, then organizes these into a CollectionsSet instance for easy access and manipulation.
 */
export async function getVariables(api: FigmaApiInterface, fileId: string): Promise<CollectionsSet> {
  const localVariablesUrl = `files/${fileId}/variables/local`;

  const { variables, variableCollections } = await api.withErrorDescriptions(errorDescriptions).request<GetLocalVariablesResponse>(localVariablesUrl).then((response) => response.meta);

  return new CollectionsSet(variableCollections, variables);
}
