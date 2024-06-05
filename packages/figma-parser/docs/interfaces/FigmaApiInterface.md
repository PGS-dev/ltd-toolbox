[@ltd-toolbox/figma-parser - v0.1.0-alpha.7](../README.md) / [Exports](../modules.md) / FigmaApiInterface

# Interface: FigmaApiInterface

## Table of contents

### Methods

- [request](FigmaApiInterface.md#request)
- [withErrorDescriptions](FigmaApiInterface.md#witherrordescriptions)

## Methods

### request

▸ **request**\<`Response`\>(`path`, `params?`): `Promise`\<`Response`\>

Requests given resources with path and params.

```
const api = figmaApi()
const nodes == await api.request('/files/<FIGMAFILEID>/nodes', {ids: ['111:11', '111:12', depth: 1]})
```

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

packages/figma-parser/src/core/types.ts:57

___

### withErrorDescriptions

▸ **withErrorDescriptions**(`descriptions`): [`FigmaApiInterface`](FigmaApiInterface.md)

Add custom error descriptions for error codes in form of an object.

```
const api = figmaApi()
const withMyOwnErrorDescriptions = api.withErrorDescriptions({
  404: 'These are not the resources you are looking for...',
  403: (response) => response.message || 'Unknown error'
})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `descriptions` | [`ErrorDescriptions`](../modules.md#errordescriptions) |

#### Returns

[`FigmaApiInterface`](FigmaApiInterface.md)

#### Defined in

packages/figma-parser/src/core/types.ts:45
