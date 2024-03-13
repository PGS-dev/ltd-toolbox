import { Effect, GetFileNodesResponse, Paint, PublishedStyle, TypeStyle } from '@figma/rest-api-spec';
import { DesignTokensFormat, DesignTokensFormatDeep, DesignTokensFormatFlat } from '../shared/design-tokens-format.types';
import { Last } from '../types';
import { DesignTokens } from './design-tokens.transformer';
import { EffectStyle, FigmaStyleDfeinition, FigmaStylesTransformer, FillStyle, FullStyle, TextStyle, isEffectStyle, isFillStyle, isTextStyle } from './types';

export class StylesProcessor {
  private stylesData: FullStyle[] = [];

  constructor(fileStyles: PublishedStyle[], fileNodes: GetFileNodesResponse['nodes']) {
    this.stylesData = fileStyles.map((style) => ({
      styleMeta: style,
      nodeData: fileNodes[style.node_id]?.document,
    }));
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

  private getStyle(style: FullStyle) {
    if (isFillStyle(style)) return this.getFillStyle(style);
    if (isTextStyle(style)) return this.getTextStyle(style);
    if (isEffectStyle(style)) return this.getEffectStyle(style);

    return null;
  }

  definitions(): FigmaStyleDfeinition[] {
    return this.stylesData.map((style) => ({
      name: style.styleMeta.name,
      type: style.styleMeta.style_type,
      nodeId: style.styleMeta.node_id,
      definition: this.getStyle(style),
    }));
  }

  designTokens(): DesignTokensFormatFlat;
  designTokens(deep: true): DesignTokensFormatDeep;
  designTokens(deep: false): DesignTokensFormatFlat;
  designTokens(deep?: boolean): DesignTokensFormat {
    return this.transform(DesignTokens(deep));
  }

  transform(): FigmaStyleDfeinition[];
  transform<Transformers extends FigmaStylesTransformer[]>(...transformers: Transformers): ReturnType<Last<Transformers>>;
  transform<Transformers extends FigmaStylesTransformer[]>(...transformers: Transformers): ReturnType<Last<Transformers>> | FigmaStyleDfeinition[] {
    if (transformers.length === 0) return this.definitions();
    return transformers.reduce((acc, transformer) => transformer(acc), this.definitions());
  }
}
