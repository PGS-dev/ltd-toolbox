[@ltd-toolbox/figma-parser - v0.1.0-alpha.11](../README.md) / [Exports](../modules.md) / ParsableMixin

# Interface: ParsableMixin

## Table of contents

### Methods

- [parseTree](ParsableMixin.md#parsetree)

## Methods

### parseTree

▸ **parseTree**(`options?`): `Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

Parses a Figma node tree, extracting content into a structured tree format. This method facilitates the transformation
of Figma layers into document abstract syntax trees (AST), enabling conversion to various formats like Markdown or HTML.
Returned type `TreeNode` is compliant with (unist's Node interface)[https://github.com/syntax-tree/unist?tab=readme-ov-file#node],
therefore it may be processed with these utils.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<[`ParseTreeOptions`](ParseTreeOptions.md)\> |

#### Returns

`Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

**`Example`**

```typescript
import { htmlGetters } from '@ltd-toolbox/figma-parser'

// Please checkout `Getter` type for more information on getters,
const outTree = node.parseTree(htmlGetters)

console.log(outTree)
```

#### Defined in

packages/figma-parser/src/contents/node-mixins/parsable.mixin.ts:45

▸ **parseTree**(`getters?`): `Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getters?` | [`Getter`](../modules.md#getter)[] |

#### Returns

`Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Defined in

packages/figma-parser/src/contents/node-mixins/parsable.mixin.ts:46

▸ **parseTree**(`getters?`, `options?`): `Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getters?` | [`Getter`](../modules.md#getter)[] |
| `options?` | `Partial`\<[`ParseTreeOptions`](ParseTreeOptions.md)\> |

#### Returns

`Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Defined in

packages/figma-parser/src/contents/node-mixins/parsable.mixin.ts:47

▸ **parseTree**(`getters?`, `options?`): `Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getters?` | [`Getter`](../modules.md#getter)[] |
| `options?` | `Partial`\<[`ParseTreeOptions`](ParseTreeOptions.md)\> |

#### Returns

`Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Defined in

packages/figma-parser/src/contents/node-mixins/parsable.mixin.ts:48

▸ **parseTree**(`gettersOrOptions?`, `userOptions?`): `Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gettersOrOptions?` | [`Getter`](../modules.md#getter)[] \| `Partial`\<[`ParseTreeOptions`](ParseTreeOptions.md)\> |
| `userOptions?` | `Partial`\<[`ParseTreeOptions`](ParseTreeOptions.md)\> |

#### Returns

`Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Defined in

packages/figma-parser/src/contents/node-mixins/parsable.mixin.ts:49
