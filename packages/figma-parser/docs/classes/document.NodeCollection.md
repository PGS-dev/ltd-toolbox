[@ltd-toolbox/figma-parser - v0.1.0-alpha.1](../README.md) / [Modules](../modules.md) / [document](../modules/document.md) / NodeCollection

# Class: NodeCollection

[document](../modules/document.md).NodeCollection

## Indexable

▪ [i: `number`]: [`SingleNode`](document.SingleNode.md)

## Table of contents

### Constructors

- [constructor](document.NodeCollection.md#constructor)

### Properties

- [length](document.NodeCollection.md#length)
- [parent](document.NodeCollection.md#parent)

### Methods

- [[iterator]](document.NodeCollection.md#[iterator])
- [at](document.NodeCollection.md#at)
- [filter](document.NodeCollection.md#filter)
- [forEach](document.NodeCollection.md#foreach)
- [get](document.NodeCollection.md#get)
- [id](document.NodeCollection.md#id)
- [map](document.NodeCollection.md#map)
- [name](document.NodeCollection.md#name)
- [table](document.NodeCollection.md#table)
- [toString](document.NodeCollection.md#tostring)
- [walk](document.NodeCollection.md#walk)

## Constructors

### constructor

• **new NodeCollection**(`nodes`, `parent?`): [`NodeCollection`](document.NodeCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `Node`[] \| readonly `Node`[] \| [`SingleNode`](document.SingleNode.md)[] |
| `parent?` | [`SingleNode`](document.SingleNode.md) |

#### Returns

[`NodeCollection`](document.NodeCollection.md)

#### Defined in

packages/figma-parser/src/document/node-collection.ts:12

## Properties

### length

• `Readonly` **length**: `number` = `0`

#### Defined in

packages/figma-parser/src/document/node-collection.ts:8

___

### parent

• `Optional` `Readonly` **parent**: [`SingleNode`](document.SingleNode.md)

#### Defined in

packages/figma-parser/src/document/node-collection.ts:14

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`\<[`SingleNode`](document.SingleNode.md), `void`, `unknown`\>

#### Returns

`Generator`\<[`SingleNode`](document.SingleNode.md), `void`, `unknown`\>

#### Defined in

packages/figma-parser/src/document/node-collection.ts:143

___

### at

▸ **at**(`index`): [`SingleNode`](document.SingleNode.md)

Retrieves the node at a specified index, supporting positive and negative indexing.
Throws an error if the index is out of bounds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`SingleNode`](document.SingleNode.md)

#### Defined in

packages/figma-parser/src/document/node-collection.ts:54

___

### filter

▸ **filter**(`predicate`): [`NodeCollection`](document.NodeCollection.md)

Creates a new NodeCollection with all nodes that pass the test implemented by the provided function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `CallbackFunction`\<`boolean`\> |

#### Returns

[`NodeCollection`](document.NodeCollection.md)

#### Defined in

packages/figma-parser/src/document/node-collection.ts:102

___

### forEach

▸ **forEach**(`callback`): `void`

Executes a provided function once for each node in the collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `CallbackFunction`\<`void`\> |

#### Returns

`void`

#### Defined in

packages/figma-parser/src/document/node-collection.ts:128

___

### get

▸ **get**(`predicate`): `undefined` \| [`SingleNode`](document.SingleNode.md)

Finds the first node that satisfies the provided testing function.
Returns the node if found, undefined otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | `CallbackFunction`\<`boolean`\> |

#### Returns

`undefined` \| [`SingleNode`](document.SingleNode.md)

#### Defined in

packages/figma-parser/src/document/node-collection.ts:69

___

### id

▸ **id**(`id`): `undefined` \| [`SingleNode`](document.SingleNode.md)

Finds a node by its ID. Case-sensitive.
Returns the node if found, undefined otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`SingleNode`](document.SingleNode.md)

#### Defined in

packages/figma-parser/src/document/node-collection.ts:82

___

### map

▸ **map**\<`Output`\>(`callback`): `Output`[]

Creates an array of values by running each node in the collection through the callback function.

#### Type parameters

| Name |
| :------ |
| `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`node`: [`SingleNode`](document.SingleNode.md), `index?`: `number`, `collection?`: [`NodeCollection`](document.NodeCollection.md)) => `Output` |

#### Returns

`Output`[]

#### Defined in

packages/figma-parser/src/document/node-collection.ts:116

___

### name

▸ **name**(`name`, `caseInsensitive?`): `undefined` \| [`SingleNode`](document.SingleNode.md)

Finds a node by its name, with an optional case-insensitive search.
Returns the node if found, undefined otherwise.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `caseInsensitive` | `boolean` | `false` |

#### Returns

`undefined` \| [`SingleNode`](document.SingleNode.md)

#### Defined in

packages/figma-parser/src/document/node-collection.ts:90

___

### table

▸ **table**(): `void`

Prints a table in the console listing the name, ID, and type of each node in the collection.

#### Returns

`void`

#### Defined in

packages/figma-parser/src/document/node-collection.ts:29

___

### toString

▸ **toString**(): `string`

Creates a string representation of the collection by joining the string representations of each node with a comma.

#### Returns

`string`

#### Defined in

packages/figma-parser/src/document/node-collection.ts:42

___

### walk

▸ **walk**(`callback`): `void`

Recursively walks through each node and its children in the collection, executing a callback for each node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`node`: [`SingleNode`](document.SingleNode.md), `path`: [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[]) => `void` |

#### Returns

`void`

#### Defined in

packages/figma-parser/src/document/node-collection.ts:137
