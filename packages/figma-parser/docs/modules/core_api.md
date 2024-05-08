[@ltd-toolbox/figma-parser - v0.1.0-alpha.4](../README.md) / [Modules](../modules.md) / core/api

# Module: core/api

## Table of contents

### Interfaces

- [FigmaApiInterface](../interfaces/core_api.FigmaApiInterface.md)
- [FigmaParserOptions](../interfaces/core_api.FigmaParserOptions.md)

### Type Aliases

- [FigmaPAT](core_api.md#figmapat)

### Functions

- [figmaApi](core_api.md#figmaapi)

## Type Aliases

### FigmaPAT

Ƭ **FigmaPAT**: \`figd\_$\{string}\` \| `string`

Figma Personal Access Token format.

#### Defined in

packages/figma-parser/src/core/api.ts:8

## Functions

### figmaApi

▸ **figmaApi**(): `FigmaApi`

#### Returns

`FigmaApi`

#### Defined in

packages/figma-parser/src/core/api.ts:87

▸ **figmaApi**(`token`): `FigmaApi`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`FigmaApi`

#### Defined in

packages/figma-parser/src/core/api.ts:88

▸ **figmaApi**(`options`): `FigmaApi`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<[`FigmaParserOptions`](../interfaces/core_api.FigmaParserOptions.md)\> |

#### Returns

`FigmaApi`

#### Defined in

packages/figma-parser/src/core/api.ts:89

▸ **figmaApi**(`token`, `options?`): `FigmaApi`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `options?` | `Partial`\<[`FigmaParserOptions`](../interfaces/core_api.FigmaParserOptions.md)\> |

#### Returns

`FigmaApi`

#### Defined in

packages/figma-parser/src/core/api.ts:90
