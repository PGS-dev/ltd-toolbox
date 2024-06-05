[@ltd-toolbox/figma-parser - v0.1.0-alpha.7](../README.md) / [Exports](../modules.md) / ContentNode

# Class: ContentNode\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` = `Node` |

## Hierarchy

- `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`, `this`\> & `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`, `this`\> & `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`, `this`\> & `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & (...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`, `this`\> & `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: ...) => ... & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`, `this`\> & `__class`\<(...`args`: `any`[]) => `__class`\<(...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`\> & (...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`, `this`\> & `__class`\<(...`args`: `any`[]) => `__class`\<typeof `NodeBase`\> & typeof `NodeBase`, `this`\> & `__class`\<typeof `NodeBase`, `this`\> & `NodeBase`\<`Node`, `this`\>

  ↳ **`ContentNode`**

## Table of contents

### Constructors

- [constructor](ContentNode.md#constructor)

### Properties

- [boundVariables](ContentNode.md#boundvariables)
- [children](ContentNode.md#children)
- [componentPropertyReferences](ContentNode.md#componentpropertyreferences)
- [explicitVariableModes](ContentNode.md#explicitvariablemodes)
- [id](ContentNode.md#id)
- [isFixed](ContentNode.md#isfixed)
- [locked](ContentNode.md#locked)
- [name](ContentNode.md#name)
- [parent](ContentNode.md#parent)
- [pluginData](ContentNode.md#plugindata)
- [raw](ContentNode.md#raw)
- [rotation](ContentNode.md#rotation)
- [scrollBehavior](ContentNode.md#scrollbehavior)
- [sharedPluginData](ContentNode.md#sharedplugindata)
- [type](ContentNode.md#type)
- [visible](ContentNode.md#visible)

### Methods

- [child](ContentNode.md#child)
- [childById](ContentNode.md#childbyid)
- [childByName](ContentNode.md#childbyname)
- [deepChild](ContentNode.md#deepchild)
- [filterDeep](ContentNode.md#filterdeep)
- [find](ContentNode.md#find)
- [findDeep](ContentNode.md#finddeep)
- [fitler](ContentNode.md#fitler)
- [flat](ContentNode.md#flat)
- [getFormattedChildrenText](ContentNode.md#getformattedchildrentext)
- [getFormattedText](ContentNode.md#getformattedtext)
- [getRawChildrenText](ContentNode.md#getrawchildrentext)
- [getRawText](ContentNode.md#getrawtext)
- [glob](ContentNode.md#glob)
- [map](ContentNode.md#map)
- [mapDeep](ContentNode.md#mapdeep)
- [parseTree](ContentNode.md#parsetree)
- [path](ContentNode.md#path)
- [table](ContentNode.md#table)
- [toArray](ContentNode.md#toarray)
- [toString](ContentNode.md#tostring)
- [walk](ContentNode.md#walk)

## Constructors

### constructor

• **new ContentNode**\<`T`\>(`raw`, `parent?`): [`ContentNode`](ContentNode.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Node` = `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `T` |
| `parent?` | [`ContentNode`](ContentNode.md)\<`Node`\> |

#### Returns

[`ContentNode`](ContentNode.md)\<`T`\>

#### Overrides

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).constructor

#### Defined in

packages/figma-parser/src/contents/content-node.ts:29

## Properties

### boundVariables

• `Optional` **boundVariables**: `Readonly`\<`undefined` \| \{ `bottomLeftRadius?`: `VariableAlias` ; `bottomRightRadius?`: `VariableAlias` ; `characters?`: `VariableAlias` ; `componentProperties?`: \{ `[key: string]`: `VariableAlias`;  } ; `counterAxisSpacing?`: `VariableAlias` ; `effects?`: `VariableAlias`[] ; `fills?`: `VariableAlias`[] ; `individualStrokeWeights?`: \{ `bottom?`: `VariableAlias` ; `left?`: `VariableAlias` ; `right?`: `VariableAlias` ; `top?`: `VariableAlias`  } ; `itemSpacing?`: `VariableAlias` ; `layoutGrids?`: `VariableAlias`[] ; `maxHeight?`: `VariableAlias` ; `maxWidth?`: `VariableAlias` ; `minHeight?`: `VariableAlias` ; `minWidth?`: `VariableAlias` ; `opacity?`: `VariableAlias` ; `paddingBottom?`: `VariableAlias` ; `paddingLeft?`: `VariableAlias` ; `paddingRight?`: `VariableAlias` ; `paddingTop?`: `VariableAlias` ; `size?`: \{ `x?`: `VariableAlias` ; `y?`: `VariableAlias`  } ; `strokes?`: `VariableAlias`[] ; `textRangeFills?`: `VariableAlias`[] ; `topLeftRadius?`: `VariableAlias` ; `topRightRadius?`: `VariableAlias` ; `visible?`: `VariableAlias`  }\>

A mapping of field to the variables applied to this field. Most fields will only map to a single
`VariableAlias`. However, for properties like `fills`, `strokes`, `size`, `componentProperties`,
and `textRangeFills`, it is possible to have multiple variables bound to the field.

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).boundVariables

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:68

___

### children

• **children**: [`ContentNode`](ContentNode.md)\<`T`\>[] = `[]`

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).children

#### Defined in

packages/figma-parser/src/shared/nodes/parent.node.ts:6

packages/figma-parser/src/shared/nodes/base.node.ts:14

___

### componentPropertyReferences

• `Optional` **componentPropertyReferences**: `Readonly`\<`undefined` \| \{ `[key: string]`: `string`;  }\>

A mapping of a layer's property to component property name of component properties attached to
this node. The component property name can be used to look up more information on the
corresponding component's or component set's componentPropertyDefinitions.

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).componentPropertyReferences

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:49

___

### explicitVariableModes

• `Optional` **explicitVariableModes**: `Readonly`\<`undefined` \| \{ `[key: string]`: `string`;  }\>

A mapping of variable collection ID to mode ID representing the explicitly set modes for this
node.

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).explicitVariableModes

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:136

___

### id

• **id**: `string`

A string uniquely identifying this node within the document.

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).id

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:5

___

### isFixed

• `Optional` **isFixed**: `Readonly`\<`undefined` \| `boolean`\>

Whether the layer is fixed while the parent is scrolling

**`Deprecated`**

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).isFixed

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:32

___

### locked

• `Optional` **locked**: `Readonly`\<`undefined` \| `boolean`\>

If true, layer is locked and cannot be edited

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).locked

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:25

___

### name

• **name**: `string`

The name given to the node by the user in the tool.

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).name

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:10

___

### parent

• `Optional` **parent**: [`ContentNode`](ContentNode.md)\<`Node`\>

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).parent

#### Defined in

packages/figma-parser/src/contents/content-node.ts:29

___

### pluginData

• `Optional` **pluginData**: `Readonly`\<`unknown`\>

Data written by plugins that is visible only to the plugin that wrote it. Requires the
`pluginData` to include the ID of the plugin.

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).pluginData

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:55

___

### raw

• **raw**: `T`

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).raw

#### Defined in

packages/figma-parser/src/contents/content-node.ts:29

___

### rotation

• `Optional` **rotation**: `Readonly`\<`undefined` \| `number`\>

The rotation of the node, if not 0.

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).rotation

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:42

___

### scrollBehavior

• **scrollBehavior**: `Readonly`\<``"FIXED"`` \| ``"SCROLLS"`` \| ``"STICKY_SCROLLS"``\>

How layer should be treated when the frame is resized

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).scrollBehavior

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:37

___

### sharedPluginData

• `Optional` **sharedPluginData**: `Readonly`\<`unknown`\>

Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to
include the string "shared".

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).sharedPluginData

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:61

___

### type

• **type**: `Readonly`\<``"BOOLEAN_OPERATION"`` \| ``"COMPONENT"`` \| ``"COMPONENT_SET"`` \| ``"CONNECTOR"`` \| ``"ELLIPSE"`` \| ``"EMBED"`` \| ``"FRAME"`` \| ``"GROUP"`` \| ``"INSTANCE"`` \| ``"LINE"`` \| ``"LINK_UNFURL"`` \| ``"RECTANGLE"`` \| ``"REGULAR_POLYGON"`` \| ``"SECTION"`` \| ``"SHAPE_WITH_TEXT"`` \| ``"SLICE"`` \| ``"STAR"`` \| ``"STICKY"`` \| ``"TABLE"`` \| ``"TABLE_CELL"`` \| ``"TEXT"`` \| ``"VECTOR"`` \| ``"WASHI_TAPE"`` \| ``"WIDGET"`` \| ``"DOCUMENT"`` \| ``"CANVAS"``\>

The type of this node, represented by the string literal "BOOLEAN_OPERATION"

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).type

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

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).visible

#### Defined in

node_modules/@figma/rest-api-spec/dist/api_types.d.ts:20

## Methods

### child

▸ **child**(`index`): `undefined` \| [`ContentNode`](ContentNode.md)\<`T`\>

Returns child node by its index
```
const thirdChild = ndoe.child(3)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| [`ContentNode`](ContentNode.md)\<`T`\>

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).child

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/traversable.mixin.ts:17

___

### childById

▸ **childById**(`id`): `undefined` \| [`ContentNode`](ContentNode.md)\<`T`\>

Returns child node witch matching id stored in "id" property
```
const specificLayer = node.childById('123:345');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`ContentNode`](ContentNode.md)\<`T`\>

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).childById

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/traversable.mixin.ts:37

___

### childByName

▸ **childByName**(`name`): `undefined` \| [`ContentNode`](ContentNode.md)\<`T`\>

Returns first child node with matching name stored in "name" property
```
const title = node.childByName('Title');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`ContentNode`](ContentNode.md)\<`T`\>

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).childByName

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/traversable.mixin.ts:27

___

### deepChild

▸ **deepChild**(`...indexes`): `undefined` \| [`ContentNode`](ContentNode.md)\<`T`\>

Returns deep child node using indexes of each another node.
```

const deepText = node.deepChild(0, 1, 0, 4)

// equals to node.children[0].children[1].children[0].children[4]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `...indexes` | `number`[] |

#### Returns

`undefined` \| [`ContentNode`](ContentNode.md)\<`T`\>

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).deepChild

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/traversable.mixin.ts:51

___

### filterDeep

▸ **filterDeep**(`predicate`): `RichParentNode` \| [`ContentNode`](ContentNode.md)\<`T`\> & `ParentInterface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: `this`) => `boolean` |

#### Returns

`RichParentNode` \| [`ContentNode`](ContentNode.md)\<`T`\> & `ParentInterface`

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).filterDeep

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/filterable.mixin.ts:14

___

### find

▸ **find**(`predicate`): `undefined` \| [`ContentNode`](ContentNode.md)\<`T`\>

Finds the first node in node's children that matches the given predicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: `this`, `index`: `number`) => `boolean` |

#### Returns

`undefined` \| [`ContentNode`](ContentNode.md)\<`T`\>

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).find

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/searchable.mixin.ts:11

___

### findDeep

▸ **findDeep**(`predicate`): `undefined` \| [`ContentNode`](ContentNode.md)\<`T`\>

Finds the first node deep in the tree that matches the given predicate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: `this`) => `boolean` |

#### Returns

`undefined` \| [`ContentNode`](ContentNode.md)\<`T`\>

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).findDeep

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/searchable.mixin.ts:18

___

### fitler

▸ **fitler**(`predicate`): `RichParentNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`node`: `this`) => `boolean` |

#### Returns

`RichParentNode`

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).fitler

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/filterable.mixin.ts:8

___

### flat

▸ **flat**(): `RichParentNode`

Skips all RichParentNodes

#### Returns

`RichParentNode`

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).flat

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/flattable.mixin.ts:12

___

### getFormattedChildrenText

▸ **getFormattedChildrenText**(): `string`

Retrieves the text content of the node and its children, formatted according to `getFormattedText()`.
This method organizes text contents in a markdown-ish format, including basic styles and list formatting.

#### Returns

`string`

#### Defined in

packages/figma-parser/src/contents/content-node.ts:129

___

### getFormattedText

▸ **getFormattedText**(): `undefined` \| `string`

Formats the current text node's content to a markdown-like syntax, supporting basic styles such as bold,
italic, and lists. This method is designed for text nodes and will return undefined for non-text nodes.

#### Returns

`undefined` \| `string`

#### Defined in

packages/figma-parser/src/contents/content-node.ts:142

___

### getRawChildrenText

▸ **getRawChildrenText**(): `string`

Retrieves the concatenated raw text content of the node and its children, excluding any formatting.
Useful for extracting plain text from a node tree.

#### Returns

`string`

#### Defined in

packages/figma-parser/src/contents/content-node.ts:116

___

### getRawText

▸ **getRawText**(): `undefined` \| `string`

Gets raw text without any formatting

#### Returns

`undefined` \| `string`

#### Defined in

packages/figma-parser/src/contents/content-node.ts:106

___

### glob

▸ **glob**(`...paths`): `RichParentNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`RichParentNode`

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).glob

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/traversable.mixin.ts:58

___

### map

▸ **map**\<`T`\>(`callback`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`node`: `this`) => `undefined` \| `T` |

#### Returns

`T`[]

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).map

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/mappable.mixin.ts:9

___

### mapDeep

▸ **mapDeep**\<`T`\>(`callback`): `RichParentNode`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParentInterface` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`node`: `this`) => `T` |

#### Returns

`RichParentNode`

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).mapDeep

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/mappable.mixin.ts:13

___

### parseTree

▸ **parseTree**(`options?`): `Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

Parses a Figma node tree, extracting content into a structured tree format. This method facilitates the transformation
of Figma layers into document abstract syntax trees (AST), enabling conversion to various formats like Markdown or HTML.
Returned type `TreeNode` is compliant with (unist's Node interface)[https://github.com/syntax-tree/unist?tab=readme-ov-file#node],
therefore it may be processed with these utils.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<[`ParseTreeOptions`](../interfaces/ParseTreeOptions.md)\> |

#### Returns

`Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Defined in

packages/figma-parser/src/contents/content-node.ts:59

▸ **parseTree**(`getters?`): `Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getters?` | [`Getter`](../modules.md#getter)[] |

#### Returns

`Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Defined in

packages/figma-parser/src/contents/content-node.ts:60

▸ **parseTree**(`getters?`, `options?`): `Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getters?` | [`Getter`](../modules.md#getter)[] |
| `options?` | `Partial`\<[`ParseTreeOptions`](../interfaces/ParseTreeOptions.md)\> |

#### Returns

`Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Defined in

packages/figma-parser/src/contents/content-node.ts:61

▸ **parseTree**(`getters?`, `options?`): `Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `getters?` | [`Getter`](../modules.md#getter)[] |
| `options?` | `Partial`\<[`ParseTreeOptions`](../interfaces/ParseTreeOptions.md)\> |

#### Returns

`Promise`\<[`GetterTreeNode`](../modules.md#gettertreenode)\>

#### Defined in

packages/figma-parser/src/contents/content-node.ts:62

___

### path

▸ **path**(`prop?`): `string`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prop` | ``"type"`` \| ``"id"`` \| ``"name"`` \| ``"visible"`` \| ``"locked"`` \| ``"isFixed"`` \| ``"scrollBehavior"`` \| ``"rotation"`` \| ``"componentPropertyReferences"`` \| ``"pluginData"`` \| ``"sharedPluginData"`` \| ``"boundVariables"`` \| ``"explicitVariableModes"`` | `'name'` |

#### Returns

`string`[]

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).path

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/path.mixin.ts:9

___

### table

▸ **table**(): `void`

Prints a table in the console with information about the node, including its children count, id, name, and type.

#### Returns

`void`

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).table

#### Defined in

packages/figma-parser/src/shared/nodes/base.node.ts:33

___

### toArray

▸ **toArray**(): [`ContentNode`](ContentNode.md)\<`T`\>[]

#### Returns

[`ContentNode`](ContentNode.md)\<`T`\>[]

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).toArray

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/to-array.mixin.ts:7

___

### toString

▸ **toString**(): `string`

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:128

___

### walk

▸ **walk**(`callback`): `void`

Walks through the node tree, executing a callback for each node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`node`: `this`) => `void` |

#### Returns

`void`

#### Inherited from

WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(NodeBase)))))))).walk

#### Defined in

packages/figma-parser/src/shared/nodes/node-mixins/walkable.mixin.ts:11
