[@ltd-toolbox/figma-parser - v0.1.0-alpha.2](../README.md) / [Modules](../modules.md) / [document](../modules/document.md) / SingleNode

# Class: SingleNode\<T\>

[document](../modules/document.md).SingleNode

Represents a single node in a Figma file, providing utilities for navigation, search, and data extraction.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` = `Node` |

## Hierarchy

- `AbstractNode`\<`T`\>

  ↳ **`SingleNode`**

## Table of contents

### Constructors

- [constructor](document.SingleNode.md#constructor)

### Properties

- [children](document.SingleNode.md#children)
- [raw](document.SingleNode.md#raw)

### Methods

- [filterDeep](document.SingleNode.md#filterdeep)
- [findDeep](document.SingleNode.md#finddeep)
- [glob](document.SingleNode.md#glob)
- [mapDeep](document.SingleNode.md#mapdeep)
- [table](document.SingleNode.md#table)
- [text](document.SingleNode.md#text)
- [toString](document.SingleNode.md#tostring)
- [walk](document.SingleNode.md#walk)

## Constructors

### constructor

• **new SingleNode**\<`T`\>(`raw`): [`SingleNode`](document.SingleNode.md)\<`T`\>

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

[`SingleNode`](document.SingleNode.md)\<`T`\>

#### Inherited from

AbstractNode\<T\>.constructor

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:17

## Properties

### children

• **children**: [`SingleNode`](document.SingleNode.md)\<`T`\>[] = `[]`

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

▸ **filterDeep**(`predicate`): [`SingleNode`](document.SingleNode.md)\<`T`\>[]

Filters nodes deep in the tree that match the given predicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: `this`, `path?`: [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[]) => `boolean` |

#### Returns

[`SingleNode`](document.SingleNode.md)\<`T`\>[]

#### Inherited from

AbstractNode.filterDeep

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:104

___

### findDeep

▸ **findDeep**(`predicate`): ``null`` \| [`SingleNode`](document.SingleNode.md)\<`T`\>

Finds the first node deep in the tree that matches the given predicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: `this`, `path?`: [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[]) => `boolean` |

#### Returns

``null`` \| [`SingleNode`](document.SingleNode.md)\<`T`\>

#### Inherited from

AbstractNode.findDeep

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:89

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
