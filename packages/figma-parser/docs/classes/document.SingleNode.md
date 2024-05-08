[@ltd-toolbox/figma-parser - v0.1.0-alpha.4](../README.md) / [Modules](../modules.md) / [document](../modules/document.md) / SingleNode

# Class: SingleNode\<T\>

[document](../modules/document.md).SingleNode

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

- [constructor](document.SingleNode.md#constructor)

### Properties

- [boundVariables](document.SingleNode.md#boundvariables)
- [children](document.SingleNode.md#children)
- [componentPropertyReferences](document.SingleNode.md#componentpropertyreferences)
- [explicitVariableModes](document.SingleNode.md#explicitvariablemodes)
- [id](document.SingleNode.md#id)
- [isFixed](document.SingleNode.md#isfixed)
- [locked](document.SingleNode.md#locked)
- [name](document.SingleNode.md#name)
- [parent](document.SingleNode.md#parent)
- [pluginData](document.SingleNode.md#plugindata)
- [raw](document.SingleNode.md#raw)
- [rotation](document.SingleNode.md#rotation)
- [scrollBehavior](document.SingleNode.md#scrollbehavior)
- [sharedPluginData](document.SingleNode.md#sharedplugindata)
- [type](document.SingleNode.md#type)
- [visible](document.SingleNode.md#visible)

### Methods

- [filterDeep](document.SingleNode.md#filterdeep)
- [findDeep](document.SingleNode.md#finddeep)
- [mapDeep](document.SingleNode.md#mapdeep)
- [table](document.SingleNode.md#table)
- [toString](document.SingleNode.md#tostring)
- [walk](document.SingleNode.md#walk)

## Constructors

### constructor

• **new SingleNode**\<`T`\>(`raw`, `parent?`): [`SingleNode`](document.SingleNode.md)\<`T`\>

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

[`SingleNode`](document.SingleNode.md)\<`T`\>

#### Inherited from

NodeBase\<T\>.constructor

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:17

## Properties

### boundVariables

• `Optional` **boundVariables**: `Readonly`\<`undefined` \| \{ `bottomLeftRadius?`: `VariableAlias` ; `bottomRightRadius?`: `VariableAlias` ; `characters?`: `VariableAlias` ; `componentProperties?`: \{ `[key: string]`: `VariableAlias`;  } ; `counterAxisSpacing?`: `VariableAlias` ; `effects?`: `VariableAlias`[] ; `fills?`: `VariableAlias`[] ; `individualStrokeWeights?`: \{ `bottom?`: `VariableAlias` ; `left?`: `VariableAlias` ; `right?`: `VariableAlias` ; `top?`: `VariableAlias`  } ; `itemSpacing?`: `VariableAlias` ; `layoutGrids?`: `VariableAlias`[] ; `maxHeight?`: `VariableAlias` ; `maxWidth?`: `VariableAlias` ; `minHeight?`: `VariableAlias` ; `minWidth?`: `VariableAlias` ; `opacity?`: `VariableAlias` ; `paddingBottom?`: `VariableAlias` ; `paddingLeft?`: `VariableAlias` ; `paddingRight?`: `VariableAlias` ; `paddingTop?`: `VariableAlias` ; `size?`: \{ `x?`: `VariableAlias` ; `y?`: `VariableAlias`  } ; `strokes?`: `VariableAlias`[] ; `textRangeFills?`: `VariableAlias`[] ; `topLeftRadius?`: `VariableAlias` ; `topRightRadius?`: `VariableAlias` ; `visible?`: `VariableAlias`  }\>

A mapping of field to the variables applied to this field. Most fields will only map to a single
`VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`,
and `textRangeFills`, it is possible to have multiple variables bound to the field.

#### Inherited from

NodeBase.boundVariables

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.ts:68

___

### children

• **children**: [`SingleNode`](document.SingleNode.md)\<`T`\>[] = `[]`

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

node_modules/@figma/rest-api-spec/dist/api_types.ts:49

___

### explicitVariableModes

• `Optional` **explicitVariableModes**: `Readonly`\<`undefined` \| \{ `[key: string]`: `string`;  }\>

A mapping of variable collection ID to mode ID representing the explicitly set modes for this
node.

#### Inherited from

NodeBase.explicitVariableModes

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.ts:136

___

### id

• **id**: `string`

A string uniquely identifying this node within the document.

#### Inherited from

NodeBase.id

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.ts:5

___

### isFixed

• `Optional` **isFixed**: `Readonly`\<`undefined` \| `boolean`\>

Whether the layer is fixed while the parent is scrolling

**`Deprecated`**

#### Inherited from

NodeBase.isFixed

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.ts:32

___

### locked

• `Optional` **locked**: `Readonly`\<`undefined` \| `boolean`\>

If true, layer is locked and cannot be edited

#### Inherited from

NodeBase.locked

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.ts:25

___

### name

• **name**: `string`

The name given to the node by the user in the tool.

#### Inherited from

NodeBase.name

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.ts:10

___

### parent

• `Optional` **parent**: `NodeBase`\<`Node`\>

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

node_modules/@figma/rest-api-spec/dist/api_types.ts:55

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

node_modules/@figma/rest-api-spec/dist/api_types.ts:42

___

### scrollBehavior

• **scrollBehavior**: `Readonly`\<``"SCROLLS"`` \| ``"FIXED"`` \| ``"STICKY_SCROLLS"``\>

How layer should be treated when the frame is resized

#### Inherited from

NodeBase.scrollBehavior

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.ts:37

___

### sharedPluginData

• `Optional` **sharedPluginData**: `Readonly`\<`unknown`\>

Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to
include the string "shared".

#### Inherited from

NodeBase.sharedPluginData

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.ts:61

___

### type

• **type**: `Readonly`\<``"VECTOR"`` \| ``"DOCUMENT"`` \| ``"CANVAS"`` \| ``"BOOLEAN_OPERATION"`` \| ``"SECTION"`` \| ``"FRAME"`` \| ``"GROUP"`` \| ``"COMPONENT"`` \| ``"COMPONENT_SET"`` \| ``"STAR"`` \| ``"LINE"`` \| ``"ELLIPSE"`` \| ``"REGULAR_POLYGON"`` \| ``"RECTANGLE"`` \| ``"TEXT"`` \| ``"TABLE"`` \| ``"TABLE_CELL"`` \| ``"SLICE"`` \| ``"INSTANCE"`` \| ``"EMBED"`` \| ``"LINK_UNFURL"`` \| ``"STICKY"`` \| ``"SHAPE_WITH_TEXT"`` \| ``"CONNECTOR"`` \| ``"WASHI_TAPE"`` \| ``"WIDGET"``\>

The type of this node, represented by the string literal "BOOLEAN_OPERATION"

#### Inherited from

NodeBase.type

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.ts:771

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:821

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:829

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:1009

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:858

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:953

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:807

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:814

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:919

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:851

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:960

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:874

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:867

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:791

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:986

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:912

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:844

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:967

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:889

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:902

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:881

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:837

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:1064

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:1071

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:706

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

node_modules/@figma/rest-api-spec/dist/api_types.ts:712

node_modules/@figma/rest-api-spec/dist/api_types.ts:15

___

### visible

• `Optional` **visible**: `Readonly`\<`undefined` \| `boolean`\>

Whether or not the node is visible on the canvas.

#### Inherited from

NodeBase.visible

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.ts:20

## Methods

### filterDeep

▸ **filterDeep**(`predicate`): [`SingleNode`](document.SingleNode.md)\<`T`\>[]

Filters nodes deep in the tree that match the given predicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: `this`, `path?`: [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[]) => `boolean` |

#### Returns

[`SingleNode`](document.SingleNode.md)\<`T`\>[]

#### Inherited from

NodeBase.filterDeep

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:110

___

### findDeep

▸ **findDeep**(`predicate`): ``null`` \| [`SingleNode`](document.SingleNode.md)\<`T`\>

Finds the first node deep in the tree that matches the given predicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: `this`, `path?`: [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[]) => `boolean` |

#### Returns

``null`` \| [`SingleNode`](document.SingleNode.md)\<`T`\>

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
| `callback` | (`node`: `this`, `path`: [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[]) => `void` |

#### Returns

`void`

#### Inherited from

NodeBase.walk

#### Defined in

packages/figma-parser/src/shared/node.abstract.ts:72
