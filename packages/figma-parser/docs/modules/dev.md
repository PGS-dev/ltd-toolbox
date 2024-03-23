[@ltd-toolbox/figma-parser - v0.1.0-alpha.2](../README.md) / [Modules](../modules.md) / dev

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
- [Getter](dev.md#getter)
- [GetterGetFn](dev.md#gettergetfn)
- [GetterTestFn](dev.md#gettertestfn)
- [GradientTokenValue](dev.md#gradienttokenvalue)
- [ShadowTokenValue](dev.md#shadowtokenvalue)
- [TreeNode](dev.md#treenode)

### Variables

- [logger](dev.md#logger)

### Functions

- [combineSchema](dev.md#combineschema)
- [deepMerge](dev.md#deepmerge)
- [entriesToDeepObject](dev.md#entriestodeepobject)
- [isColorToken](dev.md#iscolortoken)
- [isEmptyObject](dev.md#isemptyobject)
- [isFauxNode](dev.md#isfauxnode)
- [isGradientToken](dev.md#isgradienttoken)
- [isObject](dev.md#isobject)
- [isShadowToken](dev.md#isshadowtoken)
- [isTypographyToken](dev.md#istypographytoken)
- [isVariableAlias](dev.md#isvariablealias)
- [loggerFactory](dev.md#loggerfactory)
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

### Getter

Ƭ **Getter**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `get` | [`GetterGetFn`](dev.md#gettergetfn) | Getter function that gets the proper contents for current node if it passed the `test`. **`Example`** ```typescript const getter: Getter = { [...] get: (node: ContentNode) => ({ type: 'table-row' }) } ``` If you wish to parse the children on your own, you can return your own `children`, and parser will not overwrite it. **`Example`** ```typescript const getter: Getter = { [...] get: (node: ContentNode) => { const listItems: TreeNode[] = getListItems(node) return { type: 'unordered-list', children: listItems } } } ``` If you don't want to provide any children for the TreeNode, return `children: false`. This property will be removed from final tree. **`Example`** ```typescript const getter: Getter = { [...] get: (node: ContentNode) => { const listItems: TreeNode[] = getListItems(node) return { type: 'paragraph', data: node.getFormattedContent(), children: false } } } ``` |
| `test` | [`GetterTestFn`](dev.md#gettertestfn) | Test function that determines if get method should be executed on current node. You can use it to perform the getter only on nodes that match certain rules. **`Example`** ```typescript const getter: Getter = { test: (node: ContentNode) => node.raw.type === 'INSTANCE' && node.raw.name === 'heading 1' [...] } ``` |

#### Defined in

packages/figma-parser/src/contents/types.ts:14

___

### GetterGetFn

Ƭ **GetterGetFn**: (`node`: [`ContentNode`](../classes/dev.ContentNode.md)) => [`TreeNode`](dev.md#treenode) & \{ `children?`: [`TreeNode`](dev.md#treenode)[] \| ``false``  }

#### Type declaration

▸ (`node`): [`TreeNode`](dev.md#treenode) & \{ `children?`: [`TreeNode`](dev.md#treenode)[] \| ``false``  }

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`ContentNode`](../classes/dev.ContentNode.md) |

##### Returns

[`TreeNode`](dev.md#treenode) & \{ `children?`: [`TreeNode`](dev.md#treenode)[] \| ``false``  }

#### Defined in

packages/figma-parser/src/contents/types.ts:12

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

packages/figma-parser/src/contents/types.ts:11

___

### GradientTokenValue

Ƭ **GradientTokenValue**: [`GradientStop`](../interfaces/dev.GradientStop.md)[]

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:26

___

### ShadowTokenValue

Ƭ **ShadowTokenValue**: [`ShadowStop`](../interfaces/dev.ShadowStop.md)[]

#### Defined in

packages/figma-parser/src/shared/design-tokens-format.types.ts:24

___

### TreeNode

Ƭ **TreeNode**: `Node` & \{ `children?`: `Node`[]  }

#### Defined in

packages/figma-parser/src/contents/types.ts:9

## Variables

### logger

• `Const` **logger**: `Logger`

#### Defined in

packages/figma-parser/src/core/logger.ts:42

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

▸ **isFauxNode**(`node`): node is Node & Object & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`TreeNode`](dev.md#treenode) |

#### Returns

node is Node & Object & Object

#### Defined in

packages/figma-parser/src/contents/content-node.ts:10

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

### loggerFactory

▸ **loggerFactory**(`options?`): `Logger`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`LoggerOptions`\> |

#### Returns

`Logger`

#### Defined in

packages/figma-parser/src/core/logger.ts:13

▸ **loggerFactory**(`header`, `options?`): `Logger`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |
| `options?` | `Partial`\<`LoggerOptions`\> |

#### Returns

`Logger`

#### Defined in

packages/figma-parser/src/core/logger.ts:14

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
