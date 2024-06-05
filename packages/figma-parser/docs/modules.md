[@ltd-toolbox/figma-parser - v0.1.0-alpha.7](README.md) / Exports

# @ltd-toolbox/figma-parser - v0.1.0-alpha.7

## Table of contents

### Classes

- [CollectionsSet](classes/CollectionsSet.md)
- [ContentNode](classes/ContentNode.md)
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
- [GetterNode](interfaces/GetterNode.md)
- [GlobSearchNodes](interfaces/GlobSearchNodes.md)
- [GradientStop](interfaces/GradientStop.md)
- [GradientToken](interfaces/GradientToken.md)
- [NumberToken](interfaces/NumberToken.md)
- [ParseTreeOptions](interfaces/ParseTreeOptions.md)
- [PathBreadcrumb](interfaces/PathBreadcrumb.md)
- [ShadowStop](interfaces/ShadowStop.md)
- [ShadowToken](interfaces/ShadowToken.md)
- [TypeStyleTable](interfaces/TypeStyleTable.md)
- [TypographyToken](interfaces/TypographyToken.md)
- [TypographyTokenValue](interfaces/TypographyTokenValue.md)

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
- [WalkPredicate](modules.md#walkpredicate)

### Variables

- [htmlGetters](modules.md#htmlgetters)

### Functions

- [DesignTokens](modules.md#designtokens)
- [combineSchema](modules.md#combineschema)
- [createLogger](modules.md#createlogger)
- [createModuleLogger](modules.md#createmodulelogger)
- [deepMerge](modules.md#deepmerge)
- [entriesToDeepObject](modules.md#entriestodeepobject)
- [figmaApi](modules.md#figmaapi)
- [getContents](modules.md#getcontents)
- [getDocument](modules.md#getdocument)
- [getStyles](modules.md#getstyles)
- [getVariables](modules.md#getvariables)
- [hasChildren](modules.md#haschildren)
- [isBlurEffect](modules.md#isblureffect)
- [isBooleanOperationNode](modules.md#isbooleanoperationnode)
- [isCanvasNode](modules.md#iscanvasnode)
- [isColorToken](modules.md#iscolortoken)
- [isComponentNode](modules.md#iscomponentnode)
- [isComponentSetNode](modules.md#iscomponentsetnode)
- [isConnectorNode](modules.md#isconnectornode)
- [isDocumentNode](modules.md#isdocumentnode)
- [isEffectDefinition](modules.md#iseffectdefinition)
- [isEffectStyle](modules.md#iseffectstyle)
- [isEllipseNode](modules.md#isellipsenode)
- [isEmbedNode](modules.md#isembednode)
- [isEmptyObject](modules.md#isemptyobject)
- [isFauxNode](modules.md#isfauxnode)
- [isFillDefinition](modules.md#isfilldefinition)
- [isFillStyle](modules.md#isfillstyle)
- [isFrameNode](modules.md#isframenode)
- [isGradientToken](modules.md#isgradienttoken)
- [isGroupNode](modules.md#isgroupnode)
- [isInstanceNode](modules.md#isinstancenode)
- [isLineNode](modules.md#islinenode)
- [isLinkUnfurlNode](modules.md#islinkunfurlnode)
- [isObject](modules.md#isobject)
- [isRectangleNode](modules.md#isrectanglenode)
- [isRegularPolygonNode](modules.md#isregularpolygonnode)
- [isSectionNode](modules.md#issectionnode)
- [isShadowEffect](modules.md#isshadoweffect)
- [isShadowToken](modules.md#isshadowtoken)
- [isShapeWithTextNode](modules.md#isshapewithtextnode)
- [isSingleNode](modules.md#issinglenode)
- [isSliceNode](modules.md#isslicenode)
- [isStarNode](modules.md#isstarnode)
- [isStickyNode](modules.md#isstickynode)
- [isTableCellNode](modules.md#istablecellnode)
- [isTableNode](modules.md#istablenode)
- [isTextDefinition](modules.md#istextdefinition)
- [isTextNode](modules.md#istextnode)
- [isTextStyle](modules.md#istextstyle)
- [isTypographyToken](modules.md#istypographytoken)
- [isVariableAlias](modules.md#isvariablealias)
- [isVectorNode](modules.md#isvectornode)
- [isWashiTapeNode](modules.md#iswashitapenode)
- [isWidgetNode](modules.md#iswidgetnode)
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

packages/figma-parser/src/core/types.ts:30

___

### ErrorResponse

Ƭ **ErrorResponse**: `Partial`\<`ErrorResponsePayloadWithErrMessage` & `ErrorResponsePayloadWithErrorBoolean` & `Response`\>

#### Defined in

packages/figma-parser/src/core/types.ts:26

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

packages/figma-parser/src/core/types.ts:6

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
| `get` | [`GetterGetFn`](modules.md#gettergetfn) | Getter function that gets the proper contents for current node if it passed the `test`. **`Example`** ```typescript const getter: Getter = { [...] get: (node: ContentNode) => ({ type: 'table-row' }) } ``` If you wish to parse the children on your own, you can return your own `children`, and parser will not overwrite it. **`Example`** ```typescript const getter: Getter = { [...] get: (node: ContentNode) => { const listItems: TreeNode[] = getListItems(node) return { type: 'unordered-list', children: listItems } } } ``` If you don't want to provide any children for the TreeNode, return `children: false`. This property will be removed from final tree. **`Example`** ```typescript const getter: Getter = { [...] get: (node: ContentNode) => { const listItems: TreeNode[] = getListItems(node) return { type: 'paragraph', data: node.getFormattedContent(), children: false } } } ``` |
| `test` | [`GetterTestFn`](modules.md#gettertestfn) | Test function that determines if get method should be executed on current node. You can use it to perform the getter only on nodes that match certain rules. **`Example`** ```typescript const getter: Getter = { test: (node: ContentNode) => node.raw.type === 'INSTANCE' && node.raw.name === 'heading 1' [...] } ``` |

#### Defined in

packages/figma-parser/src/contents/types.ts:20

___

### GetterGetFn

Ƭ **GetterGetFn**: (`node`: [`ContentNode`](classes/ContentNode.md)) => [`GetterTreeNode`](modules.md#gettertreenode) & \{ `children?`: [`GetterTreeNode`](modules.md#gettertreenode)[] \| ``false``  }

#### Type declaration

▸ (`node`): [`GetterTreeNode`](modules.md#gettertreenode) & \{ `children?`: [`GetterTreeNode`](modules.md#gettertreenode)[] \| ``false``  }

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`ContentNode`](classes/ContentNode.md) |

##### Returns

[`GetterTreeNode`](modules.md#gettertreenode) & \{ `children?`: [`GetterTreeNode`](modules.md#gettertreenode)[] \| ``false``  }

#### Defined in

packages/figma-parser/src/contents/types.ts:18

___

### GetterTestFn

Ƭ **GetterTestFn**: (`node`: [`ContentNode`](classes/ContentNode.md)) => `boolean`

#### Type declaration

▸ (`node`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`ContentNode`](classes/ContentNode.md) |

##### Returns

`boolean`

#### Defined in

packages/figma-parser/src/contents/types.ts:17

___

### GetterTreeNode

Ƭ **GetterTreeNode**: [`GetterNode`](interfaces/GetterNode.md) & \{ `children?`: [`GetterNode`](interfaces/GetterNode.md)[]  }

#### Defined in

packages/figma-parser/src/contents/types.ts:15

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

packages/figma-parser/src/core/types.ts:28

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

___

### WalkPredicate

Ƭ **WalkPredicate**: (`node`: [`SingleNode`](classes/SingleNode.md), `path`: [`PathBreadcrumb`](interfaces/PathBreadcrumb.md)[]) => `void`

#### Type declaration

▸ (`node`, `path`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](classes/SingleNode.md) |
| `path` | [`PathBreadcrumb`](interfaces/PathBreadcrumb.md)[] |

##### Returns

`void`

#### Defined in

packages/figma-parser/src/document/single-node.ts:5

## Variables

### htmlGetters

• `Const` **htmlGetters**: [`Getter`](modules.md#getter)[]

#### Defined in

packages/figma-parser/src/contents/html.tree.ts:67

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

### createLogger

▸ **createLogger**(`options?`): `ConsolaInstance`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`ConsolaOptions`\> |

#### Returns

`ConsolaInstance`

#### Defined in

packages/figma-parser/src/shared/logger.ts:4

___

### createModuleLogger

▸ **createModuleLogger**(`moduleName`, `options?`): `ConsolaInstance`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |
| `options?` | `Partial`\<`ConsolaOptions`\> |

#### Returns

`ConsolaInstance`

#### Defined in

packages/figma-parser/src/shared/logger.ts:13

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

packages/figma-parser/src/core/api.ts:126

▸ **figmaApi**(`token`): `FigmaApi`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`FigmaApi`

#### Defined in

packages/figma-parser/src/core/api.ts:127

▸ **figmaApi**(`options`): `FigmaApi`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<[`FigmaParserOptions`](interfaces/FigmaParserOptions.md)\> |

#### Returns

`FigmaApi`

#### Defined in

packages/figma-parser/src/core/api.ts:128

▸ **figmaApi**(`token`, `options?`): `FigmaApi`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `options?` | `Partial`\<[`FigmaParserOptions`](interfaces/FigmaParserOptions.md)\> |

#### Returns

`FigmaApi`

#### Defined in

packages/figma-parser/src/core/api.ts:129

___

### getContents

▸ **getContents**(`api`, `fileId`): `Promise`\<[`ContentNode`](classes/ContentNode.md)\<`DocumentNode`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`FigmaApiInterface`](interfaces/FigmaApiInterface.md) |
| `fileId` | `string` |

#### Returns

`Promise`\<[`ContentNode`](classes/ContentNode.md)\<`DocumentNode`\>\>

#### Defined in

packages/figma-parser/src/contents/get-contents.ts:10

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

packages/figma-parser/src/styles/get-styles.ts:23

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

### hasChildren

▸ **hasChildren**\<`T`\>(`node`): node is NodeBase\<Node\> & Object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<Node\> & Object

#### Defined in

packages/figma-parser/src/shared/types.ts:60

▸ **hasChildren**(`node`): node is NodeBase\<Node\> & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<Node\> & Object

#### Defined in

packages/figma-parser/src/shared/types.ts:61

▸ **hasChildren**(`node`): node is Node & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Node` |

#### Returns

node is Node & Object

#### Defined in

packages/figma-parser/src/shared/types.ts:62

▸ **hasChildren**(`node`): node is ParentNode\<Object\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `ParentNode`\<{}\> |

#### Returns

node is ParentNode\<Object\>

#### Defined in

packages/figma-parser/src/shared/types.ts:63

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

### isBooleanOperationNode

▸ **isBooleanOperationNode**(`node`): node is NodeBase\<BooleanOperationNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<BooleanOperationNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:33

___

### isCanvasNode

▸ **isCanvasNode**(`node`): node is NodeBase\<CanvasNode\> & Object & IsLayerTrait & HasExportSettingsTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<CanvasNode\> & Object & IsLayerTrait & HasExportSettingsTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:58

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

### isComponentNode

▸ **isComponentNode**(`node`): node is NodeBase\<ComponentNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & HasFramePropertiesTrait & CornerTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & IndividualStrokesTrait & DevStatusTrait & ComponentPropertiesTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<ComponentNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & HasFramePropertiesTrait & CornerTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & IndividualStrokesTrait & DevStatusTrait & ComponentPropertiesTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:34

___

### isComponentSetNode

▸ **isComponentSetNode**(`node`): node is NodeBase\<ComponentSetNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & HasFramePropertiesTrait & CornerTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & IndividualStrokesTrait & DevStatusTrait & ComponentPropertiesTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<ComponentSetNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & HasFramePropertiesTrait & CornerTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & IndividualStrokesTrait & DevStatusTrait & ComponentPropertiesTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:35

___

### isConnectorNode

▸ **isConnectorNode**(`node`): node is NodeBase\<ConnectorNode\> & Object & IsLayerTrait & HasLayoutTrait & HasBlendModeAndOpacityTrait & HasEffectsTrait & HasExportSettingsTrait & HasTextSublayerTrait & MinimalStrokesTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<ConnectorNode\> & Object & IsLayerTrait & HasLayoutTrait & HasBlendModeAndOpacityTrait & HasEffectsTrait & HasExportSettingsTrait & HasTextSublayerTrait & MinimalStrokesTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:36

___

### isDocumentNode

▸ **isDocumentNode**(`node`): node is NodeBase\<DocumentNode\> & Object & IsLayerTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<DocumentNode\> & Object & IsLayerTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:57

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

### isEllipseNode

▸ **isEllipseNode**(`node`): node is NodeBase\<EllipseNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<EllipseNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:37

___

### isEmbedNode

▸ **isEmbedNode**(`node`): node is NodeBase\<EmbedNode\> & Object & IsLayerTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<EmbedNode\> & Object & IsLayerTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:38

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

### isFauxNode

▸ **isFauxNode**(`node`): node is GetterNode & Object & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`GetterTreeNode`](modules.md#gettertreenode) |

#### Returns

node is GetterNode & Object & Object

#### Defined in

packages/figma-parser/src/contents/content-node.ts:18

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

### isFrameNode

▸ **isFrameNode**(`node`): node is NodeBase\<FrameNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & HasFramePropertiesTrait & CornerTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & IndividualStrokesTrait & DevStatusTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<FrameNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & HasFramePropertiesTrait & CornerTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & IndividualStrokesTrait & DevStatusTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:39

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

### isGroupNode

▸ **isGroupNode**(`node`): node is NodeBase\<GroupNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & HasFramePropertiesTrait & CornerTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & IndividualStrokesTrait & DevStatusTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<GroupNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & HasFramePropertiesTrait & CornerTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & IndividualStrokesTrait & DevStatusTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:40

___

### isInstanceNode

▸ **isInstanceNode**(`node`): node is NodeBase\<InstanceNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & HasFramePropertiesTrait & CornerTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & IndividualStrokesTrait & DevStatusTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<InstanceNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasChildrenTrait & HasLayoutTrait & HasFramePropertiesTrait & CornerTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & IndividualStrokesTrait & DevStatusTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:41

___

### isLineNode

▸ **isLineNode**(`node`): node is NodeBase\<LineNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<LineNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:42

___

### isLinkUnfurlNode

▸ **isLinkUnfurlNode**(`node`): node is NodeBase\<LinkUnfurlNode\> & Object & IsLayerTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<LinkUnfurlNode\> & Object & IsLayerTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:43

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

### isRectangleNode

▸ **isRectangleNode**(`node`): node is NodeBase\<RectangleNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & CornerTrait & IndividualStrokesTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<RectangleNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & CornerTrait & IndividualStrokesTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:44

___

### isRegularPolygonNode

▸ **isRegularPolygonNode**(`node`): node is NodeBase\<RegularPolygonNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & CornerTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<RegularPolygonNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & CornerTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:45

___

### isSectionNode

▸ **isSectionNode**(`node`): node is NodeBase\<SectionNode\> & Object & IsLayerTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasChildrenTrait & HasLayoutTrait & DevStatusTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<SectionNode\> & Object & IsLayerTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasChildrenTrait & HasLayoutTrait & DevStatusTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:46

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

### isShapeWithTextNode

▸ **isShapeWithTextNode**(`node`): node is NodeBase\<ShapeWithTextNode\> & Object & IsLayerTrait & HasLayoutTrait & HasBlendModeAndOpacityTrait & MinimalFillsTrait & HasMaskTrait & HasEffectsTrait & HasExportSettingsTrait & HasTextSublayerTrait & CornerTrait & MinimalStrokesTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<ShapeWithTextNode\> & Object & IsLayerTrait & HasLayoutTrait & HasBlendModeAndOpacityTrait & MinimalFillsTrait & HasMaskTrait & HasEffectsTrait & HasExportSettingsTrait & HasTextSublayerTrait & CornerTrait & MinimalStrokesTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:47

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

### isSliceNode

▸ **isSliceNode**(`node`): node is NodeBase\<SliceNode\> & Object & IsLayerTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<SliceNode\> & Object & IsLayerTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:48

___

### isStarNode

▸ **isStarNode**(`node`): node is NodeBase\<StarNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & CornerTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<StarNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & CornerTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:49

___

### isStickyNode

▸ **isStickyNode**(`node`): node is NodeBase\<StickyNode\> & Object & IsLayerTrait & HasLayoutTrait & HasBlendModeAndOpacityTrait & MinimalFillsTrait & HasMaskTrait & HasEffectsTrait & HasExportSettingsTrait & HasTextSublayerTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<StickyNode\> & Object & IsLayerTrait & HasLayoutTrait & HasBlendModeAndOpacityTrait & MinimalFillsTrait & HasMaskTrait & HasEffectsTrait & HasExportSettingsTrait & HasTextSublayerTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:50

___

### isTableCellNode

▸ **isTableCellNode**(`node`): node is NodeBase\<TableCellNode\> & Object & IsLayerTrait & MinimalFillsTrait & HasLayoutTrait & HasTextSublayerTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<TableCellNode\> & Object & IsLayerTrait & MinimalFillsTrait & HasLayoutTrait & HasTextSublayerTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:52

___

### isTableNode

▸ **isTableNode**(`node`): node is NodeBase\<TableNode\> & Object & IsLayerTrait & HasChildrenTrait & HasLayoutTrait & MinimalStrokesTrait & HasEffectsTrait & HasBlendModeAndOpacityTrait & HasExportSettingsTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<TableNode\> & Object & IsLayerTrait & HasChildrenTrait & HasLayoutTrait & MinimalStrokesTrait & HasEffectsTrait & HasBlendModeAndOpacityTrait & HasExportSettingsTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:51

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

### isTextNode

▸ **isTextNode**(`node`): node is NodeBase\<TextNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & TypePropertiesTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<TextNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & TypePropertiesTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:53

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

### isVectorNode

▸ **isVectorNode**(`node`): node is NodeBase\<VectorNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & CornerTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<VectorNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait & CornerTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:54

___

### isWashiTapeNode

▸ **isWashiTapeNode**(`node`): node is NodeBase\<WashiTapeNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<WashiTapeNode\> & Object & IsLayerTrait & HasBlendModeAndOpacityTrait & HasLayoutTrait & MinimalFillsTrait & MinimalStrokesTrait & Object & HasExportSettingsTrait & HasEffectsTrait & HasMaskTrait & TransitionSourceTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:55

___

### isWidgetNode

▸ **isWidgetNode**(`node`): node is NodeBase\<WidgetNode\> & Object & IsLayerTrait & HasExportSettingsTrait & HasChildrenTrait

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<WidgetNode\> & Object & IsLayerTrait & HasExportSettingsTrait & HasChildrenTrait

#### Defined in

packages/figma-parser/src/shared/types.ts:56

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
