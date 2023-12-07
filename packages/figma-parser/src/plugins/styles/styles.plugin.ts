import { Effect, FileNodesResponse, FileStylesResponse, Node, Paint, TypeStyle } from '../../full-figma-types';
import { FigmaParser } from '../../parser';
import { FigmaParserPlugin } from '../../types';
import { DesignTokens, DesignTokensFormat } from './transformers/design-tokens/index';
import { EffectStyle, FigmaStyleDfeinition, FigmaStylesTransformer, FillStyle, FullStyle, TextStyle, isEffectStyle, isFillStyle, isTextStyle } from './types';

type Prev<T extends number> = [
  -1,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
][T];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Last<original extends any[]> = original[Prev<original extends { length: infer L } ? L : never>];

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
    const fileStyles = await this.host.request<FileStylesResponse>(stylesUrl).then((response) => response?.meta?.styles);

    const nodeIds = fileStyles?.map((style) => style.node_id).join(',');

    const nodesUrl = `files/${fileId}/nodes`;
    const fileNodes = await this.host.request<FileNodesResponse>(nodesUrl, { ids: nodeIds }).then((response) => response.nodes);

    this.stylesData = fileStyles.map((style) => ({
      styleMeta: style,
      nodeData: fileNodes[style.node_id]?.document as Node,
    }));

    return this;
  }

  private getFillStyle(style: FillStyle): Readonly<Paint[]> {
    if (!isFillStyle(style)) throw new Error('Expected FillStyle!');

    return style.nodeData.fills;
  }

  private getTextStyle(style: TextStyle): Readonly<TypeStyle> {
    if (!isTextStyle(style)) throw new Error('Expected TextStyle!');
    return style.nodeData.style;
  }

  private getEffectStyle(style: EffectStyle): Readonly<Effect[]> {
    if (!isEffectStyle(style)) throw new Error('Expected EffectStyle!');

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

  designTokens(deep = false): DesignTokensFormat {
    return this.transform(DesignTokens(deep)) as DesignTokensFormat;
  }

  transform<Transformers extends FigmaStylesTransformer[]>(...transformers: Transformers): ReturnType<Last<Transformers>> | FigmaStyleDfeinition[] {
    if (transformers.length === 0) return this.definitions();
    return transformers.reduce((acc, transformer) => transformer(acc), this.definitions());
  }

  private getStyle(style: FullStyle) {
    if (isFillStyle(style)) return this.getFillStyle(style);
    if (isTextStyle(style)) return this.getTextStyle(style);
    if (isEffectStyle(style)) return this.getEffectStyle(style);

    return null;
  }
}
