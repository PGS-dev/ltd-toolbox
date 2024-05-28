[@ltd-toolbox/figma-parser - v0.1.0-alpha.5](../README.md) / [Modules](../modules.md) / [dev](../modules/dev.md) / FigmaApiInterface

# Interface: FigmaApiInterface

[dev](../modules/dev.md).FigmaApiInterface

## Table of contents

### Methods

- [request](dev.FigmaApiInterface.md#request)
- [withErrorDescriptions](dev.FigmaApiInterface.md#witherrordescriptions)

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

packages/figma-parser/src/core/types.ts:42

___

### withErrorDescriptions

▸ **withErrorDescriptions**(`descriptions`): [`FigmaApiInterface`](dev.FigmaApiInterface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `descriptions` | [`ErrorDescriptions`](../modules/dev.md#errordescriptions) |

#### Returns

[`FigmaApiInterface`](dev.FigmaApiInterface.md)

#### Defined in

packages/figma-parser/src/core/types.ts:41
