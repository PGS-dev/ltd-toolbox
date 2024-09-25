[@ltd-toolbox/figma-parser - v0.1.0-alpha.11](README.md) / Exports

# @ltd-toolbox/figma-parser - v0.1.0-alpha.11

## Table of contents

### Classes

- [CollectionsSet](classes/CollectionsSet.md)
- [FigmaLocalVariable](classes/FigmaLocalVariable.md)
- [FigmaLocalVariableCollection](classes/FigmaLocalVariableCollection.md)
- [SingleNode](classes/SingleNode.md)

### Interfaces

- [ColorToken](interfaces/ColorToken.md)
- [CurrentContext](interfaces/CurrentContext.md)
- [DesignTokenBase](interfaces/DesignTokenBase.md)
- [DesignTokensFormatDeep](interfaces/DesignTokensFormatDeep.md)
- [DesignTokensFormatFlat](interfaces/DesignTokensFormatFlat.md)
- [DimensionToken](interfaces/DimensionToken.md)
- [FigmaApiInterface](interfaces/FigmaApiInterface.md)
- [FigmaParserOptions](interfaces/FigmaParserOptions.md)
- [FigmaStyleDefinition](interfaces/FigmaStyleDefinition.md)
- [GetContentsOptions](interfaces/GetContentsOptions.md)
- [GetterNode](interfaces/GetterNode.md)
- [GlobSearchNodes](interfaces/GlobSearchNodes.md)
- [GradientStop](interfaces/GradientStop.md)
- [GradientToken](interfaces/GradientToken.md)
- [ImageOptions](interfaces/ImageOptions.md)
- [NumberToken](interfaces/NumberToken.md)
- [ParsableMixin](interfaces/ParsableMixin.md)
- [ParseTreeOptions](interfaces/ParseTreeOptions.md)
- [PathBreadcrumb](interfaces/PathBreadcrumb.md)
- [ShadowStop](interfaces/ShadowStop.md)
- [ShadowToken](interfaces/ShadowToken.md)
- [TypeStyleTable](interfaces/TypeStyleTable.md)
- [TypographyToken](interfaces/TypographyToken.md)
- [TypographyTokenValue](interfaces/TypographyTokenValue.md)
- [WithImageGettersMixin](interfaces/WithImageGettersMixin.md)
- [WithTextGettersMixin](interfaces/WithTextGettersMixin.md)

### Type Aliases

