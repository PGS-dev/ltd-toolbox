[@ltd-toolbox/figma-parser - v0.1.0-alpha.7](../README.md) / [Exports](../modules.md) / CollectionsSet

# Class: CollectionsSet

## Indexable

▪ [i: `number`]: [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)

## Table of contents

### Constructors

- [constructor](CollectionsSet.md#constructor)

### Properties

- [length](CollectionsSet.md#length)

### Methods

- [[iterator]](CollectionsSet.md#[iterator])
- [at](CollectionsSet.md#at)
- [filter](CollectionsSet.md#filter)
- [find](CollectionsSet.md#find)
- [forEach](CollectionsSet.md#foreach)
- [getByName](CollectionsSet.md#getbyname)
- [getVariableById](CollectionsSet.md#getvariablebyid)
- [map](CollectionsSet.md#map)
- [table](CollectionsSet.md#table)

## Constructors

### constructor

• **new CollectionsSet**(`collections`, `variablesRef`): [`CollectionsSet`](CollectionsSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `collections` | `Object` |
| `variablesRef` | `Object` |

#### Returns

[`CollectionsSet`](CollectionsSet.md)

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:9

## Properties

### length

• **length**: `number` = `0`

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:6

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`\<[`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md), `void`, `unknown`\>

#### Returns

`Generator`\<[`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md), `void`, `unknown`\>

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:125

___

### at

▸ **at**(`index`): [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)

Retrieves the collection at a specified index, supporting positive and negative indexing.
Throws an error if the index is out of bounds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:105

___

### filter

▸ **filter**(`predicate`): [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)[]

Creates a new array with all collections that pass the test implemented by the provided function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`item`: [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md), `index`: `number`, `collection`: [`CollectionsSet`](CollectionsSet.md)) => `boolean` |

#### Returns

[`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)[]

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:76

___

### find

▸ **find**(`predicate`): `undefined` \| [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)

Finds the first collection in the set that satisfies the provided testing function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`item`: [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md), `index`: `number`, `collection`: [`CollectionsSet`](CollectionsSet.md)) => `boolean` |

#### Returns

`undefined` \| [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:64

___

### forEach

▸ **forEach**(`callback`): `void`

Executes a provided function once for each collection in the set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`item`: [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md), `index`: `number`, `collection`: [`CollectionsSet`](CollectionsSet.md)) => `void` |

#### Returns

`void`

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:119

___

### getByName

▸ **getByName**(`name`): `undefined` \| [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)

Retrieves a collection by its name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:44

___

### getVariableById

▸ **getVariableById**(`id`): [`FigmaLocalVariable`](FigmaLocalVariable.md)

Retrieves a variable by its ID from any collection within the set.
Throws an error if no variable with the given ID is found.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`FigmaLocalVariable`](FigmaLocalVariable.md)

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:52

___

### map

▸ **map**\<`T`\>(`callback`): `T`[]

Creates an array of results by calling a provided function on every collection in the set.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`item`: [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md), `index`: `number`, `collection`: [`CollectionsSet`](CollectionsSet.md)) => `T` |

#### Returns

`T`[]

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:91

___

### table

▸ **table**(): `void`

Prints a table in the console listing the name, ID, type, and hiddenFromPublishing status of each collection in the set.

#### Returns

`void`

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:30
