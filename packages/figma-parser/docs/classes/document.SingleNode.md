[@ltd-toolbox/figma-parser - v0.1.0-alpha.1](../README.md) / [Modules](../modules.md) / [document](../modules/document.md) / SingleNode

# Class: SingleNode

[document](../modules/document.md).SingleNode

Represents a single node in a Figma file, providing utilities for navigation, search, and data extraction.

## Table of contents

### Constructors

- [constructor](document.SingleNode.md#constructor)

### Properties

- [children](document.SingleNode.md#children)
- [id](document.SingleNode.md#id)
- [name](document.SingleNode.md#name)
- [type](document.SingleNode.md#type)

### Methods

- [filterDeep](document.SingleNode.md#filterdeep)
- [findDeep](document.SingleNode.md#finddeep)
- [glob](document.SingleNode.md#glob)
- [table](document.SingleNode.md#table)
- [text](document.SingleNode.md#text)
- [toString](document.SingleNode.md#tostring)
- [walk](document.SingleNode.md#walk)

## Constructors

### constructor

• **new SingleNode**(`node`): [`SingleNode`](document.SingleNode.md)

Constructs a SingleNode instance from a Figma Node object or an existing SingleNode instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Node` \| [`SingleNode`](document.SingleNode.md) |

#### Returns

[`SingleNode`](document.SingleNode.md)

#### Defined in

packages/figma-parser/src/document/single-node.ts:20

## Properties

### children

• **children**: [`NodeCollection`](document.NodeCollection.md)

#### Defined in

packages/figma-parser/src/document/single-node.ts:14

___

### id

• **id**: `string` = `''`

#### Defined in

packages/figma-parser/src/document/single-node.ts:12

___

### name

• **name**: `string` = `''`

#### Defined in

packages/figma-parser/src/document/single-node.ts:13

___

### type

• **type**: `string` = `''`

#### Defined in

packages/figma-parser/src/document/single-node.ts:15

## Methods

### filterDeep

▸ **filterDeep**(`predicate`): [`NodeCollection`](document.NodeCollection.md)

Filters nodes deep in the tree that match the given predicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: [`SingleNode`](document.SingleNode.md), `path?`: [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[]) => `boolean` |

#### Returns

[`NodeCollection`](document.NodeCollection.md)

#### Defined in

packages/figma-parser/src/document/single-node.ts:123

___

### findDeep

▸ **findDeep**(`predicate`): ``null`` \| [`SingleNode`](document.SingleNode.md)

Finds the first node deep in the tree that matches the given predicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: [`SingleNode`](document.SingleNode.md), `path?`: [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[]) => `boolean` |

#### Returns

``null`` \| [`SingleNode`](document.SingleNode.md)

#### Defined in

packages/figma-parser/src/document/single-node.ts:94

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

#### Defined in

packages/figma-parser/src/document/single-node.ts:51

___

### table

▸ **table**(): `void`

Prints a table in the console with information about the node, including its children count, id, name, and type.

#### Returns

`void`

#### Defined in

packages/figma-parser/src/document/single-node.ts:32

___

### text

▸ **text**(): `string`[]

Collects and returns the text from all text nodes deep in the tree.

#### Returns

`string`[]

#### Defined in

packages/figma-parser/src/document/single-node.ts:151

___

### toString

▸ **toString**(): `string`

Returns the name of the node as a string representation.

#### Returns

`string`

#### Defined in

packages/figma-parser/src/document/single-node.ts:44

___

### walk

▸ **walk**(`callback`): `void`

Walks through the node tree, executing a callback for each node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`node`: [`SingleNode`](document.SingleNode.md), `path`: [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[]) => `void` |

#### Returns

`void`

#### Defined in

packages/figma-parser/src/document/single-node.ts:72
