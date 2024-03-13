[@ltd-toolbox/figma-parser - v0.1.0-alpha.1](../README.md) / [Modules](../modules.md) / core/api

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

Ƭ **FigmaPAT**: \`figd\_$\{string}\`

Figma Personal Access Token format.

#### Defined in

packages/figma-parser/src/core/api.ts:7

## Functions

### figmaApi

▸ **figmaApi**(`token`, `options?`): `FigmaApi`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | \`figd\_$\{string}\` |
| `options?` | `Partial`\<[`FigmaParserOptions`](../interfaces/core_api.FigmaParserOptions.md)\> |

#### Returns

`FigmaApi`

#### Defined in

packages/figma-parser/src/core/api.ts:86
