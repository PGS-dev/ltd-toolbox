[@ltd-toolbox/figma-parser - v0.1.0-alpha.5](../README.md) / [Modules](../modules.md) / variables

# Module: variables

## Table of contents

### Functions

- [getVariables](variables.md#getvariables)

## Functions

### getVariables

▸ **getVariables**(`api`, `fileId`): `Promise`\<[`CollectionsSet`](../classes/dev.CollectionsSet.md)\>

Asynchronously fetches and constructs a set of local variable collections from a Figma file.
This function queries the Figma API for local variables and their collections, then organizes these into a CollectionsSet instance for easy access and manipulation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | [`FigmaApiInterface`](../interfaces/dev.FigmaApiInterface.md) |
| `fileId` | `string` |

#### Returns

`Promise`\<[`CollectionsSet`](../classes/dev.CollectionsSet.md)\>

#### Defined in

packages/figma-parser/src/variables/get-variables.ts:31
