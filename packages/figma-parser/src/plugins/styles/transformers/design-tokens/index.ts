import {
  FigmaStyleDfeinition,
  FigmaStylesTransformer,
  isEffectDefinition,
  isFillDefinition,
  isTextDefinition,
} from "../../types.js";
import type {
  Effect,
  Paint,
  TypeStyle,
} from "../../../../full-figma-types.d.js";
import { rgbaToHexa } from "../../../../shared/rgba-to-hex.util.js";

export interface TypographyTokenValue {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  letterSpacing: number;
  lineHeight: number;
}

export interface ShadowTokenPosition {
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

export type GradientTokenValue = ShadowTokenPosition[];

export interface DesignToken {
  $type: "typography" | "color" | "shadow" | "gradient";
  $value:
    | TypographyTokenValue
    | ColorTokenValue
    | GradientTokenValue
    | ShadowTokenValue;
}

export interface ColorToken extends DesignToken {
  $type: "color";
  $value: ColorTokenValue;
}

export interface TypographyToken extends DesignToken {
  $type: "typography";
  $value: TypographyTokenValue;
}

export interface ShadowToken extends DesignToken {
  $type: "shadow";
  $value: ShadowTokenValue;
}

export interface GradientToken extends DesignToken {
  $type: "gradient";
  $value: GradientTokenValue;
}

export const isShadowToken = (token: DesignToken): token is GradientToken =>
  token.$type === "shadow";

export const isColorToken = (token: DesignToken): token is ColorToken =>
  token.$type === "color";

export const isTypographyToken = (
  token: DesignToken,
): token is TypographyToken => token.$type === "typography";

export const isGradientToken = (token: DesignToken): token is GradientToken =>
  token.$type === "gradient";

export interface DesignTokensFormat {
  [k: string]: DesignToken | DesignTokensFormat;
}

const gradientTransform = (style: Paint) => {
  return style.gradientStops.map((stop) => ({
    color: rgbaToHexa(stop.color),
    position: stop.position,
  }));
};

const solidTransform = (style: Paint) => {
  return rgbaToHexa(style.color);
};

const typographyTransform = (style: TypeStyle) => {
  return {
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    letterSpacing: style.letterSpacing,
    lineHeight: style.lineHeightPercent,
  };
};

const shadowTransform = (style: Effect[]) => {
  return style
    .filter(
      (effect) =>
        effect.type === "DROP_SHADOW" || effect.type === "INNER_SHADOW",
    )
    .map((effect) => {
      return {
        color: rgbaToHexa(effect.color),
        offsetX: effect.offset.x,
        offsetY: effect.offset.y,
        blur: effect.radius,
        spread: effect.spread,
      };
    });
};

export const DesignTokens = (deep: boolean = false): FigmaStylesTransformer => {
  return (input: FigmaStyleDfeinition[]): DesignTokensFormat => {
    const stylesArray = input.map((definition) => {
      if (
        isFillDefinition(definition) &&
        definition.definition[0].type === "SOLID"
      ) {
        return [
          definition.name,
          {
            $type: "color",
            $value: solidTransform(definition.definition[0]),
          },
        ];
      }

      if (
        isFillDefinition(definition) &&
        definition.definition[0].type === "GRADIENT_LINEAR"
      ) {
        return [
          definition.name,
          {
            $type: "gradient",
            $value: gradientTransform(definition.definition[0]),
          },
        ];
      }

      if (isTextDefinition(definition)) {
        return [
          definition.name,
          {
            $type: "typography",
            $value: typographyTransform(definition.definition),
          },
        ];
      }

      if (isEffectDefinition(definition)) {
        return [
          definition.name,
          {
            $type: "shadow",
            $value: shadowTransform(definition.definition),
          },
        ];
      }
    });

    if (deep) {
      const output = {};

      stylesArray.forEach(([name, value]: [string, any]) => {
        const path = name.split("/");
        path.reduce((acc: any, key: string, i: number) => {
          if (acc[key] === undefined) acc[key] = {};
          if (i === path.length - 1) acc[key] = value;
          return acc[key];
        }, output);
      });

      return output;
    }
    return Object.fromEntries(stylesArray);
  };
};
