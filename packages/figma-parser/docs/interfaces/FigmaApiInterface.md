[@ltd-toolbox/figma-parser - v0.1.0-alpha.7](../README.md) / [Exports](../modules.md) / FigmaApiInterface

# Interface: FigmaApiInterface

## Table of contents

### Methods

- [request](FigmaApiInterface.md#request)
- [withErrorDescriptions](FigmaApiInterface.md#witherrordescriptions)

## Methods

### request

▸ **request**\<`Response`\>(`path`, `params?`): `Promise`\<`Response`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Response` | `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `params?` | `Record`\<`string`, `string`\> |

#### Returns

`Promise`\<`Response`\>

#### Defined in

packages/figma-parser/src/core/types.ts:38

___

### withErrorDescriptions

▸ **withErrorDescriptions**(`descriptions`): [`FigmaApiInterface`](FigmaApiInterface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `descriptions` | [`ErrorDescriptions`](../modules.md#errordescriptions) |

#### Returns

[`FigmaApiInterface`](FigmaApiInterface.md)

#### Defined in

packages/figma-parser/src/core/types.ts:37
