[@ltd-toolbox/figma-parser - v0.1.0-alpha.2](../README.md) / [Modules](../modules.md) / document

# Module: document

## Table of contents

### Classes

- [SingleNode](../classes/document.SingleNode.md)

### Interfaces

- [GlobSearchNodes](../interfaces/document.GlobSearchNodes.md)
- [PathBreadcrumb](../interfaces/document.PathBreadcrumb.md)

### Type Aliases

- [FigmaNodeId](document.md#figmanodeid)
- [WalkPredicate](document.md#walkpredicate)

### Variables

- [nodeTypes](document.md#nodetypes)

### Functions

- [getDocument](document.md#getdocument)
- [hasChildren](document.md#haschildren)
- [isBooleanOperationNode](document.md#isbooleanoperationnode)
- [isCanvasNode](document.md#iscanvasnode)
- [isComponentNode](document.md#iscomponentnode)
- [isComponentSetNode](document.md#iscomponentsetnode)
- [isDocumentNode](document.md#isdocumentnode)
- [isEllipseNode](document.md#isellipsenode)
- [isFigmaNodeId](document.md#isfigmanodeid)
- [isFrameNode](document.md#isframenode)
- [isGroupNode](document.md#isgroupnode)
- [isInstanceNode](document.md#isinstancenode)
- [isLineNode](document.md#islinenode)
- [isNode](document.md#isnode)
- [isRectangleNode](document.md#isrectanglenode)
- [isRegularPolygonNode](document.md#isregularpolygonnode)
- [isSingleNode](document.md#issinglenode)
- [isSliceNode](document.md#isslicenode)
- [isStarNode](document.md#isstarnode)
- [isTextNode](document.md#istextnode)
- [isVectorNode](document.md#isvectornode)

## Type Aliases

### FigmaNodeId

Ƭ **FigmaNodeId**: \`$\{number}:$\{number}\` \| `string`

#### Defined in

packages/figma-parser/src/document/types.ts:29

___

### WalkPredicate

Ƭ **WalkPredicate**: (`node`: [`SingleNode`](../classes/document.SingleNode.md), `path`: [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[]) => `void`

#### Type declaration

▸ (`node`, `path`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |
| `path` | [`PathBreadcrumb`](../interfaces/document.PathBreadcrumb.md)[] |

##### Returns

`void`

#### Defined in

packages/figma-parser/src/document/single-node.ts:5

## Variables

### nodeTypes

• `Const` **nodeTypes**: `string`[]

#### Defined in

packages/figma-parser/src/document/types.ts:35

## Functions

### getDocument

▸ **getDocument**(`host`, `fileId`): `Promise`\<[`SingleNode`](../classes/document.SingleNode.md)\<`DocumentNode`\>\>

Asynchronously retrieves a Figma document by its file ID and wraps it in a SingleNode instance for easy manipulation and access.

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`FigmaApiInterface`](../interfaces/core_api.FigmaApiInterface.md) |
| `fileId` | `string` |

#### Returns

`Promise`\<[`SingleNode`](../classes/document.SingleNode.md)\<`DocumentNode`\>\>

#### Defined in

packages/figma-parser/src/document/get-document.ts:8

___

### hasChildren

▸ **hasChildren**(`node`): node is Node & Object

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Node` |

#### Returns

node is Node & Object

#### Defined in

packages/figma-parser/src/document/types.ts:31

___

### isBooleanOperationNode

▸ **isBooleanOperationNode**(`node`): node is AbstractNode\<BooleanOperationNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<BooleanOperationNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:57

___

### isCanvasNode

▸ **isCanvasNode**(`node`): node is AbstractNode\<CanvasNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<CanvasNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:53

___

### isComponentNode

▸ **isComponentNode**(`node`): node is AbstractNode\<ComponentNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<ComponentNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:65

___

### isComponentSetNode

▸ **isComponentSetNode**(`node`): node is AbstractNode\<ComponentSetNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<ComponentSetNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:66

___

### isDocumentNode

▸ **isDocumentNode**(`node`): node is AbstractNode\<DocumentNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<DocumentNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:52

___

### isEllipseNode

▸ **isEllipseNode**(`node`): node is AbstractNode\<EllipseNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<EllipseNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:60

___

### isFigmaNodeId

▸ **isFigmaNodeId**(`value`): value is string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

value is string

#### Defined in

packages/figma-parser/src/document/types.ts:33

___

### isFrameNode

▸ **isFrameNode**(`node`): node is AbstractNode\<FrameNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<FrameNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:54

___

### isGroupNode

▸ **isGroupNode**(`node`): node is AbstractNode\<GroupNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<GroupNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:55

___

### isInstanceNode

▸ **isInstanceNode**(`node`): node is AbstractNode\<InstanceNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<InstanceNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:67

___

### isLineNode

▸ **isLineNode**(`node`): node is AbstractNode\<LineNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<LineNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:59

___

### isNode

▸ **isNode**(`value`): value is Node

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `object` |

#### Returns

value is Node

#### Defined in

packages/figma-parser/src/document/types.ts:37

___

### isRectangleNode

▸ **isRectangleNode**(`node`): node is AbstractNode\<RectangleNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<RectangleNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:62

___

### isRegularPolygonNode

▸ **isRegularPolygonNode**(`node`): node is AbstractNode\<RegularPolygonNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<RegularPolygonNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:61

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

packages/figma-parser/src/document/types.ts:42

___

### isSliceNode

▸ **isSliceNode**(`node`): node is AbstractNode\<SliceNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<SliceNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:64

___

### isStarNode

▸ **isStarNode**(`node`): node is AbstractNode\<StarNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<StarNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:58

___

### isTextNode

▸ **isTextNode**(`node`): node is AbstractNode\<TextNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<TextNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:63

___

### isVectorNode

▸ **isVectorNode**(`node`): node is AbstractNode\<VectorNode\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `AbstractNode`\<`Node`\> |

#### Returns

node is AbstractNode\<VectorNode\>

#### Defined in

packages/figma-parser/src/document/types.ts:56
