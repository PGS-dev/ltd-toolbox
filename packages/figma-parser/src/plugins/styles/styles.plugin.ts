import { FigmaParser } from '../../parser';
import { FigmaParserPlugin } from '../../types';
import {
  Effect,
  FileNodesResponse,
  FileStylesResponse, Node,
  Paint,
  TypeStyle
} from '../../full-figma-types'
import {
  EffectStyle,
  FigmaStyleDfeinition,
  FigmaStylesTransformer,
  FillStyle,
  FullStyle,
  isEffectStyle,
  isFillStyle,
  isTextStyle,
  TextStyle,
} from './types';
import { DesignTokens } from './transformers/design-tokens/index';

export class StylesPlugin implements FigmaParserPlugin {
  private host: FigmaParser;
  private stylesData: FullStyle[] = [];

  constructor(host: FigmaParser) {
    this.host = host;
    this.host.styles = this.styles.bind(this);
  }

  async styles(fileId: string) {
    if (!fileId) throw new Error('Expected fileId.');
    const stylesUrl = `files/${fileId}/styles`;
    const fileStyles = await this.host
      .request<FileStylesResponse>(stylesUrl)
      .then((response) => response?.meta?.styles);

    const nodeIds = fileStyles?.map((style) => style.node_id).join(",");

    const nodesUrl = `files/${fileId}/nodes`;
    const fileNodes = await this.host
      .request<FileNodesResponse>(nodesUrl, { ids: nodeIds })
      .then((response) => response.nodes);

    this.stylesData = fileStyles.map((style) => ({
      styleMeta: style,
      nodeData: fileNodes[style.node_id]?.document as Node,
    }));

    return this;
  }

  private getFillStyle(style: FillStyle): Readonly<Paint[]> {
    if (!isFillStyle(style)) throw new Error('Expected FillStyle!')

    return style.nodeData.fills;
  }

  private getTextStyle(style: TextStyle): Readonly<TypeStyle> {
    if (!isTextStyle(style)) throw new Error('Expected TextStyle!');
    return style.nodeData.style;
  }

  private getEffectStyle(style: EffectStyle): Readonly<Effect[]> {
    if (!isEffectStyle(style)) throw new Error('Expected EffectStyle!')

    return style.nodeData.effects;
  }

  definitions(): FigmaStyleDfeinition[] {
    return this.stylesData.map((style) => ({
      name: style.styleMeta.name,
      type: style.styleMeta.style_type,
      nodeId: style.styleMeta.node_id,
      definition: this.getStyle(style),
    }));
  }

  designTokens(deep = false) {
    return this.transform(DesignTokens(deep));
  }

  transform(...transformers: FigmaStylesTransformer[]) {
    if (transformers.length === 0) return this.definitions();
    return transformers.reduce(
      (acc, transformer) => transformer(acc),
      this.definitions(),
    );
  }

  private getStyle(style: FullStyle) {
    if (isFillStyle(style)) return this.getFillStyle(style);
    if (isTextStyle(style)) return this.getTextStyle(style);
    if (isEffectStyle(style)) return this.getEffectStyle(style);

    return null;
  }
}

declare module "../../parser.js" {
  export interface FigmaParser {
    styles(fileId: string): Promise<StylesPlugin>;
  }
}
