[@ltd-toolbox/figma-parser - v0.1.0-alpha.1](../README.md) / [Modules](../modules.md) / [dev](../modules/dev.md) / FigmaLocalVariableCollection

# Class: FigmaLocalVariableCollection

[dev](../modules/dev.md).FigmaLocalVariableCollection

## Hierarchy

- `Data`

  ↳ **`FigmaLocalVariableCollection`**

## Indexable

▪ [i: `number`]: [`FigmaLocalVariable`](dev.FigmaLocalVariable.md)

## Table of contents

### Constructors

- [constructor](dev.FigmaLocalVariableCollection.md#constructor)

### Properties

- [length](dev.FigmaLocalVariableCollection.md#length)
- [raw](dev.FigmaLocalVariableCollection.md#raw)
- [setRef](dev.FigmaLocalVariableCollection.md#setref)

### Accessors

- [defaultModeId](dev.FigmaLocalVariableCollection.md#defaultmodeid)
- [hiddenFromPublishing](dev.FigmaLocalVariableCollection.md#hiddenfrompublishing)
- [id](dev.FigmaLocalVariableCollection.md#id)
- [key](dev.FigmaLocalVariableCollection.md#key)
- [modes](dev.FigmaLocalVariableCollection.md#modes)
- [name](dev.FigmaLocalVariableCollection.md#name)
- [remote](dev.FigmaLocalVariableCollection.md#remote)

### Methods

- [[iterator]](dev.FigmaLocalVariableCollection.md#[iterator])
- [at](dev.FigmaLocalVariableCollection.md#at)
- [designTokensByMode](dev.FigmaLocalVariableCollection.md#designtokensbymode)
- [filter](dev.FigmaLocalVariableCollection.md#filter)
- [find](dev.FigmaLocalVariableCollection.md#find)
- [forEach](dev.FigmaLocalVariableCollection.md#foreach)
- [getModeId](dev.FigmaLocalVariableCollection.md#getmodeid)
- [map](dev.FigmaLocalVariableCollection.md#map)
- [modeExists](dev.FigmaLocalVariableCollection.md#modeexists)
- [push](dev.FigmaLocalVariableCollection.md#push)
- [table](dev.FigmaLocalVariableCollection.md#table)

## Constructors

### constructor

• **new FigmaLocalVariableCollection**(`raw`, `setRef`, `variables?`): [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `LocalVariableCollection` |
| `setRef` | [`CollectionsSet`](dev.CollectionsSet.md) |
| `variables?` | [`FigmaLocalVariable`](dev.FigmaLocalVariable.md)[] \| `LocalVariable`[] |

#### Returns

[`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)

#### Overrides

Data.constructor

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:71

## Properties

### length

• **length**: `number` = `0`

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:68

___

### raw

• `Readonly` **raw**: `LocalVariableCollection`

#### Inherited from

Data.raw

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:72

___

### setRef

• **setRef**: [`CollectionsSet`](dev.CollectionsSet.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:73

## Accessors

### defaultModeId

• `get` **defaultModeId**(): `string`

#### Returns

`string`

#### Inherited from

Data.defaultModeId

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:54

___

### hiddenFromPublishing

• `get` **hiddenFromPublishing**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Data.hiddenFromPublishing

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:62

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

Data.id

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:42

___

### key

• `get` **key**(): `string`

#### Returns

`string`

#### Inherited from

Data.key

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:46

___

### modes

• `get` **modes**(): \{ `modeId`: `string` ; `name`: `string`  }[]

#### Returns

\{ `modeId`: `string` ; `name`: `string`  }[]

#### Inherited from

Data.modes

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:50

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

Data.name

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:38

___

### remote

• `get` **remote**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Data.remote

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:58

## Methods

### [iterator]

▸ **[iterator]**(): `Generator`\<[`FigmaLocalVariable`](dev.FigmaLocalVariable.md), `void`, `unknown`\>

#### Returns

`Generator`\<[`FigmaLocalVariable`](dev.FigmaLocalVariable.md), `void`, `unknown`\>

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:226

___

### at

▸ **at**(`index`): [`FigmaLocalVariable`](dev.FigmaLocalVariable.md)

Retrieves the variable at a specified index within the collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`FigmaLocalVariable`](dev.FigmaLocalVariable.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:206

___

### designTokensByMode

▸ **designTokensByMode**(`mode`): [`DesignTokensFormatFlat`](../interfaces/dev.DesignTokensFormatFlat.md)

Generates design tokens for a given mode. This method can produce tokens in a flat or deep format, based on user options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `string` |

#### Returns

[`DesignTokensFormatFlat`](../interfaces/dev.DesignTokensFormatFlat.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:129

▸ **designTokensByMode**(`mode`, `userOptions`): [`DesignTokensFormatFlat`](../interfaces/dev.DesignTokensFormatFlat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `string` |
| `userOptions` | `Object` |
| `userOptions.deep` | ``false`` |

#### Returns

[`DesignTokensFormatFlat`](../interfaces/dev.DesignTokensFormatFlat.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:130

▸ **designTokensByMode**(`mode`, `userOptions`): [`DesignTokensFormatDeep`](../interfaces/dev.DesignTokensFormatDeep.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `string` |
| `userOptions` | `Object` |
| `userOptions.deep` | ``true`` |

#### Returns

[`DesignTokensFormatDeep`](../interfaces/dev.DesignTokensFormatDeep.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:131

___

### filter

▸ **filter**(`predicate`): [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)

Creates a new variable collection containing all variables that match the predicate test.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`item`: [`FigmaLocalVariable`](dev.FigmaLocalVariable.md), `index`: `number`, `collection`: [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)) => `boolean` |

#### Returns

[`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:177

___

### find

▸ **find**(`predicate`): `undefined` \| [`FigmaLocalVariable`](dev.FigmaLocalVariable.md)

Finds the first variable that satisfies the provided testing function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`item`: [`FigmaLocalVariable`](dev.FigmaLocalVariable.md), `index`: `number`, `collection`: [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)) => `boolean` |

#### Returns

`undefined` \| [`FigmaLocalVariable`](dev.FigmaLocalVariable.md)

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:165

___

### forEach

▸ **forEach**(`callback`): `void`

Executes a provided function once for each variable in the collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`item`: [`FigmaLocalVariable`](dev.FigmaLocalVariable.md), `index`: `number`, `collection`: [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)) => `void` |

#### Returns

`void`

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:220

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

packages/figma-parser/src/variables/variable-collection.ts:122

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
| `callback` | (`item`: [`FigmaLocalVariable`](dev.FigmaLocalVariable.md), `index`: `number`, `collection`: [`FigmaLocalVariableCollection`](dev.FigmaLocalVariableCollection.md)) => `T` |

#### Returns

`T`[]

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:193

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

packages/figma-parser/src/variables/variable-collection.ts:115

___

### push

▸ **push**(`variable`): `void`

Adds a variable to the collection. If the variable is not already an instance of FigmaLocalVariable, it is converted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variable` | `LocalVariable` \| [`FigmaLocalVariable`](dev.FigmaLocalVariable.md) |

#### Returns

`void`

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:92

___

### table

▸ **table**(): `void`

Displays a table in the console listing properties of each variable in the collection, including name, ID, type, and hiddenFromPublishing status.

#### Returns

`void`

#### Defined in

packages/figma-parser/src/variables/variable-collection.ts:101
