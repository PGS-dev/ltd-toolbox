import type { Effect, Node, Paint, PublishedStyle, StyleType, TextNode, TypeStyle, VectorNode } from '@figma/rest-api-spec';

export const isFillStyle = (node: FullStyle): node is FillStyle => node.styleMeta.style_type === 'FILL';

export const isTextStyle = (node: FullStyle): node is TextStyle => node.styleMeta.style_type === 'TEXT';

export const isEffectStyle = (node: FullStyle): node is EffectStyle => node.styleMeta.style_type === 'EFFECT';

export const isShadowEffect = (effect: Effect): effect is Effect => effect.type === 'DROP_SHADOW' || effect.type === 'INNER_SHADOW';

export const isBlurEffect = (effect: Effect): effect is Effect => effect.type === 'LAYER_BLUR' || effect.type === 'BACKGROUND_BLUR';

export const isFillDefinition = (definition: FigmaStyleDefinition): definition is FigmaStyleDefinition & { definition: Paint[] } => definition.type === 'FILL';

export const isTextDefinition = (definition: FigmaStyleDefinition): definition is FigmaStyleDefinition & { definition: TypeStyle } => definition.type === 'TEXT';

export const isEffectDefinition = (definition: FigmaStyleDefinition): definition is FigmaStyleDefinition & { definition: Effect[] } => definition.type === 'EFFECT';

// Temporary type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FigmaStylesTransformer<Input = any, Output = any> = (input: Input) => Output;

export type FullStyle = {
  styleMeta: PublishedStyle;
  nodeData: Node;
};

export type FillStyle = FullStyle & {
  nodeData: VectorNode;
};

export type TextStyle = FullStyle & {
  nodeData: TextNode;
};

export type EffectStyle = FullStyle & {
  nodeData: VectorNode;
};

export interface FigmaStyleDefinition {
  name: string;
  type: StyleType;
  nodeId: string;
  definition: Paint[] | TypeStyle | Effect[] | object | null;
}
