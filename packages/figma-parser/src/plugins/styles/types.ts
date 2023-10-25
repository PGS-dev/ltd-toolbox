import {
  Effect,
  FullStyleMetadata,
  Node as FigmaNode,
  Paint,
  StyleType,
  Text as FigmaText,
  TypeStyle,
  VectorBase
} from '../../full-figma-types.js'

export const isFillStyle = (node: FullStyle): node is FillStyle => node.styleMeta.style_type === 'FILL';

export const isTextStyle = (node: FullStyle): node is TextStyle => node.styleMeta.style_type === 'TEXT';

export const isEffectStyle = (node: FullStyle): node is EffectStyle => node.styleMeta.style_type === 'EFFECT';

export const isShadowEffect = (effect: Effect): effect is Effect => effect.type === 'DROP_SHADOW' || effect.type === 'INNER_SHADOW'

export const isBlurEffect = (effect: Effect): effect is Effect => effect.type === 'LAYER_BLUR' || effect.type === 'BACKGROUND_BLUR'

export const isFillDefinition = (definition: FigmaStyleDfeinition): definition is FigmaStyleDfeinition & { definition: Paint[] } => definition.type === 'FILL'

export const isTextDefinition = (definition: FigmaStyleDfeinition): definition is FigmaStyleDfeinition & { definition: TypeStyle } => definition.type === 'TEXT'

export const isEffectDefinition = (definition: FigmaStyleDfeinition): definition is FigmaStyleDfeinition & { definition: Effect[] } => definition.type === 'EFFECT'

export type FigmaStylesTransformer<Input = any, Output = any> = (input: Input) => Output

export type FullStyle = {
  styleMeta: FullStyleMetadata
  nodeData: FigmaNode
};

export type FillStyle = FullStyle & {
  nodeData: VectorBase
}

export type TextStyle = FullStyle & {
  nodeData: FigmaText
}

export type EffectStyle = FullStyle & {
  nodeData: VectorBase
}

export interface FigmaStyleDfeinition {
  name: string;
  type: StyleType;
  nodeId: string;
  definition: Paint[] | TypeStyle | Effect[] | {} | null
}
