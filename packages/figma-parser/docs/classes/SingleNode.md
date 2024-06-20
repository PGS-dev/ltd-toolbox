[@ltd-toolbox/figma-parser - v0.1.0-alpha.7](../README.md) / [Exports](../modules.md) / SingleNode

# Class: SingleNode\<T\>

Represents a single node in a Figma file, providing utilities for navigation, search, and data extraction.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` = `Node` |

## Table of contents

### Constructors

- [constructor](SingleNode.md#constructor)

### Properties

- [children](SingleNode.md#children)
- [parent](SingleNode.md#parent)
- [raw](SingleNode.md#raw)

### Methods

- [table](SingleNode.md#table)
- [toString](SingleNode.md#tostring)

## Constructors

### constructor

• **new SingleNode**\<`T`\>(`raw`, `parent?`): [`SingleNode`](SingleNode.md)\<`T`\>

Constructs a SingleNode instance from a Figma Node object or an existing SingleNode instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` = `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `T` |
| `parent?` | [`SingleNode`](SingleNode.md)\<`Node`\> |

#### Returns

[`SingleNode`](SingleNode.md)\<`T`\>

#### Defined in

packages/figma-parser/src/document/single-node.ts:13

## Properties

### children

• **children**: [`SingleNode`](SingleNode.md)\<`Node`\>[] = `[]`

#### Defined in

packages/figma-parser/src/document/single-node.ts:8

___

### parent

• `Optional` **parent**: [`SingleNode`](SingleNode.md)\<`Node`\>

#### Defined in

packages/figma-parser/src/document/single-node.ts:15

___

### raw

• **raw**: `T`

#### Defined in

packages/figma-parser/src/document/single-node.ts:14

## Methods

### table

▸ **table**(): `void`

Prints a table in the console with information about the node, including its children count, id, name, and type.

#### Returns

`void`

#### Defined in

packages/figma-parser/src/document/single-node.ts:25

___

### toString

▸ **toString**(): `string`

Returns the name of the node as a string representation.

#### Returns

`string`

#### Defined in

packages/figma-parser/src/document/single-node.ts:37
