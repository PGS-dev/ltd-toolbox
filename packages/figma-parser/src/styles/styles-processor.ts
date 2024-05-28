import { Effect, GetFileNodesResponse, Paint, PublishedStyle, TypeStyle } from '@figma/rest-api-spec';
import { DesignTokensFormat, DesignTokensFormatDeep, DesignTokensFormatFlat } from '../shared/design-tokens-format.types';
import { Last } from '../types';
import { DesignTokens } from './design-tokens.transformer';
import { GetStylesError } from './get-styles.error'
import { EffectStyle, FigmaStyleDefinition, FigmaStylesTransformer, FillStyle, FullStyle, TextStyle, isEffectStyle, isFillStyle, isTextStyle } from './types';

export class StylesProcessor {
  private stylesData: FullStyle[] = [];

  constructor(fileStyles: PublishedStyle[], fileNodes: GetFileNodesResponse['nodes']) {
    this.stylesData = fileStyles.map((style) => ({
      styleMeta: style,
      nodeData: fileNodes[style.node_id]?.document,
    }));
  }

  private getFillStyle(style: FillStyle): Readonly<Paint[]> {
    if (!isFillStyle(style)) throw new GetStylesError('Expected FillStyle!');

    return style.nodeData.fills;
  }

  private getTextStyle(style: TextStyle): Readonly<TypeStyle> {
    if (!isTextStyle(style)) throw new GetStylesError('Expected TextStyle!');

    return style.nodeData.style;
  }

  private getEffectStyle(style: EffectStyle): Readonly<Effect[]> {
    if (!isEffectStyle(style)) throw new GetStylesError('Expected EffectStyle!');

    return style.nodeData.effects;
  }

  private getStyle(style: FullStyle) {
    if (isFillStyle(style)) return this.getFillStyle(style);
    if (isTextStyle(style)) return this.getTextStyle(style);
    if (isEffectStyle(style)) return this.getEffectStyle(style);

    return null;
  }

  /**
   * Converts Figma styles into a standardized array of style definitions, each including the style's name, type, node ID, and specific style properties (e.g., fills, text style, effects) as applicable.
   */
  definitions(): FigmaStyleDefinition[] {
    return this.stylesData.map((style) => ({
      name: style.styleMeta.name,
      type: style.styleMeta.style_type,
      nodeId: style.styleMeta.node_id,
      definition: this.getStyle(style),
    }));
  }

  /**
   * Generates design tokens from the Figma styles. This method can return either a flat or deep structure of design tokens based on the provided argument.
   */
  designTokens(): DesignTokensFormatFlat;
  designTokens(deep: true): DesignTokensFormatDeep;
  designTokens(deep: false): DesignTokensFormatFlat;
  designTokens(deep?: boolean): DesignTokensFormat {
    return this.transform(DesignTokens(deep));
  }

  /**
   * Transforms the Figma styles into another format or structure by applying one or more specified transformation functions. If no transformers are provided, it returns the default style definitions.
   */
  transform(): FigmaStyleDefinition[];
  transform<Transformers extends FigmaStylesTransformer[]>(...transformers: Transformers): ReturnType<Last<Transformers>>;
  transform<Transformers extends FigmaStylesTransformer[]>(...transformers: Transformers): ReturnType<Last<Transformers>> | FigmaStyleDefinition[] {
    if (transformers.length === 0) return this.definitions();
    return transformers.reduce((acc, transformer) => transformer(acc), this.definitions());
  }
}
