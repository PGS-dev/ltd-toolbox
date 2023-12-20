import { rgbaToHexa } from '../../shared/rgba-to-hex.util';
import type { Effect, Paint, TypeStyle } from '../../types';
import { FigmaStyleDfeinition, FigmaStylesTransformer, isEffectDefinition, isFillDefinition, isTextDefinition } from './types';

export interface TypographyTokenValue {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  letterSpacing: number;
  lineHeight: number;
}

export interface GradientStop {
  color: string;
  position: number;
}

export type ColorTokenValue = `#${string}`;

export interface ShadowStop {
  color: string;
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
}

export type ShadowTokenValue = ShadowStop[];

export type GradientTokenValue = GradientStop[];

export interface DesignToken {
  $type: 'typography' | 'color' | 'shadow' | 'gradient';
  $value: TypographyTokenValue | ColorTokenValue | GradientTokenValue | ShadowTokenValue;
}

export interface ColorToken extends DesignToken {
  $type: 'color';
  $value: ColorTokenValue;
}

export interface TypographyToken extends DesignToken {
  $type: 'typography';
  $value: TypographyTokenValue;
}

export interface ShadowToken extends DesignToken {
  $type: 'shadow';
  $value: ShadowTokenValue;
}

export interface GradientToken extends DesignToken {
  $type: 'gradient';
  $value: GradientTokenValue;
}

export const isShadowToken = (token: DesignToken): token is GradientToken => token.$type === 'shadow';

export const isColorToken = (token: DesignToken): token is ColorToken => token.$type === 'color';

export const isTypographyToken = (token: DesignToken): token is TypographyToken => token.$type === 'typography';

export const isGradientToken = (token: DesignToken): token is GradientToken => token.$type === 'gradient';

export interface DesignTokensFormat {
  [k: string]: DesignToken | DesignTokensFormat;
}

const gradientTransform = (style: Paint) => {
  if (!style || !style.gradientStops) throw new Error('Expected Paint style with gradientStops definitions!');
  return style.gradientStops.map((stop) => ({
    color: rgbaToHexa(stop.color),
    position: stop.position,
  }));
};

const solidTransform = (style: Paint) => {
  if (!style || !style.color) throw new Error('Expected Paint style with solid color definition!');
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
  const shadowStyles = style.filter((effect) => effect.type === 'DROP_SHADOW' || effect.type === 'INNER_SHADOW');
  if (!shadowStyles.length) throw new Error('Expected Shadow Effect definitions in given style!');

  return shadowStyles.map((effect) => {
    const requiredEffect = effect as Required<Effect>;
    return {
      color: rgbaToHexa(requiredEffect.color),
      offsetX: requiredEffect.offset.x,
      offsetY: requiredEffect.offset.y,
      blur: requiredEffect.radius,
      spread: requiredEffect.spread,
    };
  });
};

export const DesignTokens = (deep: boolean = false): FigmaStylesTransformer<FigmaStyleDfeinition[], DesignTokensFormat> => {
  return (input: FigmaStyleDfeinition[]) => {
    const stylesArray = input
      .map((definition) => {
        if (isFillDefinition(definition) && definition.definition[0].type === 'SOLID') {
          return [
            definition.name,
            {
              $type: 'color',
              $value: solidTransform(definition.definition[0]),
            },
          ];
        }

        if (isFillDefinition(definition) && definition.definition[0].type === 'GRADIENT_LINEAR') {
          return [
            definition.name,
            {
              $type: 'gradient',
              $value: gradientTransform(definition.definition[0]),
            },
          ];
        }

        if (isTextDefinition(definition)) {
          return [
            definition.name,
            {
              $type: 'typography',
              $value: typographyTransform(definition.definition),
            },
          ];
        }

        if (isEffectDefinition(definition)) {
          return [
            definition.name,
            {
              $type: 'shadow',
              $value: shadowTransform(definition.definition),
            },
          ];
        }
      })
      .filter(Boolean) as [string, DesignToken][];

    if (deep) {
      const output = {};

      stylesArray.forEach(([name, value]) => {
        const path = name.split('/');
        path.reduce((acc: Record<string, object>, key: string, i: number) => {
          if (acc[key] === undefined) acc[key] = {};

          if (i === path.length - 1) {
            acc[key] = {
              ...acc[key],
              ...value,
            };
          }

          return acc[key];
        }, output);
      });

      return output;
    }
    return Object.fromEntries(stylesArray);
  };
};
