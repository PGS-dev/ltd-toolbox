[@ltd-toolbox/figma-parser - v0.1.0-alpha.11](../README.md) / [Exports](../modules.md) / FigmaApiInterface

# Interface: FigmaApiInterface

## Table of contents

### Properties

- [cache](FigmaApiInterface.md#cache)
- [options](FigmaApiInterface.md#options)

### Methods

- [request](FigmaApiInterface.md#request)
- [withErrorDescriptions](FigmaApiInterface.md#witherrordescriptions)

## Properties

### cache

• **cache**: `PersistentCache`

#### Defined in

packages/figma-parser/src/core/types.ts:47

___

### options

• **options**: [`FigmaParserOptions`](FigmaParserOptions.md)

#### Defined in

packages/figma-parser/src/core/types.ts:46

## Methods

### request

▸ **request**\<`Response`\>(`path`, `params?`): `Promise`\<`Response`\>

Requests given resources with path and params.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Response` | `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `params?` | `Record`\<`string`, `any`\> |

#### Returns

`Promise`\<`Response`\>

**`Example`**

```typescript
const api = figmaApi()
const nodes == await api.request('/files/<FIGMAFILEID>/nodes', {ids: ['111:11', '111:12', depth: 1]})

@example
```typescript

#### Defined in

packages/figma-parser/src/core/types.ts:80

___

### withErrorDescriptions

▸ **withErrorDescriptions**(`descriptions`): [`FigmaApiInterface`](FigmaApiInterface.md)

Add custom error descriptions for error codes in form of an object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `descriptions` | [`ErrorDescriptions`](../modules.md#errordescriptions) |

#### Returns

[`FigmaApiInterface`](FigmaApiInterface.md)

**`Example`**

```typescript
const api = figmaApi()
const withMyOwnErrorDescriptions = api.withErrorDescriptions({
  404: 'These are not the resources you are looking for...',
  403: (response) => response.message || 'Unknown error'
})

@example
```typescript

#### Defined in

packages/figma-parser/src/core/types.ts:64
