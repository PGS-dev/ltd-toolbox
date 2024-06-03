[@ltd-toolbox/figma-parser - v0.1.0-alpha.7](../README.md) / [Exports](../modules.md) / FigmaLocalVariableCollection

# Class: FigmaLocalVariableCollection

## Hierarchy

- `Data`

  ↳ **`FigmaLocalVariableCollection`**

## Indexable

▪ [i: `number`]: [`FigmaLocalVariable`](FigmaLocalVariable.md)

## Table of contents

### Constructors

- [constructor](FigmaLocalVariableCollection.md#constructor)

### Properties

- [length](FigmaLocalVariableCollection.md#length)
- [raw](FigmaLocalVariableCollection.md#raw)
- [setRef](FigmaLocalVariableCollection.md#setref)

### Accessors

- [defaultModeId](FigmaLocalVariableCollection.md#defaultmodeid)
- [hiddenFromPublishing](FigmaLocalVariableCollection.md#hiddenfrompublishing)
- [id](FigmaLocalVariableCollection.md#id)
- [key](FigmaLocalVariableCollection.md#key)
- [modes](FigmaLocalVariableCollection.md#modes)
- [name](FigmaLocalVariableCollection.md#name)
- [remote](FigmaLocalVariableCollection.md#remote)

### Methods

- [[iterator]](FigmaLocalVariableCollection.md#[iterator])
- [at](FigmaLocalVariableCollection.md#at)
- [designTokensByMode](FigmaLocalVariableCollection.md#designtokensbymode)
- [filter](FigmaLocalVariableCollection.md#filter)
- [find](FigmaLocalVariableCollection.md#find)
- [forEach](FigmaLocalVariableCollection.md#foreach)
- [getModeId](FigmaLocalVariableCollection.md#getmodeid)
- [map](FigmaLocalVariableCollection.md#map)
- [modeExists](FigmaLocalVariableCollection.md#modeexists)
- [push](FigmaLocalVariableCollection.md#push)
- [table](FigmaLocalVariableCollection.md#table)

## Constructors

### constructor

• **new FigmaLocalVariableCollection**(`raw`, `setRef`, `variables?`): [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | [`LocalVariableCollection`](../modules.md#localvariablecollection) |
| `setRef` | [`CollectionsSet`](CollectionsSet.md) |
| `variables?` | [`FigmaLocalVariable`](FigmaLocalVariable.md)[] \| [`LocalVariable`](../modules.md#localvariable)[] |

#### Returns

[`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)

#### Overrides

Data.constructor

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:72

## Properties

### length

• **length**: `number` = `0`

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:69

___

### raw

• `Readonly` **raw**: [`LocalVariableCollection`](../modules.md#localvariablecollection)

#### Inherited from

Data.raw

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:73

___

### setRef

• **setRef**: [`CollectionsSet`](CollectionsSet.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:74

## Accessors

### defaultModeId

• `get` **defaultModeId**(): `string`

#### Returns

`string`

#### Inherited from

Data.defaultModeId

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:55

___

### hiddenFromPublishing

• `get` **hiddenFromPublishing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Data.hiddenFromPublishing

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:63

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

Data.id

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:43

___

### key

• `get` **key**(): `string`

#### Returns

`string`

#### Inherited from

Data.key

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:47

___

### modes

• `get` **modes**(): \{ `modeId`: `string` ; `name`: `string`  }[]

#### Returns

\{ `modeId`: `string` ; `name`: `string`  }[]

#### Inherited from

Data.modes

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:51

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

Data.name

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:39

___

### remote

• `get` **remote**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Data.remote

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:59

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`\<[`FigmaLocalVariable`](FigmaLocalVariable.md), `void`, `unknown`\>

#### Returns

`Generator`\<[`FigmaLocalVariable`](FigmaLocalVariable.md), `void`, `unknown`\>

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:227

___

### at

▸ **at**(`index`): [`FigmaLocalVariable`](FigmaLocalVariable.md)

Retrieves the variable at a specified index within the collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`FigmaLocalVariable`](FigmaLocalVariable.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:207

___

### designTokensByMode

▸ **designTokensByMode**(`mode`): [`DesignTokensFormatFlat`](../interfaces/DesignTokensFormatFlat.md)

Generates design tokens for a given mode. This method can produce tokens in a flat or deep format, based on user options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `string` |

#### Returns

[`DesignTokensFormatFlat`](../interfaces/DesignTokensFormatFlat.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:130

▸ **designTokensByMode**(`mode`, `userOptions`): [`DesignTokensFormatFlat`](../interfaces/DesignTokensFormatFlat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `string` |
| `userOptions` | `Object` |
| `userOptions.deep` | ``false`` |

#### Returns

[`DesignTokensFormatFlat`](../interfaces/DesignTokensFormatFlat.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:131

▸ **designTokensByMode**(`mode`, `userOptions`): [`DesignTokensFormatDeep`](../interfaces/DesignTokensFormatDeep.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `string` |
| `userOptions` | `Object` |
| `userOptions.deep` | ``true`` |

#### Returns

[`DesignTokensFormatDeep`](../interfaces/DesignTokensFormatDeep.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:132

___

### filter

▸ **filter**(`predicate`): [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)

Creates a new variable collection containing all variables that match the predicate test.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`item`: [`FigmaLocalVariable`](FigmaLocalVariable.md), `index`: `number`, `collection`: [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)) => `boolean` |

#### Returns

[`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:178

___

### find

▸ **find**(`predicate`): `undefined` \| [`FigmaLocalVariable`](FigmaLocalVariable.md)

Finds the first variable that satisfies the provided testing function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`item`: [`FigmaLocalVariable`](FigmaLocalVariable.md), `index`: `number`, `collection`: [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)) => `boolean` |

#### Returns

`undefined` \| [`FigmaLocalVariable`](FigmaLocalVariable.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:166

___

### forEach

▸ **forEach**(`callback`): `void`

Executes a provided function once for each variable in the collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`item`: [`FigmaLocalVariable`](FigmaLocalVariable.md), `index`: `number`, `collection`: [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)) => `void` |

#### Returns

`void`

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:221

___

### getModeId

▸ **getModeId**(`name?`): `string`

Retrieves the mode ID for a given mode name. If the name is not found, returns the default mode ID.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Returns

`string`

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:123

___

### map

▸ **map**\<`T`\>(`callback`): `T`[]

Transforms the collection of variables into an array of a specified type based on a transformation function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`item`: [`FigmaLocalVariable`](FigmaLocalVariable.md), `index`: `number`, `collection`: [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)) => `T` |

#### Returns

`T`[]

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:194

___

### modeExists

▸ **modeExists**(`modeName`): `boolean`

Checks if a mode by the given name exists within the collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `modeName` | `string` |

#### Returns

`boolean`

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:116

___

### push

▸ **push**(`variable`): `void`

Adds a variable to the collection. If the variable is not already an instance of FigmaLocalVariable, it is converted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | [`LocalVariable`](../modules.md#localvariable) \| [`FigmaLocalVariable`](FigmaLocalVariable.md) |

#### Returns

`void`

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:93

___

### table

▸ **table**(): `void`

Displays a table in the console listing properties of each variable in the collection, including name, ID, type, and hiddenFromPublishing status.

#### Returns

`void`

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:102
