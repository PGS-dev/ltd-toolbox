[@ltd-toolbox/figma-parser - v0.1.0-alpha.7](../README.md) / [Exports](../modules.md) / SingleNode

# Class: SingleNode\<T\>

Represents a single node in a Figma file, providing utilities for navigation, search, and data extraction.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules.md#node) = [`Node`](../modules.md#node) |

## Hierarchy

- `NodeBase`\<`T`\>

  ↳ **`SingleNode`**

## Table of contents

### Constructors

- [constructor](SingleNode.md#constructor)

### Properties

- [boundVariables](SingleNode.md#boundvariables)
- [children](SingleNode.md#children)
- [componentPropertyReferences](SingleNode.md#componentpropertyreferences)
- [explicitVariableModes](SingleNode.md#explicitvariablemodes)
- [id](SingleNode.md#id)
- [isFixed](SingleNode.md#isfixed)
- [locked](SingleNode.md#locked)
- [name](SingleNode.md#name)
- [parent](SingleNode.md#parent)
- [pluginData](SingleNode.md#plugindata)
- [raw](SingleNode.md#raw)
- [rotation](SingleNode.md#rotation)
- [scrollBehavior](SingleNode.md#scrollbehavior)
- [sharedPluginData](SingleNode.md#sharedplugindata)
- [type](SingleNode.md#type)
- [visible](SingleNode.md#visible)

### Methods

- [filterDeep](SingleNode.md#filterdeep)
- [findDeep](SingleNode.md#finddeep)
- [mapDeep](SingleNode.md#mapdeep)
- [table](SingleNode.md#table)
- [toString](SingleNode.md#tostring)
- [walk](SingleNode.md#walk)

## Constructors

### constructor

• **new SingleNode**\<`T`\>(`raw`, `parent?`): [`SingleNode`](SingleNode.md)\<`T`\>

Constructs a SingleNode instance from a Figma Node object or an existing SingleNode instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules.md#node) = [`Node`](../modules.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `T` |
| `parent?` | `NodeBase`\<[`Node`](../modules.md#node)\> |

#### Returns

[`SingleNode`](SingleNode.md)\<`T`\>

#### Inherited from

NodeBase\<T\>.constructor

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:17

## Properties

### boundVariables

• `Optional` **boundVariables**: `Readonly`\<`undefined` \| \{ `bottomLeftRadius?`: [`VariableAlias`](../modules.md#variablealias) ; `bottomRightRadius?`: [`VariableAlias`](../modules.md#variablealias) ; `characters?`: [`VariableAlias`](../modules.md#variablealias) ; `componentProperties?`: \{ `[key: string]`: [`VariableAlias`](../modules.md#variablealias);  } ; `counterAxisSpacing?`: [`VariableAlias`](../modules.md#variablealias) ; `effects?`: [`VariableAlias`](../modules.md#variablealias)[] ; `fills?`: [`VariableAlias`](../modules.md#variablealias)[] ; `individualStrokeWeights?`: \{ `bottom?`: [`VariableAlias`](../modules.md#variablealias) ; `left?`: [`VariableAlias`](../modules.md#variablealias) ; `right?`: [`VariableAlias`](../modules.md#variablealias) ; `top?`: [`VariableAlias`](../modules.md#variablealias)  } ; `itemSpacing?`: [`VariableAlias`](../modules.md#variablealias) ; `layoutGrids?`: [`VariableAlias`](../modules.md#variablealias)[] ; `maxHeight?`: [`VariableAlias`](../modules.md#variablealias) ; `maxWidth?`: [`VariableAlias`](../modules.md#variablealias) ; `minHeight?`: [`VariableAlias`](../modules.md#variablealias) ; `minWidth?`: [`VariableAlias`](../modules.md#variablealias) ; `opacity?`: [`VariableAlias`](../modules.md#variablealias) ; `paddingBottom?`: [`VariableAlias`](../modules.md#variablealias) ; `paddingLeft?`: [`VariableAlias`](../modules.md#variablealias) ; `paddingRight?`: [`VariableAlias`](../modules.md#variablealias) ; `paddingTop?`: [`VariableAlias`](../modules.md#variablealias) ; `size?`: \{ `x?`: [`VariableAlias`](../modules.md#variablealias) ; `y?`: [`VariableAlias`](../modules.md#variablealias)  } ; `strokes?`: [`VariableAlias`](../modules.md#variablealias)[] ; `textRangeFills?`: [`VariableAlias`](../modules.md#variablealias)[] ; `topLeftRadius?`: [`VariableAlias`](../modules.md#variablealias) ; `topRightRadius?`: [`VariableAlias`](../modules.md#variablealias) ; `visible?`: [`VariableAlias`](../modules.md#variablealias)  }\>

A mapping of field to the variables applied to this field. Most fields will only map to a single
`VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`,
and `textRangeFills`, it is possible to have multiple variables bound to the field.

#### Inherited from

NodeBase.boundVariables

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:68

___

### children

• **children**: [`SingleNode`](SingleNode.md)\<`T`\>[] = `[]`

#### Inherited from

NodeBase.children

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:12

___

### componentPropertyReferences

• `Optional` **componentPropertyReferences**: `Readonly`\<`undefined` \| \{ `[key: string]`: `string`;  }\>

A mapping of a layer's property to component property name of component properties attached to
this node. The component property name can be used to look up more information on the
corresponding component's or component set's componentPropertyDefinitions.

#### Inherited from

NodeBase.componentPropertyReferences

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:49

___

### explicitVariableModes

• `Optional` **explicitVariableModes**: `Readonly`\<`undefined` \| \{ `[key: string]`: `string`;  }\>

A mapping of variable collection ID to mode ID representing the explicitly set modes for this
node.

#### Inherited from

NodeBase.explicitVariableModes

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:136

___

### id

• **id**: `string`

A string uniquely identifying this node within the document.

#### Inherited from

NodeBase.id

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:5

___

### isFixed

• `Optional` **isFixed**: `Readonly`\<`undefined` \| `boolean`\>

Whether the layer is fixed while the parent is scrolling

**`Deprecated`**

#### Inherited from

NodeBase.isFixed

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:32

___

### locked

• `Optional` **locked**: `Readonly`\<`undefined` \| `boolean`\>

If true, layer is locked and cannot be edited

#### Inherited from

NodeBase.locked

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:25

___

### name

• **name**: `string`

The name given to the node by the user in the tool.

#### Inherited from

NodeBase.name

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:10

___

### parent

• `Optional` **parent**: `NodeBase`\<[`Node`](../modules.md#node)\>

#### Inherited from

NodeBase.parent

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:19

___

### pluginData

• `Optional` **pluginData**: `Readonly`\<`unknown`\>

Data written by plugins that is visible only to the plugin that wrote it. Requires the
`pluginData` to include the ID of the plugin.

#### Inherited from

NodeBase.pluginData

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:55

___

### raw

• **raw**: `T`

#### Inherited from

NodeBase.raw

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:18

___

### rotation

• `Optional` **rotation**: `Readonly`\<`undefined` \| `number`\>

The rotation of the node, if not 0.

#### Inherited from

NodeBase.rotation

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:42

___

### scrollBehavior

• **scrollBehavior**: `Readonly`\<``"FIXED"`` \| ``"SCROLLS"`` \| ``"STICKY_SCROLLS"``\>

How layer should be treated when the frame is resized

#### Inherited from

NodeBase.scrollBehavior

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:37

___

### sharedPluginData

• `Optional` **sharedPluginData**: `Readonly`\<`unknown`\>

Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to
include the string "shared".

#### Inherited from

NodeBase.sharedPluginData

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:61

___

### type

• **type**: `Readonly`\<``"BOOLEAN_OPERATION"`` \| ``"COMPONENT"`` \| ``"COMPONENT_SET"`` \| ``"CONNECTOR"`` \| ``"ELLIPSE"`` \| ``"EMBED"`` \| ``"FRAME"`` \| ``"GROUP"`` \| ``"INSTANCE"`` \| ``"LINE"`` \| ``"LINK_UNFURL"`` \| ``"RECTANGLE"`` \| ``"REGULAR_POLYGON"`` \| ``"SECTION"`` \| ``"SHAPE_WITH_TEXT"`` \| ``"SLICE"`` \| ``"STAR"`` \| ``"STICKY"`` \| ``"TABLE"`` \| ``"TABLE_CELL"`` \| ``"TEXT"`` \| ``"VECTOR"`` \| ``"WASHI_TAPE"`` \| ``"WIDGET"`` \| ``"DOCUMENT"`` \| ``"CANVAS"``\>

The type of this node, represented by the string literal "BOOLEAN_OPERATION"

#### Inherited from

NodeBase.type

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:771

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:821

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:829

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:1009

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:858

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:953

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:807

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:814

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:919

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:851

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:960

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:874

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:867

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:791

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:986

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:912

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:844

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:967

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:889

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:902

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:881

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:837

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:1064

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:1071

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:706

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:712

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:15

___

### visible

• `Optional` **visible**: `Readonly`\<`undefined` \| `boolean`\>

Whether or not the node is visible on the canvas.

#### Inherited from

NodeBase.visible

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:20

## Methods

### filterDeep

▸ **filterDeep**(`predicate`): [`SingleNode`](SingleNode.md)\<`T`\>[]

Filters nodes deep in the tree that match the given predicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: `this`, `path?`: [`PathBreadcrumb`](../interfaces/PathBreadcrumb.md)[]) => `boolean` |

#### Returns

[`SingleNode`](SingleNode.md)\<`T`\>[]

#### Inherited from

NodeBase.filterDeep

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:110

___

### findDeep

▸ **findDeep**(`predicate`): ``null`` \| [`SingleNode`](SingleNode.md)\<`T`\>

Finds the first node deep in the tree that matches the given predicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: `this`, `path?`: [`PathBreadcrumb`](../interfaces/PathBreadcrumb.md)[]) => `boolean` |

#### Returns

``null`` \| [`SingleNode`](SingleNode.md)\<`T`\>

#### Inherited from

NodeBase.findDeep

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:95

___

### mapDeep

▸ **mapDeep**\<`T`\>(`callback`): `WithChildren`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`node`: `this`) => `undefined` \| `WithChildren`\<`T`\> |

#### Returns

`WithChildren`\<`T`\>

#### Inherited from

NodeBase.mapDeep

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:121

___

### table

▸ **table**(): `void`

Prints a table in the console with information about the node, including its children count, id, name, and type.

#### Returns

`void`

#### Inherited from

NodeBase.table

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:31

___

### toString

▸ **toString**(): `string`

Returns the name of the node as a string representation.

#### Returns

`string`

#### Inherited from

NodeBase.toString

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:43

___

### walk

▸ **walk**(`callback`): `void`

Walks through the node tree, executing a callback for each node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`node`: `this`, `path`: [`PathBreadcrumb`](../interfaces/PathBreadcrumb.md)[]) => `void` |

#### Returns

`void`

#### Inherited from

NodeBase.walk

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:72
