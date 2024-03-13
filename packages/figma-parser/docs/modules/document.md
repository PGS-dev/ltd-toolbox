[@ltd-toolbox/figma-parser - v0.1.0-alpha.1](../README.md) / [Modules](../modules.md) / document

# Module: document

## Table of contents

### Classes

- [NodeCollection](../classes/document.NodeCollection.md)
- [SingleNode](../classes/document.SingleNode.md)

### Interfaces

- [GlobSearchNodes](../interfaces/document.GlobSearchNodes.md)
- [PathBreadcrumb](../interfaces/document.PathBreadcrumb.md)

### Type Aliases

- [FigmaNodeId](document.md#figmanodeid)
- [SingleBooleanOperationNode](document.md#singlebooleanoperationnode)
- [SingleCanvasNode](document.md#singlecanvasnode)
- [SingleComponentNode](document.md#singlecomponentnode)
- [SingleComponentSetNode](document.md#singlecomponentsetnode)
- [SingleDocumentNode](document.md#singledocumentnode)
- [SingleEllipseNode](document.md#singleellipsenode)
- [SingleFrameNode](document.md#singleframenode)
- [SingleGroupNode](document.md#singlegroupnode)
- [SingleInstanceNode](document.md#singleinstancenode)
- [SingleLineNode](document.md#singlelinenode)
- [SingleRectangleNode](document.md#singlerectanglenode)
- [SingleRegularPolygonNode](document.md#singleregularpolygonnode)
- [SingleSliceNode](document.md#singleslicenode)
- [SingleStarNode](document.md#singlestarnode)
- [SingleTextNode](document.md#singletextnode)
- [SingleVectorNode](document.md#singlevectornode)

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

packages/figma-parser/src/document/types.ts:27

___

### SingleBooleanOperationNode

Ƭ **SingleBooleanOperationNode**: [`SingleNode`](../classes/document.SingleNode.md) & `BooleanOperationNode`

#### Defined in

packages/figma-parser/src/document/types.ts:55

___

### SingleCanvasNode

Ƭ **SingleCanvasNode**: [`SingleNode`](../classes/document.SingleNode.md) & `CanvasNode`

#### Defined in

packages/figma-parser/src/document/types.ts:51

___

### SingleComponentNode

Ƭ **SingleComponentNode**: [`SingleNode`](../classes/document.SingleNode.md) & `ComponentNode`

#### Defined in

packages/figma-parser/src/document/types.ts:63

___

### SingleComponentSetNode

Ƭ **SingleComponentSetNode**: [`SingleNode`](../classes/document.SingleNode.md) & `ComponentSetNode`

#### Defined in

packages/figma-parser/src/document/types.ts:64

___

### SingleDocumentNode

Ƭ **SingleDocumentNode**: [`SingleNode`](../classes/document.SingleNode.md) & `DocumentNode`

#### Defined in

packages/figma-parser/src/document/types.ts:50

___

### SingleEllipseNode

Ƭ **SingleEllipseNode**: [`SingleNode`](../classes/document.SingleNode.md) & `EllipseNode`

#### Defined in

packages/figma-parser/src/document/types.ts:58

___

### SingleFrameNode

Ƭ **SingleFrameNode**: [`SingleNode`](../classes/document.SingleNode.md) & `FrameNode`

#### Defined in

packages/figma-parser/src/document/types.ts:52

___

### SingleGroupNode

Ƭ **SingleGroupNode**: [`SingleNode`](../classes/document.SingleNode.md) & `GroupNode`

#### Defined in

packages/figma-parser/src/document/types.ts:53

___

### SingleInstanceNode

Ƭ **SingleInstanceNode**: [`SingleNode`](../classes/document.SingleNode.md) & `InstanceNode`

#### Defined in

packages/figma-parser/src/document/types.ts:65

___

### SingleLineNode

Ƭ **SingleLineNode**: [`SingleNode`](../classes/document.SingleNode.md) & `LineNode`

#### Defined in

packages/figma-parser/src/document/types.ts:57

___

### SingleRectangleNode

Ƭ **SingleRectangleNode**: [`SingleNode`](../classes/document.SingleNode.md) & `RectangleNode`

#### Defined in

packages/figma-parser/src/document/types.ts:60

___

### SingleRegularPolygonNode

Ƭ **SingleRegularPolygonNode**: [`SingleNode`](../classes/document.SingleNode.md) & `RegularPolygonNode`

#### Defined in

packages/figma-parser/src/document/types.ts:59

___

### SingleSliceNode

Ƭ **SingleSliceNode**: [`SingleNode`](../classes/document.SingleNode.md) & `SliceNode`

#### Defined in

packages/figma-parser/src/document/types.ts:62

___

### SingleStarNode

Ƭ **SingleStarNode**: [`SingleNode`](../classes/document.SingleNode.md) & `StarNode`

#### Defined in

packages/figma-parser/src/document/types.ts:56

___

### SingleTextNode

Ƭ **SingleTextNode**: [`SingleNode`](../classes/document.SingleNode.md) & `TextNode`

#### Defined in

packages/figma-parser/src/document/types.ts:61

___

### SingleVectorNode

Ƭ **SingleVectorNode**: [`SingleNode`](../classes/document.SingleNode.md) & `VectorNode`

#### Defined in

packages/figma-parser/src/document/types.ts:54

## Variables

### nodeTypes

• `Const` **nodeTypes**: `string`[]

#### Defined in

packages/figma-parser/src/document/types.ts:33

## Functions

### getDocument

▸ **getDocument**(`host`, `fileId`): `Promise`\<[`SingleNode`](../classes/document.SingleNode.md)\>

Asynchronously retrieves a Figma document by its file ID and wraps it in a SingleNode instance for easy manipulation and access.

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | [`FigmaApiInterface`](../interfaces/core_api.FigmaApiInterface.md) |
| `fileId` | `string` |

#### Returns

`Promise`\<[`SingleNode`](../classes/document.SingleNode.md)\>

#### Defined in

packages/figma-parser/src/document/get-document.ts:8

___

### hasChildren

▸ **hasChildren**\<`T`\>(`node`): node is Node & Object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Node` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `object` |

#### Returns

node is Node & Object

#### Defined in

packages/figma-parser/src/document/types.ts:29

___

### isBooleanOperationNode

▸ **isBooleanOperationNode**(`node`): node is SingleBooleanOperationNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleBooleanOperationNode

#### Defined in

packages/figma-parser/src/document/types.ts:72

___

### isCanvasNode

▸ **isCanvasNode**(`node`): node is SingleCanvasNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleCanvasNode

#### Defined in

packages/figma-parser/src/document/types.ts:68

___

### isComponentNode

▸ **isComponentNode**(`node`): node is SingleComponentNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleComponentNode

#### Defined in

packages/figma-parser/src/document/types.ts:80

___

### isComponentSetNode

▸ **isComponentSetNode**(`node`): node is SingleComponentSetNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleComponentSetNode

#### Defined in

packages/figma-parser/src/document/types.ts:81

___

### isDocumentNode

▸ **isDocumentNode**(`node`): node is SingleDocumentNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleDocumentNode

#### Defined in

packages/figma-parser/src/document/types.ts:67

___

### isEllipseNode

▸ **isEllipseNode**(`node`): node is SingleEllipseNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleEllipseNode

#### Defined in

packages/figma-parser/src/document/types.ts:75

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

packages/figma-parser/src/document/types.ts:31

___

### isFrameNode

▸ **isFrameNode**(`node`): node is SingleFrameNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleFrameNode

#### Defined in

packages/figma-parser/src/document/types.ts:69

___

### isGroupNode

▸ **isGroupNode**(`node`): node is SingleGroupNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleGroupNode

#### Defined in

packages/figma-parser/src/document/types.ts:70

___

### isInstanceNode

▸ **isInstanceNode**(`node`): node is SingleInstanceNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleInstanceNode

#### Defined in

packages/figma-parser/src/document/types.ts:82

___

### isLineNode

▸ **isLineNode**(`node`): node is SingleLineNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleLineNode

#### Defined in

packages/figma-parser/src/document/types.ts:74

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

packages/figma-parser/src/document/types.ts:35

___

### isRectangleNode

▸ **isRectangleNode**(`node`): node is SingleRectangleNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleRectangleNode

#### Defined in

packages/figma-parser/src/document/types.ts:77

___

### isRegularPolygonNode

▸ **isRegularPolygonNode**(`node`): node is SingleRegularPolygonNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleRegularPolygonNode

#### Defined in

packages/figma-parser/src/document/types.ts:76

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

packages/figma-parser/src/document/types.ts:40

___

### isSliceNode

▸ **isSliceNode**(`node`): node is SingleSliceNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleSliceNode

#### Defined in

packages/figma-parser/src/document/types.ts:79

___

### isStarNode

▸ **isStarNode**(`node`): node is SingleStarNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleStarNode

#### Defined in

packages/figma-parser/src/document/types.ts:73

___

### isTextNode

▸ **isTextNode**(`node`): node is SingleTextNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleTextNode

#### Defined in

packages/figma-parser/src/document/types.ts:78

___

### isVectorNode

▸ **isVectorNode**(`node`): node is SingleVectorNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`SingleNode`](../classes/document.SingleNode.md) |

#### Returns

node is SingleVectorNode

#### Defined in

packages/figma-parser/src/document/types.ts:71
