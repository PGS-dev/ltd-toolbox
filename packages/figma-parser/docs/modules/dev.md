[@ltd-toolbox/figma-parser - v0.1.0-alpha.6](../README.md) / [Modules](../modules.md) / dev

# Module: dev

## Table of contents

### References

- [EffectStyle](dev.md#effectstyle)
- [FigmaNodeId](dev.md#figmanodeid)
- [FigmaStyleDefinition](dev.md#figmastyledefinition)
- [FigmaStylesTransformer](dev.md#figmastylestransformer)
- [FillStyle](dev.md#fillstyle)
- [FullStyle](dev.md#fullstyle)
- [GlobSearchNodes](dev.md#globsearchnodes)
- [PathBreadcrumb](dev.md#pathbreadcrumb)
- [SingleNode](dev.md#singlenode)
- [TextStyle](dev.md#textstyle)
- [WalkPredicate](dev.md#walkpredicate)
- [isBlurEffect](dev.md#isblureffect)
- [isEffectDefinition](dev.md#iseffectdefinition)
- [isEffectStyle](dev.md#iseffectstyle)
- [isFillDefinition](dev.md#isfilldefinition)
- [isFillStyle](dev.md#isfillstyle)
- [isShadowEffect](dev.md#isshadoweffect)
- [isSingleNode](dev.md#issinglenode)
- [isTextDefinition](dev.md#istextdefinition)
- [isTextStyle](dev.md#istextstyle)

### Classes

- [CollectionsSet](../classes/dev.CollectionsSet.md)
- [ContentNode](../classes/dev.ContentNode.md)
- [FigmaLocalVariable](../classes/dev.FigmaLocalVariable.md)
- [FigmaLocalVariableCollection](../classes/dev.FigmaLocalVariableCollection.md)
- [StylesProcessor](../classes/dev.StylesProcessor.md)

### Interfaces

- [ColorToken](../interfaces/dev.ColorToken.md)
- [DesignTokenBase](../interfaces/dev.DesignTokenBase.md)
- [DesignTokensFormatDeep](../interfaces/dev.DesignTokensFormatDeep.md)
- [DesignTokensFormatFlat](../interfaces/dev.DesignTokensFormatFlat.md)
- [DimensionToken](../interfaces/dev.DimensionToken.md)
- [FigmaApiInterface](../interfaces/dev.FigmaApiInterface.md)
- [FigmaParserOptions](../interfaces/dev.FigmaParserOptions.md)
- [FigmaRequestOptions](../interfaces/dev.FigmaRequestOptions.md)
- [GetterNode](../interfaces/dev.GetterNode.md)
- [GradientStop](../interfaces/dev.GradientStop.md)
- [GradientToken](../interfaces/dev.GradientToken.md)
- [NumberToken](../interfaces/dev.NumberToken.md)
- [ParseTreeOptions](../interfaces/dev.ParseTreeOptions.md)
- [ShadowStop](../interfaces/dev.ShadowStop.md)
- [ShadowToken](../interfaces/dev.ShadowToken.md)
- [TypeStyleTable](../interfaces/dev.TypeStyleTable.md)
- [TypographyToken](../interfaces/dev.TypographyToken.md)
- [TypographyTokenValue](../interfaces/dev.TypographyTokenValue.md)

### Type Aliases

- [ColorTokenValue](dev.md#colortokenvalue)
- [DesignToken](dev.md#designtoken)
- [DesignTokenType](dev.md#designtokentype)
- [DesignTokensFormat](dev.md#designtokensformat)
- [ErrorDescriptions](dev.md#errordescriptions)
- [ErrorResponse](dev.md#errorresponse)
- [FigmaPAT](dev.md#figmapat)
- [Getter](dev.md#getter)
- [GetterGetFn](dev.md#gettergetfn)
- [GetterTestFn](dev.md#gettertestfn)
- [GetterTreeNode](dev.md#gettertreenode)
- [GradientTokenValue](dev.md#gradienttokenvalue)
- [RequestErrorFn](dev.md#requesterrorfn)
- [ShadowTokenValue](dev.md#shadowtokenvalue)

### Variables

- [FigmaNodeMock](dev.md#figmanodemock)
- [htmlGetters](dev.md#htmlgetters)

### Functions

- [combineSchema](dev.md#combineschema)
- [createLogger](dev.md#createlogger)
- [createModuleLogger](dev.md#createmodulelogger)
- [deepMerge](dev.md#deepmerge)
- [entriesToDeepObject](dev.md#entriestodeepobject)
- [hasChildren](dev.md#haschildren)
- [isBooleanOperationNode](dev.md#isbooleanoperationnode)
- [isCanvasNode](dev.md#iscanvasnode)
- [isColorToken](dev.md#iscolortoken)
- [isComponentNode](dev.md#iscomponentnode)
- [isComponentSetNode](dev.md#iscomponentsetnode)
- [isConnectorNode](dev.md#isconnectornode)
- [isDocumentNode](dev.md#isdocumentnode)
- [isEllipseNode](dev.md#isellipsenode)
- [isEmbedNode](dev.md#isembednode)
- [isEmptyObject](dev.md#isemptyobject)
- [isFauxNode](dev.md#isfauxnode)
- [isFrameNode](dev.md#isframenode)
- [isGradientToken](dev.md#isgradienttoken)
- [isGroupNode](dev.md#isgroupnode)
- [isInstanceNode](dev.md#isinstancenode)
- [isLineNode](dev.md#islinenode)
- [isLinkUnfurlNode](dev.md#islinkunfurlnode)
- [isObject](dev.md#isobject)
- [isRectangleNode](dev.md#isrectanglenode)
- [isRegularPolygonNode](dev.md#isregularpolygonnode)
- [isSectionNode](dev.md#issectionnode)
- [isShadowToken](dev.md#isshadowtoken)
- [isShapeWithTextNode](dev.md#isshapewithtextnode)
- [isSliceNode](dev.md#isslicenode)
- [isStarNode](dev.md#isstarnode)
- [isStickyNode](dev.md#isstickynode)
- [isTableCellNode](dev.md#istablecellnode)
- [isTableNode](dev.md#istablenode)
- [isTextNode](dev.md#istextnode)
- [isTypographyToken](dev.md#istypographytoken)
- [isVariableAlias](dev.md#isvariablealias)
- [isVectorNode](dev.md#isvectornode)
- [isWashiTapeNode](dev.md#iswashitapenode)
- [isWidgetNode](dev.md#iswidgetnode)
- [rgbaToHexa](dev.md#rgbatohexa)

## References

### EffectStyle

Re-exports [EffectStyle](styles.md#effectstyle)

___

### FigmaNodeId

Re-exports [FigmaNodeId](document.md#figmanodeid)

___

### FigmaStyleDefinition

Re-exports [FigmaStyleDefinition](../interfaces/styles.FigmaStyleDefinition.md)

___

### FigmaStylesTransformer

Re-exports [FigmaStylesTransformer](styles.md#figmastylestransformer)

___

### FillStyle

Re-exports [FillStyle](styles.md#fillstyle)

___

### FullStyle

Re-exports [FullStyle](styles.md#fullstyle)

___

### GlobSearchNodes

Re-exports [GlobSearchNodes](../interfaces/document.GlobSearchNodes.md)

___

### PathBreadcrumb

Re-exports [PathBreadcrumb](../interfaces/document.PathBreadcrumb.md)

___

### SingleNode

Re-exports [SingleNode](../classes/document.SingleNode.md)

___

### TextStyle

Re-exports [TextStyle](styles.md#textstyle)

___

### WalkPredicate

Re-exports [WalkPredicate](document.md#walkpredicate)

___

### isBlurEffect

Re-exports [isBlurEffect](styles.md#isblureffect)

___

### isEffectDefinition

Re-exports [isEffectDefinition](styles.md#iseffectdefinition)

___

### isEffectStyle

Re-exports [isEffectStyle](styles.md#iseffectstyle)

___

### isFillDefinition

Re-exports [isFillDefinition](styles.md#isfilldefinition)

___

### isFillStyle

Re-exports [isFillStyle](styles.md#isfillstyle)

___

### isShadowEffect

Re-exports [isShadowEffect](styles.md#isshadoweffect)

___

### isSingleNode

Re-exports [isSingleNode](document.md#issinglenode)

___

### isTextDefinition

Re-exports [isTextDefinition](styles.md#istextdefinition)

___

### isTextStyle

Re-exports [isTextStyle](styles.md#istextstyle)

## Type Aliases

### ColorTokenValue

Ƭ **ColorTokenValue**: \`#$\{string}\`

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:14

___

### DesignToken

Ƭ **DesignToken**: [`ColorToken`](../interfaces/dev.ColorToken.md) \| [`TypographyToken`](../interfaces/dev.TypographyToken.md) \| [`ShadowToken`](../interfaces/dev.ShadowToken.md) \| [`GradientToken`](../interfaces/dev.GradientToken.md) \| [`NumberToken`](../interfaces/dev.NumberToken.md) \| [`DimensionToken`](../interfaces/dev.DimensionToken.md) \| [`DesignTokenBase`](../interfaces/dev.DesignTokenBase.md)

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:67

___

### DesignTokenType

Ƭ **DesignTokenType**: [`DesignToken`](dev.md#designtoken)[``"$type"``]

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:28

___

### DesignTokensFormat

Ƭ **DesignTokensFormat**: [`DesignTokensFormatDeep`](../interfaces/dev.DesignTokensFormatDeep.md) \| [`DesignTokensFormatFlat`](../interfaces/dev.DesignTokensFormatFlat.md)

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:85

___

### ErrorDescriptions

Ƭ **ErrorDescriptions**: `Record`\<`number`, `string` \| [`RequestErrorFn`](dev.md#requesterrorfn)\>

#### Defined in

packages/figma-parser/src/core/types.ts:30

___

### ErrorResponse

Ƭ **ErrorResponse**: `Partial`\<`ErrorResponsePayloadWithErrMessage` & `ErrorResponsePayloadWithErrorBoolean` & `Response`\>

#### Defined in

packages/figma-parser/src/core/types.ts:26

___

### FigmaPAT

Ƭ **FigmaPAT**: \`figd\_$\{string}\` \| `string`

Figma Personal Access Token format.

#### Defined in

packages/figma-parser/src/core/types.ts:6

___

### Getter

Ƭ **Getter**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | [`GetterGetFn`](dev.md#gettergetfn) | Getter function that gets the proper contents for current node if it passed the `test`. **`Example`** ```typescript const getter: Getter = { [...] get: (node: ContentNode) => ({ type: 'table-row' }) } ``` If you wish to parse the children on your own, you can return your own `children`, and parser will not overwrite it. **`Example`** ```typescript const getter: Getter = { [...] get: (node: ContentNode) => { const listItems: TreeNode[] = getListItems(node) return { type: 'unordered-list', children: listItems } } } ``` If you don't want to provide any children for the TreeNode, return `children: false`. This property will be removed from final tree. **`Example`** ```typescript const getter: Getter = { [...] get: (node: ContentNode) => { const listItems: TreeNode[] = getListItems(node) return { type: 'paragraph', data: node.getFormattedContent(), children: false } } } ``` |
| `test` | [`GetterTestFn`](dev.md#gettertestfn) | Test function that determines if get method should be executed on current node. You can use it to perform the getter only on nodes that match certain rules. **`Example`** ```typescript const getter: Getter = { test: (node: ContentNode) => node.raw.type === 'INSTANCE' && node.raw.name === 'heading 1' [...] } ``` |

#### Defined in

packages/figma-parser/src/contents/types.ts:20

___

### GetterGetFn

Ƭ **GetterGetFn**: (`node`: [`ContentNode`](../classes/dev.ContentNode.md)) => [`GetterTreeNode`](dev.md#gettertreenode) & \{ `children?`: [`GetterTreeNode`](dev.md#gettertreenode)[] \| ``false``  }

#### Type declaration

▸ (`node`): [`GetterTreeNode`](dev.md#gettertreenode) & \{ `children?`: [`GetterTreeNode`](dev.md#gettertreenode)[] \| ``false``  }

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`ContentNode`](../classes/dev.ContentNode.md) |

##### Returns

[`GetterTreeNode`](dev.md#gettertreenode) & \{ `children?`: [`GetterTreeNode`](dev.md#gettertreenode)[] \| ``false``  }

#### Defined in

packages/figma-parser/src/contents/types.ts:18

___

### GetterTestFn

Ƭ **GetterTestFn**: (`node`: [`ContentNode`](../classes/dev.ContentNode.md)) => `boolean`

#### Type declaration

▸ (`node`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`ContentNode`](../classes/dev.ContentNode.md) |

##### Returns

`boolean`

#### Defined in

packages/figma-parser/src/contents/types.ts:17

___

### GetterTreeNode

Ƭ **GetterTreeNode**: [`GetterNode`](../interfaces/dev.GetterNode.md) & \{ `children?`: [`GetterNode`](../interfaces/dev.GetterNode.md)[]  }

#### Defined in

packages/figma-parser/src/contents/types.ts:15

___

### GradientTokenValue

Ƭ **GradientTokenValue**: [`GradientStop`](../interfaces/dev.GradientStop.md)[]

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:26

___

### RequestErrorFn

Ƭ **RequestErrorFn**: (`response`: [`ErrorResponse`](dev.md#errorresponse)) => `string`

#### Type declaration

▸ (`response`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`ErrorResponse`](dev.md#errorresponse) |

##### Returns

`string`

#### Defined in

packages/figma-parser/src/core/types.ts:28

___

### ShadowTokenValue

Ƭ **ShadowTokenValue**: [`ShadowStop`](../interfaces/dev.ShadowStop.md)[]

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:24

## Variables

### FigmaNodeMock

• `Const` **FigmaNodeMock**: (`raw`: `Node`) => `NodeProperties`

#### Type declaration

• **new FigmaNodeMock**(`raw`): `NodeProperties`

##### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `Node` |

##### Returns

`NodeProperties`

#### Defined in

packages/figma-parser/src/shared/types.ts:74

___

### htmlGetters

• `Const` **htmlGetters**: [`Getter`](dev.md#getter)[]

#### Defined in

packages/figma-parser/src/contents/html.tree.ts:67

## Functions

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

packages/figma-parser/src/shared/entriesToDeepObject.util.ts:1

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

packages/figma-parser/src/shared/types.ts:59

▸ **hasChildren**(`node`): node is NodeBase\<Node\> & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeBase`\<`Node`\> |

#### Returns

node is NodeBase\<Node\> & Object

#### Defined in

packages/figma-parser/src/shared/types.ts:60

▸ **hasChildren**(`node`): node is Node & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Node` |

#### Returns

node is Node & Object

#### Defined in

packages/figma-parser/src/shared/types.ts:61

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

packages/figma-parser/src/shared/types.ts:32

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

packages/figma-parser/src/shared/types.ts:57

___

### isColorToken

▸ **isColorToken**(`token`): token is ColorToken

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`DesignToken`](dev.md#designtoken) |

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

packages/figma-parser/src/shared/types.ts:33

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

packages/figma-parser/src/shared/types.ts:34

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

packages/figma-parser/src/shared/types.ts:35

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

packages/figma-parser/src/shared/types.ts:56

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

packages/figma-parser/src/shared/types.ts:36

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

packages/figma-parser/src/shared/types.ts:37

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
| `node` | [`GetterTreeNode`](dev.md#gettertreenode) |

#### Returns

node is GetterNode & Object & Object

#### Defined in

packages/figma-parser/src/contents/content-node.ts:10

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

packages/figma-parser/src/shared/types.ts:38

___

### isGradientToken

▸ **isGradientToken**(`token`): token is GradientToken

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`DesignToken`](dev.md#designtoken) |

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

packages/figma-parser/src/shared/types.ts:39

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

packages/figma-parser/src/shared/types.ts:40

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

packages/figma-parser/src/shared/types.ts:41

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

packages/figma-parser/src/shared/types.ts:42

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

packages/figma-parser/src/shared/types.ts:43

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

packages/figma-parser/src/shared/types.ts:44

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

packages/figma-parser/src/shared/types.ts:45

___

### isShadowToken

▸ **isShadowToken**(`token`): token is GradientToken

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`DesignToken`](dev.md#designtoken) |

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

packages/figma-parser/src/shared/types.ts:46

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

packages/figma-parser/src/shared/types.ts:47

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

packages/figma-parser/src/shared/types.ts:48

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

packages/figma-parser/src/shared/types.ts:49

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

packages/figma-parser/src/shared/types.ts:51

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

packages/figma-parser/src/shared/types.ts:50

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

packages/figma-parser/src/shared/types.ts:52

___

### isTypographyToken

▸ **isTypographyToken**(`token`): token is TypographyToken

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`DesignToken`](dev.md#designtoken) |

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

packages/figma-parser/src/shared/types.ts:53

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

packages/figma-parser/src/shared/types.ts:54

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

packages/figma-parser/src/shared/types.ts:55

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
