[@ltd-toolbox/figma-parser - v0.1.0-alpha.5](../README.md) / [Modules](../modules.md) / styles

# Module: styles

## Table of contents

### Interfaces

- [FigmaStyleDefinition](../interfaces/styles.FigmaStyleDefinition.md)

### Type Aliases

- [EffectStyle](styles.md#effectstyle)
- [FigmaStylesTransformer](styles.md#figmastylestransformer)
- [FillStyle](styles.md#fillstyle)
- [FullStyle](styles.md#fullstyle)
- [TextStyle](styles.md#textstyle)

### Functions

- [DesignTokens](styles.md#designtokens)
- [getStyles](styles.md#getstyles)
- [isBlurEffect](styles.md#isblureffect)
- [isEffectDefinition](styles.md#iseffectdefinition)
- [isEffectStyle](styles.md#iseffectstyle)
- [isFillDefinition](styles.md#isfilldefinition)
- [isFillStyle](styles.md#isfillstyle)
- [isShadowEffect](styles.md#isshadoweffect)
- [isTextDefinition](styles.md#istextdefinition)
- [isTextStyle](styles.md#istextstyle)

## Type Aliases

### EffectStyle

Ƭ **EffectStyle**: [`FullStyle`](styles.md#fullstyle) & \{ `nodeData`: `VectorNode`  }

#### Defined in

packages/figma-parser/src/styles/types.ts:36

___

### FigmaStylesTransformer

Ƭ **FigmaStylesTransformer**\<`Input`, `Output`\>: (`input`: `Input`) => `Output`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | `any` |
| `Output` | `any` |

#### Type declaration

▸ (`input`): `Output`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |

##### Returns

`Output`

#### Defined in

packages/figma-parser/src/styles/types.ts:21

___

### FillStyle

Ƭ **FillStyle**: [`FullStyle`](styles.md#fullstyle) & \{ `nodeData`: `VectorNode`  }

#### Defined in

packages/figma-parser/src/styles/types.ts:28

___

### FullStyle

Ƭ **FullStyle**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `nodeData` | `Node` |
| `styleMeta` | `PublishedStyle` |

#### Defined in

packages/figma-parser/src/styles/types.ts:23

___

### TextStyle

Ƭ **TextStyle**: [`FullStyle`](styles.md#fullstyle) & \{ `nodeData`: `TextNode`  }

#### Defined in

packages/figma-parser/src/styles/types.ts:32

## Functions

### DesignTokens

▸ **DesignTokens**(): [`FigmaStylesTransformer`](styles.md#figmastylestransformer)\<[`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md)[], [`DesignTokensFormatFlat`](../interfaces/dev.DesignTokensFormatFlat.md)\>

#### Returns

[`FigmaStylesTransformer`](styles.md#figmastylestransformer)\<[`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md)[], [`DesignTokensFormatFlat`](../interfaces/dev.DesignTokensFormatFlat.md)\>

#### Defined in

packages/figma-parser/src/styles/design-tokens.transformer.ts:52

▸ **DesignTokens**(`deep`): [`FigmaStylesTransformer`](styles.md#figmastylestransformer)\<[`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md)[], [`DesignTokensFormatDeep`](../interfaces/dev.DesignTokensFormatDeep.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep` | ``true`` |

#### Returns

[`FigmaStylesTransformer`](styles.md#figmastylestransformer)\<[`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md)[], [`DesignTokensFormatDeep`](../interfaces/dev.DesignTokensFormatDeep.md)\>

#### Defined in

packages/figma-parser/src/styles/design-tokens.transformer.ts:53

▸ **DesignTokens**(`deep`): [`FigmaStylesTransformer`](styles.md#figmastylestransformer)\<[`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md)[], [`DesignTokensFormatFlat`](../interfaces/dev.DesignTokensFormatFlat.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep` | ``false`` |

#### Returns

[`FigmaStylesTransformer`](styles.md#figmastylestransformer)\<[`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md)[], [`DesignTokensFormatFlat`](../interfaces/dev.DesignTokensFormatFlat.md)\>

#### Defined in

packages/figma-parser/src/styles/design-tokens.transformer.ts:54

▸ **DesignTokens**(`deep?`): [`FigmaStylesTransformer`](styles.md#figmastylestransformer)\<[`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md)[], [`DesignTokensFormat`](dev.md#designtokensformat)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep?` | `boolean` |

#### Returns

[`FigmaStylesTransformer`](styles.md#figmastylestransformer)\<[`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md)[], [`DesignTokensFormat`](dev.md#designtokensformat)\>

#### Defined in

packages/figma-parser/src/styles/design-tokens.transformer.ts:55

___

### getStyles

▸ **getStyles**(`api`, `fileId`): `Promise`\<[`StylesProcessor`](../classes/dev.StylesProcessor.md)\>

Asynchronously fetches and processes styles from a specified Figma file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`FigmaApiInterface`](../interfaces/dev.FigmaApiInterface.md) |
| `fileId` | `string` |

#### Returns

`Promise`\<[`StylesProcessor`](../classes/dev.StylesProcessor.md)\>

#### Defined in

packages/figma-parser/src/styles/get-styles.ts:23

___

### isBlurEffect

▸ **isBlurEffect**(`effect`): effect is Effect

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | `Effect` |

#### Returns

effect is Effect

#### Defined in

packages/figma-parser/src/styles/types.ts:11

___

### isEffectDefinition

▸ **isEffectDefinition**(`definition`): definition is FigmaStyleDefinition & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md) |

#### Returns

definition is FigmaStyleDefinition & Object

#### Defined in

packages/figma-parser/src/styles/types.ts:17

___

### isEffectStyle

▸ **isEffectStyle**(`node`): node is EffectStyle

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`FullStyle`](styles.md#fullstyle) |

#### Returns

node is EffectStyle

#### Defined in

packages/figma-parser/src/styles/types.ts:7

___

### isFillDefinition

▸ **isFillDefinition**(`definition`): definition is FigmaStyleDefinition & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md) |

#### Returns

definition is FigmaStyleDefinition & Object

#### Defined in

packages/figma-parser/src/styles/types.ts:13

___

### isFillStyle

▸ **isFillStyle**(`node`): node is FillStyle

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`FullStyle`](styles.md#fullstyle) |

#### Returns

node is FillStyle

#### Defined in

packages/figma-parser/src/styles/types.ts:3

___

### isShadowEffect

▸ **isShadowEffect**(`effect`): effect is Effect

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | `Effect` |

#### Returns

effect is Effect

#### Defined in

packages/figma-parser/src/styles/types.ts:9

___

### isTextDefinition

▸ **isTextDefinition**(`definition`): definition is FigmaStyleDefinition & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md) |

#### Returns

definition is FigmaStyleDefinition & Object

#### Defined in

packages/figma-parser/src/styles/types.ts:15

___

### isTextStyle

▸ **isTextStyle**(`node`): node is TextStyle

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`FullStyle`](styles.md#fullstyle) |

#### Returns

node is TextStyle

#### Defined in

packages/figma-parser/src/styles/types.ts:5
