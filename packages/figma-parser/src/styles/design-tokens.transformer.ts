import type { DropShadowEffect, Effect, GradientPaint, InnerShadowEffect, SolidPaint, TypeStyle } from '@figma/rest-api-spec';
import type { DesignToken, DesignTokensFormat, DesignTokensFormatDeep, DesignTokensFormatFlat } from '../shared/design-tokens-format.types';
import { entriesToDeepObject } from '../shared/entries-to-deep-object.util';
import { rgbaToHexa } from '../shared/rgba-to-hex.util';
import { GetStylesError } from './get-styles.error';
import type { FigmaStyleDefinition, FigmaStylesTransformer } from './types';
import { isEffectDefinition, isFillDefinition, isTextDefinition } from './types';

const gradientTransform = (style: GradientPaint) => {
  if (!style || !style.gradientStops) throw new GetStylesError('Expected Paint style with gradientStops definitions!');
  return style.gradientStops.map((stop) => ({
    color: rgbaToHexa(stop.color),
    position: stop.position,
  }));
};

const solidTransform = (style: SolidPaint) => {
  if (!style || !style.color) throw new GetStylesError('Expected Paint style with solid color definition!');
  const colorValue = {
    ...style.color,
    a: style.opacity,
  };
  return rgbaToHexa(colorValue);
};

const typographyTransform = (style: TypeStyle) => {
  return {
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    letterSpacing: style.letterSpacing,
    lineHeight: style.lineHeightPx,
  };
};

const shadowTransform = (style: Effect[]) => {
  const shadowStyles = style.filter((effect) => effect.type === 'DROP_SHADOW' || effect.type === 'INNER_SHADOW') as (DropShadowEffect | InnerShadowEffect)[];
  if (!shadowStyles.length) throw new GetStylesError('Expected Shadow Effect definitions in given style!');

  return shadowStyles.reverse().map((effect) => {
    const requiredEffect = effect;
    return {
      color: rgbaToHexa(requiredEffect.color),
      offsetX: requiredEffect.offset.x,
      offsetY: requiredEffect.offset.y,
      blur: requiredEffect.radius,
      spread: requiredEffect.spread,
    };
  });
};

export function DesignTokens(): FigmaStylesTransformer<FigmaStyleDefinition[], DesignTokensFormatFlat>;
export function DesignTokens(deep: true): FigmaStylesTransformer<FigmaStyleDefinition[], DesignTokensFormatDeep>;
export function DesignTokens(deep: false): FigmaStylesTransformer<FigmaStyleDefinition[], DesignTokensFormatFlat>;
export function DesignTokens(deep?: boolean): FigmaStylesTransformer<FigmaStyleDefinition[], DesignTokensFormat>;
export function DesignTokens(deep: boolean = false): FigmaStylesTransformer<FigmaStyleDefinition[], DesignTokensFormat> {
  return (input: FigmaStyleDefinition[]) => {
    const stylesArray = input
      .map((definition) => {
        const tokenName = definition.name.replaceAll('/', '.').replaceAll(' ', '-');
        if (isFillDefinition(definition) && definition.definition[0].type === 'SOLID') {
          return [
            tokenName,
            {
              $type: 'color',
              $value: solidTransform(definition.definition[0]),
            },
          ];
        }

        if (isFillDefinition(definition) && definition.definition[0].type === 'GRADIENT_LINEAR') {
          return [
            tokenName,
            {
              $type: 'gradient',
              $value: gradientTransform(definition.definition[0]),
            },
          ];
        }

        if (isTextDefinition(definition)) {
          return [
            tokenName,
            {
              $type: 'typography',
              $value: typographyTransform(definition.definition),
            },
          ];
        }

        if (isEffectDefinition(definition)) {
          return [
            tokenName,
            {
              $type: 'shadow',
              $value: shadowTransform(definition.definition),
            },
          ];
        }
      })
      .filter(Boolean) as [string, DesignToken][];

    if (deep) {
      entriesToDeepObject(stylesArray);
    }

    return Object.fromEntries(stylesArray);
  };
}
