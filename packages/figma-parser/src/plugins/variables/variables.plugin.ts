import { GetLocalVariablesResponse } from '@figma/rest-api-spec';
import { FigmaParser, FigmaParserPluginInterface } from '../../parser';
import { CollectionsSet } from './collections-set';

type VariablesPluginInterface = {
  variables: (fileId: string, local?: boolean) => Promise<CollectionsSet>;
};

export function VariablesPlugin(host: FigmaParser): FigmaParserPluginInterface<VariablesPluginInterface> {
  return {
    name: 'variables-plugin',
    async variables(fileId: string) {
      const localVariablesUrl = `files/${fileId}/variables/local`;

      const { variables, variableCollections } = await host.request<GetLocalVariablesResponse>(localVariablesUrl).then((response) => response.meta);

      return new CollectionsSet(variableCollections, variables);
    },
  };
}
