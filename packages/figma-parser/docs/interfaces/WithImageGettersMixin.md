[@ltd-toolbox/figma-parser - v0.1.0-alpha.11](../README.md) / [Exports](../modules.md) / WithImageGettersMixin

# Interface: WithImageGettersMixin

## Table of contents

### Methods

- [getImage](WithImageGettersMixin.md#getimage)
- [getImageUrl](WithImageGettersMixin.md#getimageurl)
- [getImages](WithImageGettersMixin.md#getimages)
- [getImagesArray](WithImageGettersMixin.md#getimagesarray)

## Methods

### getImage

▸ **getImage**(`options?`): `Promise`\<`Buffer`\>

Fetches the actual image for current node
Image is returned as Buffer, so you can format it however you want.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<[`ImageOptions`](ImageOptions.md)\> |

#### Returns

`Promise`\<`Buffer`\>

#### Defined in

packages/figma-parser/src/contents/node-mixins/with-image-getters.mixin.ts:18

___

### getImageUrl

▸ **getImageUrl**(`options?`): `Promise`\<`undefined` \| `string`\>

Fetches the image url for current node

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<[`ImageOptions`](ImageOptions.md)\> |

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Defined in

packages/figma-parser/src/contents/node-mixins/with-image-getters.mixin.ts:12

___

### getImages

▸ **getImages**(`nodes`, `options?`): `AsyncGenerator`\<[[`WithImageGettersMixin`](WithImageGettersMixin.md), `Buffer`], `any`, `unknown`\>

Fetches multiple images for specified nodes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`WithImageGettersMixin`](WithImageGettersMixin.md)[] |
| `options?` | `Partial`\<[`ImageOptions`](ImageOptions.md)\> |

#### Returns

`AsyncGenerator`\<[[`WithImageGettersMixin`](WithImageGettersMixin.md), `Buffer`], `any`, `unknown`\>

**`Example`**

```
for await (const image of canvas.getImages(images, {format: 'svg'})) {
  const [node, img] = image
  console.log( node.name, img.toString('utf-8')
}
```

#### Defined in

packages/figma-parser/src/contents/node-mixins/with-image-getters.mixin.ts:31

___

### getImagesArray

▸ **getImagesArray**(`nodes`, `options?`): `Promise`\<[[`WithImageGettersMixin`](WithImageGettersMixin.md), `Buffer`][]\>

Fetches the images for specified nodes and returns data in form of an array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`WithImageGettersMixin`](WithImageGettersMixin.md)[] |
| `options?` | `Partial`\<[`ImageOptions`](ImageOptions.md)\> |

#### Returns

`Promise`\<[[`WithImageGettersMixin`](WithImageGettersMixin.md), `Buffer`][]\>

#### Defined in

packages/figma-parser/src/contents/node-mixins/with-image-getters.mixin.ts:36
