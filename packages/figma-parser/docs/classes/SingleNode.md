[@ltd-toolbox/figma-parser - v0.1.0-alpha.7](../README.md) / [Exports](../modules.md) / SingleNode

# Class: SingleNode\<T\>

Represents a single node in a Figma file, providing utilities for navigation, search, and data extraction.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` = `Node` |

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

- [table](SingleNode.md#table)
- [toString](SingleNode.md#tostring)

## Constructors

### constructor

• **new SingleNode**\<`T`\>(`raw`, `parent?`): [`SingleNode`](SingleNode.md)\<`T`\>

Constructs a SingleNode instance from a Figma Node object or an existing SingleNode instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` = `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `T` |
| `parent?` | `NodeBase`\<`Node`\> |

#### Returns

[`SingleNode`](SingleNode.md)\<`T`\>

#### Inherited from

NodeBase\<T\>.constructor

#### Defined in

packages/figma-parser/src/shared/nodes/base.node.ts:19

## Properties

### boundVariables

• `Optional` **boundVariables**: `Readonly`\<`undefined` \| \{ `bottomLeftRadius?`: `VariableAlias` ; `bottomRightRadius?`: `VariableAlias` ; `characters?`: `VariableAlias` ; `componentProperties?`: \{ `[key: string]`: `VariableAlias`;  } ; `counterAxisSpacing?`: `VariableAlias` ; `effects?`: `VariableAlias`[] ; `fills?`: `VariableAlias`[] ; `individualStrokeWeights?`: \{ `bottom?`: `VariableAlias` ; `left?`: `VariableAlias` ; `right?`: `VariableAlias` ; `top?`: `VariableAlias`  } ; `itemSpacing?`: `VariableAlias` ; `layoutGrids?`: `VariableAlias`[] ; `maxHeight?`: `VariableAlias` ; `maxWidth?`: `VariableAlias` ; `minHeight?`: `VariableAlias` ; `minWidth?`: `VariableAlias` ; `opacity?`: `VariableAlias` ; `paddingBottom?`: `VariableAlias` ; `paddingLeft?`: `VariableAlias` ; `paddingRight?`: `VariableAlias` ; `paddingTop?`: `VariableAlias` ; `size?`: \{ `x?`: `VariableAlias` ; `y?`: `VariableAlias`  } ; `strokes?`: `VariableAlias`[] ; `textRangeFills?`: `VariableAlias`[] ; `topLeftRadius?`: `VariableAlias` ; `topRightRadius?`: `VariableAlias` ; `visible?`: `VariableAlias`  }\>

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

packages/figma-parser/src/shared/nodes/base.node.ts:14

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

• `Optional` **parent**: `NodeBase`\<`Node`\>

#### Inherited from

NodeBase.parent

#### Defined in

packages/figma-parser/src/shared/nodes/base.node.ts:21

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

packages/figma-parser/src/shared/nodes/base.node.ts:20

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

### table

▸ **table**(): `void`

Prints a table in the console with information about the node, including its children count, id, name, and type.

#### Returns

`void`

#### Inherited from

NodeBase.table

#### Defined in

packages/figma-parser/src/shared/nodes/base.node.ts:33

___

### toString

▸ **toString**(): `string`

Returns the name of the node as a string representation.

#### Returns

`string`

#### Inherited from

NodeBase.toString

#### Defined in

packages/figma-parser/src/shared/nodes/base.node.ts:45
