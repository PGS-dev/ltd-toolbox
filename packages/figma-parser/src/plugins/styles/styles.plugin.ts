import { FigmaParserPluginInterface } from '../../parser';
import { FigmaParser } from '../../parser/parser';
import { FileNodesResponse, FileStylesResponse, FullStyleMetadata } from '../../types';
import { StylesProcessor } from './styles-processor';

type StylesPluginInterface = {
  styles: (fileId: string) => Promise<StylesProcessor>;
};

export function StylesPlugin(host: FigmaParser): FigmaParserPluginInterface<StylesPluginInterface> {
  return {
    name: 'styles-plugin',
    async styles(fileId: string) {
      if (!fileId) throw new Error('Expected fileId.');
      const stylesUrl = `files/${fileId}/styles`;
      const fileStyles = (await host.request<FileStylesResponse>(stylesUrl).then((response) => response?.meta?.styles)) as FullStyleMetadata[];

      const nodeIds = fileStyles?.map((style) => style.node_id).join(',');

      const nodesUrl = `files/${fileId}/nodes`;
      const fileNodes = await host.request<FileNodesResponse>(nodesUrl, { ids: nodeIds }).then((response) => response.nodes);

      return new StylesProcessor(fileStyles, fileNodes);
    },
  };
}
