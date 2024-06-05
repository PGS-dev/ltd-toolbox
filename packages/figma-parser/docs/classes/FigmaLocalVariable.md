[@ltd-toolbox/figma-parser - v0.1.0-alpha.7](../README.md) / [Exports](../modules.md) / FigmaLocalVariable

# Class: FigmaLocalVariable

## Hierarchy

- `Data`

  ↳ **`FigmaLocalVariable`**

## Table of contents

### Constructors

- [constructor](FigmaLocalVariable.md#constructor)

### Properties

- [collection](FigmaLocalVariable.md#collection)
- [raw](FigmaLocalVariable.md#raw)

### Accessors

- [codeSyntax](FigmaLocalVariable.md#codesyntax)
- [description](FigmaLocalVariable.md#description)
- [hiddenFromPublishing](FigmaLocalVariable.md#hiddenfrompublishing)
- [id](FigmaLocalVariable.md#id)
- [key](FigmaLocalVariable.md#key)
- [name](FigmaLocalVariable.md#name)
- [remote](FigmaLocalVariable.md#remote)
- [resolvedType](FigmaLocalVariable.md#resolvedtype)
- [scopes](FigmaLocalVariable.md#scopes)
- [valuesByMode](FigmaLocalVariable.md#valuesbymode)
- [variableCollectionId](FigmaLocalVariable.md#variablecollectionid)

### Methods

- [defaultValue](FigmaLocalVariable.md#defaultvalue)
- [hasValueForMode](FigmaLocalVariable.md#hasvalueformode)
- [resolveAliasValueForMode](FigmaLocalVariable.md#resolvealiasvalueformode)
- [resolveValue](FigmaLocalVariable.md#resolvevalue)
- [table](FigmaLocalVariable.md#table)
- [value](FigmaLocalVariable.md#value)
- [valueByMode](FigmaLocalVariable.md#valuebymode)

## Constructors

### constructor

• **new FigmaLocalVariable**(`raw`, `collection`): [`FigmaLocalVariable`](FigmaLocalVariable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `LocalVariable` |
| `collection` | [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md) |

#### Returns

[`FigmaLocalVariable`](FigmaLocalVariable.md)

#### Overrides

Data.constructor

#### Defined in

packages/figma-parser/src/variables/variable.ts:91

## Properties

### collection

• **collection**: [`FigmaLocalVariableCollection`](FigmaLocalVariableCollection.md)

#### Defined in

packages/figma-parser/src/variables/variable.ts:93

___

### raw

• **raw**: `LocalVariable`

#### Inherited from

Data.raw

#### Defined in

packages/figma-parser/src/variables/variable.ts:92

## Accessors

### codeSyntax

• `get` **codeSyntax**(): `VariableCodeSyntax`

Code syntax definitions for this variable. Code syntax allows you to represent variables in code using platform-specific names, and will appear in Dev Mode's code snippets when inspecting elements using the variable.

#### Returns

`VariableCodeSyntax`

#### Inherited from

Data.codeSyntax

#### Defined in

packages/figma-parser/src/variables/variable.ts:85

___

### description

• `get` **description**(): `string`

Description of this variable.

#### Returns

`string`

#### Inherited from

Data.description

#### Defined in

packages/figma-parser/src/variables/variable.ts:61

___

### hiddenFromPublishing

• `get` **hiddenFromPublishing**(): `boolean`

Whether this variable is hidden when publishing the current file as a library.
If the parent VariableCollection is marked as hiddenFromPublishing, then this variable will also be hidden from publishing via the UI. hiddenFromPublishing is independently toggled for a variable and collection. However, both must be true for a given variable to be publishable.

#### Returns

`boolean`

#### Inherited from

Data.hiddenFromPublishing

#### Defined in

packages/figma-parser/src/variables/variable.ts:69

___

### id

• `get` **id**(): `string`

The unique identifier of this variable.

#### Returns

`string`

#### Inherited from

Data.id

#### Defined in

packages/figma-parser/src/variables/variable.ts:12

___

### key

• `get` **key**(): `string`

The key of the variable.

#### Returns

`string`

#### Inherited from

Data.key

#### Defined in

packages/figma-parser/src/variables/variable.ts:26

___

### name

• `get` **name**(): `string`

The name of this variable.

#### Returns

`string`

#### Inherited from

Data.name

#### Defined in

packages/figma-parser/src/variables/variable.ts:19

___

### remote

• `get` **remote**(): `boolean`

Whether the variable is remote.

#### Returns

`boolean`

#### Inherited from

Data.remote

#### Defined in

packages/figma-parser/src/variables/variable.ts:54

___

### resolvedType

• `get` **resolvedType**(): ``"COLOR"`` \| ``"BOOLEAN"`` \| ``"FLOAT"`` \| ``"STRING"``

The resolved type of the variable.

#### Returns

``"COLOR"`` \| ``"BOOLEAN"`` \| ``"FLOAT"`` \| ``"STRING"``

#### Inherited from

Data.resolvedType

#### Defined in

packages/figma-parser/src/variables/variable.ts:40

___

### scopes

• `get` **scopes**(): `VariableScope`[]

An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields.

Setting scopes for a variable does not prevent that variable from being bound in other scopes (for example, via the Plugin API). This only limits the variables that are shown in pickers within the Figma UI.

#### Returns

`VariableScope`[]

#### Inherited from

Data.scopes

#### Defined in

packages/figma-parser/src/variables/variable.ts:78

___

### valuesByMode

• `get` **valuesByMode**(): `Record`\<`string`, `string` \| `number` \| `boolean` \| `VariableAlias` \| `RGBA`\>

The values for each mode of this variable.

#### Returns

`Record`\<`string`, `string` \| `number` \| `boolean` \| `VariableAlias` \| `RGBA`\>

#### Inherited from

Data.valuesByMode

#### Defined in

packages/figma-parser/src/variables/variable.ts:47

___

### variableCollectionId

• `get` **variableCollectionId**(): `string`

The id of the variable collection that contains this variable.

#### Returns

`string`

#### Inherited from

Data.variableCollectionId

#### Defined in

packages/figma-parser/src/variables/variable.ts:33

## Methods

### defaultValue

▸ **defaultValue**(): `string` \| `number` \| `boolean` \| `VariableAlias` \| `RGBA`

Gets the default value of the variable, which is the value for the collection's default mode.

#### Returns

`string` \| `number` \| `boolean` \| `VariableAlias` \| `RGBA`

#### Defined in

packages/figma-parser/src/variables/variable.ts:128

___

### hasValueForMode

▸ **hasValueForMode**(`name`): `boolean`

Determines if a specific mode has a defined value for this variable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

packages/figma-parser/src/variables/variable.ts:108

___

### resolveAliasValueForMode

▸ **resolveAliasValueForMode**(`alias`, `name`): `string` \| `number` \| `boolean` \| `RGBA`

Resolves the final value of an alias for a given mode, recursively resolving nested aliases if necessary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `alias` | `VariableAlias` |
| `name` | `string` |

#### Returns

`string` \| `number` \| `boolean` \| `RGBA`

#### Defined in

packages/figma-parser/src/variables/variable.ts:135

___

### resolveValue

▸ **resolveValue**(`name`): `string` \| `number` \| `boolean` \| `RGBA`

Resolves the value of the variable for a given mode, taking into account potential aliases.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string` \| `number` \| `boolean` \| `RGBA`

#### Defined in

packages/figma-parser/src/variables/variable.ts:148

___

### table

▸ **table**(): `void`

Prints a table in the console that lists the properties of this variable, including id, name, key, and others.

#### Returns

`void`

#### Defined in

packages/figma-parser/src/variables/variable.ts:101

___

### value

▸ **value**(`name`): `string` \| `number` \| `boolean` \| `RGBA`

Retrieves the value of the variable for a specified mode, formatting it as a reference string if it's an alias.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string` \| `number` \| `boolean` \| `RGBA`

#### Defined in

packages/figma-parser/src/variables/variable.ts:159

___

### valueByMode

▸ **valueByMode**(`modeName?`): `string` \| `number` \| `boolean` \| `VariableAlias` \| `RGBA`

Retrieves the value of the variable for a specified mode. If no mode is specified, it returns the default value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `modeName?` | `string` |

#### Returns

`string` \| `number` \| `boolean` \| `VariableAlias` \| `RGBA`

#### Defined in

packages/figma-parser/src/variables/variable.ts:115
