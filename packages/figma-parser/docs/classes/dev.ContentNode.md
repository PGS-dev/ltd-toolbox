[@ltd-toolbox/figma-parser - v0.1.0-alpha.2](../README.md) / [Modules](../modules.md) / [dev](../modules/dev.md) / ContentNode

# Class: ContentNode\<T\>

[dev](../modules/dev.md).ContentNode

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` = `Node` |

## Hierarchy

- `AbstractNode`\<`T`\>

  ↳ **`ContentNode`**

## Table of contents

### Constructors

- [constructor](dev.ContentNode.md#constructor)

### Properties

- [children](dev.ContentNode.md#children)
- [raw](dev.ContentNode.md#raw)

### Methods

- [filterDeep](dev.ContentNode.md#filterdeep)
- [findDeep](dev.ContentNode.md#finddeep)
- [getFormattedContents](dev.ContentNode.md#getformattedcontents)
- [getFormattedText](dev.ContentNode.md#getformattedtext)
- [getRawContents](dev.ContentNode.md#getrawcontents)
- [glob](dev.ContentNode.md#glob)
- [mapDeep](dev.ContentNode.md#mapdeep)
- [parseTree](dev.ContentNode.md#parsetree)
- [table](dev.ContentNode.md#table)
- [text](dev.ContentNode.md#text)
- [toString](dev.ContentNode.md#tostring)
- [walk](dev.ContentNode.md#walk)

## Constructors

### constructor

• **new ContentNode**\<`T`\>(`raw`): [`ContentNode`](dev.ContentNode.md)\<`T`\>

Constructs a SingleNode instance from a Figma Node object or an existing SingleNode instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` = `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `T` |

#### Returns

[`ContentNode`](dev.ContentNode.md)\<`T`\>

#### Inherited from

AbstractNode\<T\>.constructor

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:17

## Properties

### children

• **children**: [`ContentNode`](dev.ContentNode.md)\<`T`\>[] = `[]`

#### Inherited from

AbstractNode.children

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:12

___

### raw

• **raw**: `T`

#### Inherited from

AbstractNode.raw

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:17

## Methods

### filterDeep

▸ **filterDeep**(`predicate`): [`ContentNode`](dev.ContentNode.md)\<`T`\>[]

Filters nodes deep in the tree that match the given predicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: `this`, `path?`: [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[]) => `boolean` |

#### Returns

[`ContentNode`](dev.ContentNode.md)\<`T`\>[]

#### Inherited from

AbstractNode.filterDeep

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:104

___

### findDeep

▸ **findDeep**(`predicate`): ``null`` \| [`ContentNode`](dev.ContentNode.md)\<`T`\>

Finds the first node deep in the tree that matches the given predicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: `this`, `path?`: [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[]) => `boolean` |

#### Returns

``null`` \| [`ContentNode`](dev.ContentNode.md)\<`T`\>

#### Inherited from

AbstractNode.findDeep

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:89

___

### getFormattedContents

▸ **getFormattedContents**(): `string`

Retrieves the text content of the node and its children, formatted according to `getFormattedText()`.
This method organizes text contents in a markdown-ish format, including basic styles and list formatting.

#### Returns

`string`

#### Defined in

packages/figma-parser/src/contents/content-node.ts:91

___

### getFormattedText

▸ **getFormattedText**(): `undefined` \| `string`

Formats the current text node's content to a markdown-like syntax, supporting basic styles such as bold,
italic, and lists. This method is designed for text nodes and will return undefined for non-text nodes.

#### Returns

`undefined` \| `string`

#### Defined in

packages/figma-parser/src/contents/content-node.ts:103

___

### getRawContents

▸ **getRawContents**(): `string`

Retrieves the concatenated raw text content of the node and its children, excluding any formatting.
Useful for extracting plain text from a node tree.

#### Returns

`string`

#### Defined in

packages/figma-parser/src/contents/content-node.ts:79

___

### glob

▸ **glob**(`...paths`): [`GlobSearchNodes`](../interfaces/document.GlobSearchNodes.md)[]

Finds nodes that match given glob patterns.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

[`GlobSearchNodes`](../interfaces/document.GlobSearchNodes.md)[]

#### Inherited from

AbstractNode.glob

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:45

___

### mapDeep

▸ **mapDeep**\<`T`\>(`callback`): `WithChildren`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`node`: `this`) => `undefined` \| `WithChildren`\<`T`\> |

#### Returns

`WithChildren`\<`T`\>

#### Inherited from

AbstractNode.mapDeep

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:130

___

### parseTree

▸ **parseTree**(`options?`): `Promise`\<[`TreeNode`](../interfaces/dev.TreeNode.md)\>

Parses a Figma node tree, extracting content into a structured tree format. This method facilitates the transformation
of Figma layers into document abstract syntax trees (AST), enabling conversion to various formats like Markdown or HTML.
Returned type `TreeNode` is compliant with (unist's Node interface)[https://github.com/syntax-tree/unist?tab=readme-ov-file#node],
therefore it may be processed with these utils.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<[`ParseTreeOptions`](../interfaces/dev.ParseTreeOptions.md)\> |

#### Returns

`Promise`\<[`TreeNode`](../interfaces/dev.TreeNode.md)\>

#### Defined in

packages/figma-parser/src/contents/content-node.ts:37

▸ **parseTree**(`getters?`): `Promise`\<[`TreeNode`](../interfaces/dev.TreeNode.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getters?` | [`Getter`](../modules/dev.md#getter)[] |

#### Returns

`Promise`\<[`TreeNode`](../interfaces/dev.TreeNode.md)\>

#### Defined in

packages/figma-parser/src/contents/content-node.ts:38

▸ **parseTree**(`getters?`, `options?`): `Promise`\<[`TreeNode`](../interfaces/dev.TreeNode.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getters?` | [`Getter`](../modules/dev.md#getter)[] |
| `options?` | `Partial`\<[`ParseTreeOptions`](../interfaces/dev.ParseTreeOptions.md)\> |

#### Returns

`Promise`\<[`TreeNode`](../interfaces/dev.TreeNode.md)\>

#### Defined in

packages/figma-parser/src/contents/content-node.ts:39

___

### table

▸ **table**(): `void`

Prints a table in the console with information about the node, including its children count, id, name, and type.

#### Returns

`void`

#### Inherited from

AbstractNode.table

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:26

___

### text

▸ **text**(): `string`[]

Collects and returns the text from all text nodes deep in the tree.

#### Returns

`string`[]

#### Inherited from

AbstractNode.text

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:118

___

### toString

▸ **toString**(): `string`

Returns the name of the node as a string representation.

#### Returns

`string`

#### Inherited from

AbstractNode.toString

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:38

___

### walk

▸ **walk**(`callback`): `void`

Walks through the node tree, executing a callback for each node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`node`: `this`, `path`: [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[]) => `void` |

#### Returns

`void`

#### Inherited from

AbstractNode.walk

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:66