- [ColorTokenValue](modules.md#colortokenvalue)
- [DesignToken](modules.md#designtoken)
- [DesignTokenType](modules.md#designtokentype)
- [DesignTokensFormat](modules.md#designtokensformat)
- [EffectStyle](modules.md#effectstyle)
- [ErrorDescriptions](modules.md#errordescriptions)
- [ErrorResponse](modules.md#errorresponse)
- [FigmaNodeId](modules.md#figmanodeid)
- [FigmaPAT](modules.md#figmapat)
- [FigmaStylesTransformer](modules.md#figmastylestransformer)
- [FillStyle](modules.md#fillstyle)
- [FullStyle](modules.md#fullstyle)
- [Getter](modules.md#getter)
- [GetterGetFn](modules.md#gettergetfn)
- [GetterTestFn](modules.md#gettertestfn)
- [GetterTreeNode](modules.md#gettertreenode)
- [GradientTokenValue](modules.md#gradienttokenvalue)
- [Last](modules.md#last)
- [OnPurposeAny](modules.md#onpurposeany)
- [Prev](modules.md#prev)
- [RequestErrorFn](modules.md#requesterrorfn)
- [ShadowTokenValue](modules.md#shadowtokenvalue)
- [TODO](modules.md#todo)
- [TextStyle](modules.md#textstyle)

### Variables

- [defaultImageOptions](modules.md#defaultimageoptions)
- [htmlGetters](modules.md#htmlgetters)
- [logger](modules.md#logger)

### Functions

- [DesignTokens](modules.md#designtokens)
- [combineSchema](modules.md#combineschema)
- [deepMerge](modules.md#deepmerge)
- [entriesToDeepObject](modules.md#entriestodeepobject)
- [figmaApi](modules.md#figmaapi)
- [getComponents](modules.md#getcomponents)
- [getContents](modules.md#getcontents)
- [getDocument](modules.md#getdocument)
- [getStyles](modules.md#getstyles)
- [getVariables](modules.md#getvariables)
- [hasMethod](modules.md#hasmethod)
- [hasProperty](modules.md#hasproperty)
- [isBlurEffect](modules.md#isblureffect)
- [isColorToken](modules.md#iscolortoken)
- [isEffectDefinition](modules.md#iseffectdefinition)
- [isEffectStyle](modules.md#iseffectstyle)
- [isEmptyObject](modules.md#isemptyobject)
- [isFillDefinition](modules.md#isfilldefinition)
- [isFillStyle](modules.md#isfillstyle)
- [isGradientToken](modules.md#isgradienttoken)
- [isObject](modules.md#isobject)
- [isShadowEffect](modules.md#isshadoweffect)
- [isShadowToken](modules.md#isshadowtoken)
- [isSingleNode](modules.md#issinglenode)
- [isTextDefinition](modules.md#istextdefinition)
- [isTextStyle](modules.md#istextstyle)
- [isTypographyToken](modules.md#istypographytoken)
- [isVariableAlias](modules.md#isvariablealias)
- [rgbaToHexa](modules.md#rgbatohexa)

## Type Aliases

### ColorTokenValue

Ƭ **ColorTokenValue**: \`#$\{string}\`

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:14

___

### DesignToken

Ƭ **DesignToken**: [`ColorToken`](interfaces/ColorToken.md) \| [`TypographyToken`](interfaces/TypographyToken.md) \| [`ShadowToken`](interfaces/ShadowToken.md) \| [`GradientToken`](interfaces/GradientToken.md) \| [`NumberToken`](interfaces/NumberToken.md) \| [`DimensionToken`](interfaces/DimensionToken.md) \| [`DesignTokenBase`](interfaces/DesignTokenBase.md)

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:67

___

### DesignTokenType

Ƭ **DesignTokenType**: [`DesignToken`](modules.md#designtoken)[``"$type"``]

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:28

___

### DesignTokensFormat

Ƭ **DesignTokensFormat**: [`DesignTokensFormatDeep`](interfaces/DesignTokensFormatDeep.md) \| [`DesignTokensFormatFlat`](interfaces/DesignTokensFormatFlat.md)

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:85

___

### EffectStyle

Ƭ **EffectStyle**: [`FullStyle`](modules.md#fullstyle) & \{ `nodeData`: `VectorNode`  }

#### Defined in

packages/figma-parser/src/styles/types.ts:36

___

### ErrorDescriptions

Ƭ **ErrorDescriptions**: `Record`\<`number`, `string` \| [`RequestErrorFn`](modules.md#requesterrorfn)\>

#### Defined in

packages/figma-parser/src/core/types.ts:43

___

### ErrorResponse

Ƭ **ErrorResponse**: `Partial`\<`ErrorResponsePayloadWithErrMessage` & `ErrorResponsePayloadWithErrorBoolean` & `Response`\>

#### Defined in

packages/figma-parser/src/core/types.ts:39

___

### FigmaNodeId

Ƭ **FigmaNodeId**: \`$\{number}:$\{number}\` \| `string`

#### Defined in

packages/figma-parser/src/document/types.ts:9

___

### FigmaPAT

Ƭ **FigmaPAT**: \`figd\_$\{string}\` \| `string`

Figma Personal Access Token format.

#### Defined in

packages/figma-parser/src/core/types.ts:8

___

### FigmaStylesTransformer

Ƭ **FigmaStylesTransformer**\<`Input`, `Output`\>: (`input`: `Input`) => `Output`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | `any` |
| `Output` | `any` |

#### Type declaration

▸ (`input`): `Output`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |

##### Returns

`Output`

#### Defined in

packages/figma-parser/src/styles/types.ts:21

___

### FillStyle

Ƭ **FillStyle**: [`FullStyle`](modules.md#fullstyle) & \{ `nodeData`: `VectorNode`  }

#### Defined in

packages/figma-parser/src/styles/types.ts:28

___

### FullStyle

Ƭ **FullStyle**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `nodeData` | `Node` |
| `styleMeta` | `PublishedStyle` |

#### Defined in

packages/figma-parser/src/styles/types.ts:23

___

### Getter

Ƭ **Getter**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | [`GetterGetFn`](modules.md#gettergetfn) | Getter function specifies what kind of data needs to be fetched from node and how to get it. It is executed only if node passed getter's `test` predicate. **`Example`** ```ts ``` **`Example`** ```typescript const getter: Getter = { [...] get: (node) => ({ type: 'table-row' }) } @example ```typescript If you wish to parse the children on your own, you can return your own `children`, and parser will not overwrite it. **`Example`** ```ts ``` **`Example`** ```typescript const getter: Getter = { [...] get: (node) => { const listItems: TreeNode[] = getListItems(node) return { type: 'unordered-list', children: listItems } } } @example ```typescript If you don't want to provide any children for the TreeNode, return `children: false`. This property will be removed from final tree. **`Example`** ```ts ``` **`Example`** ```typescript const getter: Getter = { [...] get: (node) => { const listItems: TreeNode[] = getListItems(node) return { type: 'paragraph', data: node.getFormattedContent(), children: false } } } ``` |
| `test` | [`GetterTestFn`](modules.md#gettertestfn) | Test function that determines if get method should be executed on current node. You can use it to perform the getter only on nodes that match certain rules. **`Example`** ```ts ``` **`Example`** ```typescript const getter: Getter = { test: (node) => node.raw.type === 'INSTANCE' && node.raw.name === 'heading 1' [...] } ``` |

#### Defined in

packages/figma-parser/src/contents/types.ts:22

___

### GetterGetFn

Ƭ **GetterGetFn**: \<Node\>(`node`: `Node`) => [`GetterTreeNode`](modules.md#gettertreenode) & \{ `children?`: [`GetterTreeNode`](modules.md#gettertreenode)[] \| ``false``  } \| `Promise`\<[`GetterTreeNode`](modules.md#gettertreenode) & \{ `children?`: [`GetterTreeNode`](modules.md#gettertreenode)[] \| ``false``  }\>

#### Type declaration

▸ \<`Node`\>(`node`): [`GetterTreeNode`](modules.md#gettertreenode) & \{ `children?`: [`GetterTreeNode`](modules.md#gettertreenode)[] \| ``false``  } \| `Promise`\<[`GetterTreeNode`](modules.md#gettertreenode) & \{ `children?`: [`GetterTreeNode`](modules.md#gettertreenode)[] \| ``false``  }\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Node` | extends `ParentInterface` & `AnyNode` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Node` |

##### Returns

[`GetterTreeNode`](modules.md#gettertreenode) & \{ `children?`: [`GetterTreeNode`](modules.md#gettertreenode)[] \| ``false``  } \| `Promise`\<[`GetterTreeNode`](modules.md#gettertreenode) & \{ `children?`: [`GetterTreeNode`](modules.md#gettertreenode)[] \| ``false``  }\>

#### Defined in

packages/figma-parser/src/contents/types.ts:20

___

### GetterTestFn

Ƭ **GetterTestFn**: \<Node\>(`node`: `Node`) => `boolean` \| `Promise`\<`boolean`\>

#### Type declaration

▸ \<`Node`\>(`node`): `boolean` \| `Promise`\<`boolean`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `Node` | extends `ParentInterface` & `AnyNode` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Node` |

##### Returns

`boolean` \| `Promise`\<`boolean`\>

#### Defined in

packages/figma-parser/src/contents/types.ts:19

___

### GetterTreeNode

Ƭ **GetterTreeNode**: [`GetterNode`](interfaces/GetterNode.md) & \{ `children?`: [`GetterNode`](interfaces/GetterNode.md)[]  }

#### Defined in

packages/figma-parser/src/contents/types.ts:17

___

### GradientTokenValue

Ƭ **GradientTokenValue**: [`GradientStop`](interfaces/GradientStop.md)[]

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:26

___

### Last

Ƭ **Last**\<`original`\>: `original`[[`Prev`](modules.md#prev)\<`original` extends \{ `length`: infer L  } ? `L` : `never`\>]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `original` | extends `unknown`[] |

#### Defined in

packages/figma-parser/src/types.ts:2

___

### OnPurposeAny

Ƭ **OnPurposeAny**: `any`

#### Defined in

packages/figma-parser/src/types.ts:5

___

### Prev

Ƭ **Prev**\<`T`\>: [``-1``, ``0``, ``1``, ``2``, ``3``, ``4``, ``5``, ``6``, ``7``, ``8``, ``9``, ``10``][`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` |

#### Defined in

packages/figma-parser/src/types.ts:1

___

### RequestErrorFn

Ƭ **RequestErrorFn**: (`response`: [`ErrorResponse`](modules.md#errorresponse)) => `string`

#### Type declaration

▸ (`response`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`ErrorResponse`](modules.md#errorresponse) |

##### Returns

`string`

#### Defined in

packages/figma-parser/src/core/types.ts:41

___

### ShadowTokenValue

Ƭ **ShadowTokenValue**: [`ShadowStop`](interfaces/ShadowStop.md)[]

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:24

___

### TODO

Ƭ **TODO**: `any`

#### Defined in

packages/figma-parser/src/types.ts:8

___

### TextStyle

Ƭ **TextStyle**: [`FullStyle`](modules.md#fullstyle) & \{ `nodeData`: `TextNode`  }

#### Defined in

packages/figma-parser/src/styles/types.ts:32

## Variables

### defaultImageOptions

• `Const` **defaultImageOptions**: [`ImageOptions`](interfaces/ImageOptions.md)

#### Defined in

packages/figma-parser/src/contents/types.ts:183

___

### htmlGetters

• `Const` **htmlGetters**: [`Getter`](modules.md#getter)[]

#### Defined in

packages/figma-parser/src/contents/html.tree.ts:68

___

### logger

• `Const` **logger**: `ConsolaInstance`

#### Defined in

packages/figma-parser/src/shared/logger.ts:3

## Functions

### DesignTokens

▸ **DesignTokens**(): [`FigmaStylesTransformer`](modules.md#figmastylestransformer)\<[`FigmaStyleDefinition`](interfaces/FigmaStyleDefinition.md)[], [`DesignTokensFormatFlat`](interfaces/DesignTokensFormatFlat.md)\>

#### Returns

[`FigmaStylesTransformer`](modules.md#figmastylestransformer)\<[`FigmaStyleDefinition`](interfaces/FigmaStyleDefinition.md)[], [`DesignTokensFormatFlat`](interfaces/DesignTokensFormatFlat.md)\>

#### Defined in

packages/figma-parser/src/styles/design-tokens.transformer.ts:52

▸ **DesignTokens**(`deep`): [`FigmaStylesTransformer`](modules.md#figmastylestransformer)\<[`FigmaStyleDefinition`](interfaces/FigmaStyleDefinition.md)[], [`DesignTokensFormatDeep`](interfaces/DesignTokensFormatDeep.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep` | ``true`` |

#### Returns

[`FigmaStylesTransformer`](modules.md#figmastylestransformer)\<[`FigmaStyleDefinition`](interfaces/FigmaStyleDefinition.md)[], [`DesignTokensFormatDeep`](interfaces/DesignTokensFormatDeep.md)\>

#### Defined in

packages/figma-parser/src/styles/design-tokens.transformer.ts:53

▸ **DesignTokens**(`deep`): [`FigmaStylesTransformer`](modules.md#figmastylestransformer)\<[`FigmaStyleDefinition`](interfaces/FigmaStyleDefinition.md)[], [`DesignTokensFormatFlat`](interfaces/DesignTokensFormatFlat.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep` | ``false`` |

#### Returns

[`FigmaStylesTransformer`](modules.md#figmastylestransformer)\<[`FigmaStyleDefinition`](interfaces/FigmaStyleDefinition.md)[], [`DesignTokensFormatFlat`](interfaces/DesignTokensFormatFlat.md)\>

#### Defined in

packages/figma-parser/src/styles/design-tokens.transformer.ts:54

▸ **DesignTokens**(`deep?`): [`FigmaStylesTransformer`](modules.md#figmastylestransformer)\<[`FigmaStyleDefinition`](interfaces/FigmaStyleDefinition.md)[], [`DesignTokensFormat`](modules.md#designtokensformat)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep?` | `boolean` |

#### Returns

[`FigmaStylesTransformer`](modules.md#figmastylestransformer)\<[`FigmaStyleDefinition`](interfaces/FigmaStyleDefinition.md)[], [`DesignTokensFormat`](modules.md#designtokensformat)\>

#### Defined in

packages/figma-parser/src/styles/design-tokens.transformer.ts:55

___

### combineSchema

▸ **combineSchema**\<`InputData`\>(`combineSchema`): \{ [k in string \| number \| symbol]: ArrayElement\<InputData[k]\> }[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `InputData` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `combineSchema` | `InputData` |

#### Returns

\{ [k in string \| number \| symbol]: ArrayElement\<InputData[k]\> }[]

#### Defined in

packages/figma-parser/src/shared/combine-schema.util.ts:5

___

### deepMerge

▸ **deepMerge**\<`First`, `Second`\>(`first`, `second`): `MergeDeep`\<`First`, `Second`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `First` | extends `Obj` |
| `Second` | extends `Obj` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `first` | `First` |
| `second` | `Second` |

#### Returns

`MergeDeep`\<`First`, `Second`\>

#### Defined in

packages/figma-parser/src/shared/deep.merge.ts:8

___

### entriesToDeepObject

▸ **entriesToDeepObject**(`input`, `separator?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | [`string`, `object`][] | `undefined` |
| `separator` | `string` | `'.'` |

#### Returns

`Object`

#### Defined in

packages/figma-parser/src/shared/entries-to-deep-object.util.ts:1

___

### figmaApi

▸ **figmaApi**(): `FigmaApi`

#### Returns

`FigmaApi`

#### Defined in

packages/figma-parser/src/core/api.ts:120

▸ **figmaApi**(`token`): `FigmaApi`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`FigmaApi`

#### Defined in

packages/figma-parser/src/core/api.ts:121

▸ **figmaApi**(`options`): `FigmaApi`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<[`FigmaParserOptions`](interfaces/FigmaParserOptions.md)\> |

#### Returns

`FigmaApi`

#### Defined in

packages/figma-parser/src/core/api.ts:122

▸ **figmaApi**(`token`, `options?`): `FigmaApi`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `options?` | `Partial`\<[`FigmaParserOptions`](interfaces/FigmaParserOptions.md)\> |

#### Returns

`FigmaApi`

#### Defined in

packages/figma-parser/src/core/api.ts:123

___

### getComponents

▸ **getComponents**(`apiClient`, `fileId`): `Promise`\<`Components`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiClient` | [`FigmaApiInterface`](interfaces/FigmaApiInterface.md) |
| `fileId` | `string` |

#### Returns

`Promise`\<`Components`\>

#### Defined in

packages/figma-parser/src/components/get-components.ts:25

___

### getContents

▸ **getContents**(`apiClient`, `fileId`, `options?`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiClient` | [`FigmaApiInterface`](interfaces/FigmaApiInterface.md) |
| `fileId` | `string` |
| `options?` | [`GetContentsOptions`](interfaces/GetContentsOptions.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/figma-parser/src/contents/get-contents.ts:11

___

### getDocument

▸ **getDocument**(`api`, `fileId`): `Promise`\<[`SingleNode`](classes/SingleNode.md)\<`DocumentNode`\>\>

Asynchronously retrieves a Figma document by its file ID and wraps it in a SingleNode instance for easy manipulation and access.

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`FigmaApiInterface`](interfaces/FigmaApiInterface.md) |
| `fileId` | `string` |

#### Returns

`Promise`\<[`SingleNode`](classes/SingleNode.md)\<`DocumentNode`\>\>

#### Defined in

packages/figma-parser/src/document/get-document.ts:8

___

### getStyles

▸ **getStyles**(`api`, `fileId`): `Promise`\<`StylesProcessor`\>

Asynchronously fetches and processes styles from a specified Figma file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`FigmaApiInterface`](interfaces/FigmaApiInterface.md) |
| `fileId` | `string` |

#### Returns

`Promise`\<`StylesProcessor`\>

#### Defined in

packages/figma-parser/src/styles/get-styles.ts:24

___

### getVariables

▸ **getVariables**(`api`, `fileId`): `Promise`\<[`CollectionsSet`](classes/CollectionsSet.md)\>

Asynchronously fetches and constructs a set of local variable collections from a Figma file.
This function queries the Figma API for local variables and their collections, then organizes these into a CollectionsSet instance for easy access and manipulation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`FigmaApiInterface`](interfaces/FigmaApiInterface.md) |
| `fileId` | `string` |

#### Returns

`Promise`\<[`CollectionsSet`](classes/CollectionsSet.md)\>

#### Defined in

packages/figma-parser/src/variables/get-variables.ts:31

___

### hasMethod

▸ **hasMethod**\<`O`, `M`\>(`node`, `methodName`): node is O & \{ [P in string]: Function }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Record`\<`string`, `any`\> |
| `M` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `O` |
| `methodName` | `M` |

#### Returns

node is O & \{ [P in string]: Function }

#### Defined in

packages/figma-parser/src/shared/types.ts:3

___

### hasProperty

▸ **hasProperty**\<`O`, `P`\>(`node`, `propertyName`): node is O & \{ [K in string]: O[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Record`\<`string`, `any`\> |
| `P` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `O` |
| `propertyName` | `P` |

#### Returns

node is O & \{ [K in string]: O[K] }

#### Defined in

packages/figma-parser/src/shared/types.ts:7

___

### isBlurEffect

▸ **isBlurEffect**(`effect`): effect is Effect

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | `Effect` |

#### Returns

effect is Effect

#### Defined in

packages/figma-parser/src/styles/types.ts:11

___

### isColorToken

▸ **isColorToken**(`token`): token is ColorToken

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`DesignToken`](modules.md#designtoken) |

#### Returns

token is ColorToken

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:71

___

### isEffectDefinition

▸ **isEffectDefinition**(`definition`): definition is FigmaStyleDefinition & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`FigmaStyleDefinition`](interfaces/FigmaStyleDefinition.md) |

#### Returns

definition is FigmaStyleDefinition & Object

#### Defined in

packages/figma-parser/src/styles/types.ts:17

___

### isEffectStyle

▸ **isEffectStyle**(`node`): node is EffectStyle

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`FullStyle`](modules.md#fullstyle) |

#### Returns

node is EffectStyle

#### Defined in

packages/figma-parser/src/styles/types.ts:7

___

### isEmptyObject

▸ **isEmptyObject**(`value`): value is Record\<string, never\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Record\<string, never\>

#### Defined in

packages/figma-parser/src/shared/is-empty-object.util.ts:1

___

### isFillDefinition

▸ **isFillDefinition**(`definition`): definition is FigmaStyleDefinition & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`FigmaStyleDefinition`](interfaces/FigmaStyleDefinition.md) |

#### Returns

definition is FigmaStyleDefinition & Object

#### Defined in

packages/figma-parser/src/styles/types.ts:13

___

### isFillStyle

▸ **isFillStyle**(`node`): node is FillStyle

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`FullStyle`](modules.md#fullstyle) |

#### Returns

node is FillStyle

#### Defined in

packages/figma-parser/src/styles/types.ts:3

___

### isGradientToken

▸ **isGradientToken**(`token`): token is GradientToken

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`DesignToken`](modules.md#designtoken) |

#### Returns

token is GradientToken

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:75

___

### isObject

▸ **isObject**(`value`): value is object

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is object

#### Defined in

packages/figma-parser/src/shared/is-object.util.ts:1

___

### isShadowEffect

▸ **isShadowEffect**(`effect`): effect is Effect

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | `Effect` |

#### Returns

effect is Effect

#### Defined in

packages/figma-parser/src/styles/types.ts:9

___

### isShadowToken

▸ **isShadowToken**(`token`): token is GradientToken

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`DesignToken`](modules.md#designtoken) |

#### Returns

token is GradientToken

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:69

___

### isSingleNode

▸ **isSingleNode**(`value`): value is Node

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is Node

#### Defined in

packages/figma-parser/src/document/types.ts:11

___

### isTextDefinition

▸ **isTextDefinition**(`definition`): definition is FigmaStyleDefinition & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`FigmaStyleDefinition`](interfaces/FigmaStyleDefinition.md) |

#### Returns

definition is FigmaStyleDefinition & Object

#### Defined in

packages/figma-parser/src/styles/types.ts:15

___

### isTextStyle

▸ **isTextStyle**(`node`): node is TextStyle

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`FullStyle`](modules.md#fullstyle) |

#### Returns

node is TextStyle

#### Defined in

packages/figma-parser/src/styles/types.ts:5

___

### isTypographyToken

▸ **isTypographyToken**(`token`): token is TypographyToken

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`DesignToken`](modules.md#designtoken) |

#### Returns

token is TypographyToken

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:73

___

### isVariableAlias

▸ **isVariableAlias**(`value`): value is VariableAlias

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is VariableAlias

#### Defined in

packages/figma-parser/src/variables/variable.ts:4

___

### rgbaToHexa

▸ **rgbaToHexa**(`rgba`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rgba` | `Object` |
| `rgba.a?` | `number` |
| `rgba.b` | `number` |
| `rgba.g` | `number` |
| `rgba.r` | `number` |

#### Returns

`string`

#### Defined in

packages/figma-parser/src/shared/rgba-to-hex.util.ts:10
