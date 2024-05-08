[@ltd-toolbox/figma-parser - v0.1.0-alpha.4](../README.md) / [Modules](../modules.md) / document

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

### Functions

- [getDocument](document.md#getdocument)
- [isSingleNode](document.md#issinglenode)

## Type Aliases

### FigmaNodeId

Ƭ **FigmaNodeId**: \`$\{number}:$\{number}\` \| `string`

#### Defined in

packages/figma-parser/src/document/types.ts:9

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
