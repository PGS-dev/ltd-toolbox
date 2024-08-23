import type { GetFileComponentSetsResponse, GetFileComponentsResponse, PublishedComponent, PublishedComponentSet } from '@figma/rest-api-spec';
import type { ErrorDescriptions, FigmaApiInterface } from '../core/types';

const errorDescriptions: ErrorDescriptions = {
  403: `The developer / OAuth token is invalid or expired`,
  404: `The specified file was not found`,
};

class Components {
  constructor(private components: (PublishedComponent | PublishedComponentSet)[]) {}

  getByKey(key: string): PublishedComponent | PublishedComponentSet | undefined {
    return this.components.find((component) => component.key === key);
  }

  getById(id: string): PublishedComponent | PublishedComponentSet | undefined {
    return this.components.find((component) => component.node_id === id);
  }

  getByName(name: string): PublishedComponent | PublishedComponentSet | undefined {
    return this.components.find((component) => component.name === name);
  }
}

export async function getComponents(apiClient: FigmaApiInterface, fileId: string) {
  const components = await Promise.all([
    apiClient
      .withErrorDescriptions(errorDescriptions)
      .request<GetFileComponentsResponse>(`files/${fileId}/components`)
      .then((data) => data.meta.components),
    apiClient
      .withErrorDescriptions(errorDescriptions)
      .request<GetFileComponentSetsResponse>(`files/${fileId}/component_sets`)
      .then((data) => data.meta.component_sets),
  ]).then((results) => results.flat());

  return new Components(components);
}
