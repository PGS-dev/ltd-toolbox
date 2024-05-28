[@ltd-toolbox/figma-parser - v0.1.0-alpha.5](../README.md) / [Modules](../modules.md) / [dev](../modules/dev.md) / CollectionsSet

# Class: CollectionsSet

[dev](../modules/dev.md).CollectionsSet

## Indexable

▪ [i: `number`]: [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)

## Table of contents

### Constructors

- [constructor](dev.CollectionsSet.md#constructor)

### Properties

- [length](dev.CollectionsSet.md#length)

### Methods

- [[iterator]](dev.CollectionsSet.md#[iterator])
- [at](dev.CollectionsSet.md#at)
- [filter](dev.CollectionsSet.md#filter)
- [find](dev.CollectionsSet.md#find)
- [forEach](dev.CollectionsSet.md#foreach)
- [getByName](dev.CollectionsSet.md#getbyname)
- [getVariableById](dev.CollectionsSet.md#getvariablebyid)
- [map](dev.CollectionsSet.md#map)
- [table](dev.CollectionsSet.md#table)

## Constructors

### constructor

• **new CollectionsSet**(`collections`, `variablesRef`): [`CollectionsSet`](dev.CollectionsSet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `collections` | `Object` |
| `variablesRef` | `Object` |

#### Returns

[`CollectionsSet`](dev.CollectionsSet.md)

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:9

## Properties

### length

• **length**: `number` = `0`

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:6

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`\<[`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md), `void`, `unknown`\>

#### Returns

`Generator`\<[`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md), `void`, `unknown`\>

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:125

___

### at

▸ **at**(`index`): [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)

Retrieves the collection at a specified index, supporting positive and negative indexing.
Throws an error if the index is out of bounds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:105

___

### filter

▸ **filter**(`predicate`): [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)[]

Creates a new array with all collections that pass the test implemented by the provided function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`item`: [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md), `index`: `number`, `collection`: [`CollectionsSet`](dev.CollectionsSet.md)) => `boolean` |

#### Returns

[`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)[]

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:76

___

### find

▸ **find**(`predicate`): `undefined` \| [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)

Finds the first collection in the set that satisfies the provided testing function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`item`: [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md), `index`: `number`, `collection`: [`CollectionsSet`](dev.CollectionsSet.md)) => `boolean` |

#### Returns

`undefined` \| [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:64

___

### forEach

▸ **forEach**(`callback`): `void`

Executes a provided function once for each collection in the set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`item`: [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md), `index`: `number`, `collection`: [`CollectionsSet`](dev.CollectionsSet.md)) => `void` |

#### Returns

`void`

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:119

___

### getByName

▸ **getByName**(`name`): `undefined` \| [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)

Retrieves a collection by its name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)

#### Defined in

packages/figma-parser/src/variables/collections-set.ts:44

___

### getVariableById

▸ **getVariableById**(`id`): [`FigmaLocalVariable`](dev.FigmaLocalVariable.md)

Retrieves a variable by its ID from any collection within the set.
Throws an error if no variable with the given ID is found.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`FigmaLocalVariable`](dev.FigmaLocalVariable.md)

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
| `callback` | (`item`: [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md), `index`: `number`, `collection`: [`CollectionsSet`](dev.CollectionsSet.md)) => `T` |

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
