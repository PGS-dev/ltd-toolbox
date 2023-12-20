import { FigmaParser, FigmaParserPluginInterface } from '../../parser';
import { FileResponse } from '../../types';
import { SingleNode } from './single-node';

type StylesPluginInterface = {
  nodes: (fileId: string) => Promise<SingleNode>;
};

export function NodesPlugin(host: FigmaParser): FigmaParserPluginInterface<StylesPluginInterface> {
  const { nodeMixins, nodeCollectionMixins } = host.options;
  return {
    name: 'nodes-plugin',
    async nodes(fileId: string): Promise<SingleNode> {
      const file: FileResponse = await host.request(`files/${fileId}`);
      const nodeCtor = nodeMixins.reduce((wrapped, mixin) => mixin(wrapped), SingleNode);
      return new nodeCtor(file.document, nodeMixins, nodeCollectionMixins);
    },
  };
}
