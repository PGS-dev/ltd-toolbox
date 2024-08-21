[@ltd-toolbox/figma-parser - v0.1.0-alpha.8](../README.md) / [Exports](../modules.md) / WithTextGettersMixin

# Interface: WithTextGettersMixin

## Table of contents

### Methods

- [getRecursiveText](WithTextGettersMixin.md#getrecursivetext)
- [getText](WithTextGettersMixin.md#gettext)

## Methods

### getRecursiveText

▸ **getRecursiveText**(`asArray`): `undefined` \| `string` \| `string`[]

Retrieves the concatenated raw text content of the node and its children, excluding any formatting.
Useful for extracting plain text from a node tree.

#### Parameters

| Name | Type |
| :------ | :------ |
| `asArray` | `boolean` |

#### Returns

`undefined` \| `string` \| `string`[]

#### Defined in

packages/figma-parser/src/contents/node-mixins/with-text-getters.mixin.ts:17

___

### getText

▸ **getText**(): `undefined` \| `string`

Gets raw text without any formatting

#### Returns

`undefined` \| `string`

#### Defined in

packages/figma-parser/src/contents/node-mixins/with-text-getters.mixin.ts:11
