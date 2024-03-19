[@ltd-toolbox/figma-parser - v0.1.0-alpha.2](../README.md) / [Modules](../modules.md) / [dev](../modules/dev.md) / StylesProcessor

# Class: StylesProcessor

[dev](../modules/dev.md).StylesProcessor

## Table of contents

### Constructors

- [constructor](dev.StylesProcessor.md#constructor)

### Methods

- [definitions](dev.StylesProcessor.md#definitions)
- [designTokens](dev.StylesProcessor.md#designtokens)
- [transform](dev.StylesProcessor.md#transform)

## Constructors

### constructor

• **new StylesProcessor**(`fileStyles`, `fileNodes`): [`StylesProcessor`](dev.StylesProcessor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileStyles` | `PublishedStyle`[] |
| `fileNodes` | `Object` |

#### Returns

[`StylesProcessor`](dev.StylesProcessor.md)

#### Defined in

packages/figma-parser/src/styles/styles-processor.ts:10

## Methods

### definitions

▸ **definitions**(): [`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md)[]

Converts Figma styles into a standardized array of style definitions, each including the style's name, type, node ID, and specific style properties (e.g., fills, text style, effects) as applicable.

#### Returns

[`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md)[]

#### Defined in

packages/figma-parser/src/styles/styles-processor.ts:46

___

### designTokens

▸ **designTokens**(): [`DesignTokensFormatFlat`](../interfaces/dev.DesignTokensFormatFlat.md)

Generates design tokens from the Figma styles. This method can return either a flat or deep structure of design tokens based on the provided argument.

#### Returns

[`DesignTokensFormatFlat`](../interfaces/dev.DesignTokensFormatFlat.md)

#### Defined in

packages/figma-parser/src/styles/styles-processor.ts:58

▸ **designTokens**(`deep`): [`DesignTokensFormatDeep`](../interfaces/dev.DesignTokensFormatDeep.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep` | ``true`` |

#### Returns

[`DesignTokensFormatDeep`](../interfaces/dev.DesignTokensFormatDeep.md)

#### Defined in

packages/figma-parser/src/styles/styles-processor.ts:59

▸ **designTokens**(`deep`): [`DesignTokensFormatFlat`](../interfaces/dev.DesignTokensFormatFlat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep` | ``false`` |

#### Returns

[`DesignTokensFormatFlat`](../interfaces/dev.DesignTokensFormatFlat.md)

#### Defined in

packages/figma-parser/src/styles/styles-processor.ts:60

___

### transform

▸ **transform**(): [`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md)[]

Transforms the Figma styles into another format or structure by applying one or more specified transformation functions. If no transformers are provided, it returns the default style definitions.

#### Returns

[`FigmaStyleDefinition`](../interfaces/styles.FigmaStyleDefinition.md)[]

#### Defined in

packages/figma-parser/src/styles/styles-processor.ts:68

▸ **transform**\<`Transformers`\>(`...transformers`): `ReturnType`\<`Last`\<`Transformers`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Transformers` | extends [`FigmaStylesTransformer`](../modules/styles.md#figmastylestransformer)[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...transformers` | `Transformers` |

#### Returns

`ReturnType`\<`Last`\<`Transformers`\>\>

#### Defined in

packages/figma-parser/src/styles/styles-processor.ts:69
