[@ltd-toolbox/figma-parser - v0.1.0-alpha.11](../README.md) / [Exports](../modules.md) / GetContentsOptions

# Interface: GetContentsOptions

## Table of contents

### Properties

- [branchId](GetContentsOptions.md#branchid)
- [depth](GetContentsOptions.md#depth)
- [geometry](GetContentsOptions.md#geometry)
- [ids](GetContentsOptions.md#ids)
- [nodeId](GetContentsOptions.md#nodeid)
- [plugin\_data](GetContentsOptions.md#plugin_data)
- [version](GetContentsOptions.md#version)

## Properties

### branchId

• `Optional` **branchId**: `string`

Optional branch id to be fetched.

#### Defined in

packages/figma-parser/src/contents/types.ts:207

___

### depth

• `Optional` **depth**: `number`

Positive integer representing how deep into the document tree to traverse. For example, setting this to 1 returns only Pages, setting it to 2 returns Pages and all top level objects on each page. Not setting this parameter returns all nodes

#### Defined in

packages/figma-parser/src/contents/types.ts:223

___

### geometry

• `Optional` **geometry**: `string`

Set to "paths" to export vector data

#### Defined in

packages/figma-parser/src/contents/types.ts:227

___

### ids

• `Optional` **ids**: `string`

Comma separated list of nodes that you care about in the document. If specified, only a subset of the document will be returned corresponding to the nodes listed, their children, and everything between the root node and the listed nodes.

Note: There may be other nodes included in the returned JSON that are outside the ancestor chains of the desired nodes. The response may also include dependencies of anything in the nodes' subtrees. For example, if a node subtree contains an instance of a local component that lives elsewhere in that file, that component and its ancestor chain will also be included.

For historical reasons, top-level canvas nodes are always returned, regardless of whether they are listed in the ids parameter. This quirk may be removed in a future version of the API.

#### Defined in

packages/figma-parser/src/contents/types.ts:219

___

### nodeId

• `Optional` **nodeId**: `string`

Optional node Id that needs to be fetched. Using `nodeId` will overwrite all nodes provided in `ids` property.

#### Defined in

packages/figma-parser/src/contents/types.ts:203

___

### plugin\_data

• `Optional` **plugin\_data**: `string`

A comma separated list of plugin IDs and/or the string "shared". Any data present in the document written by those plugins will be included in the result in the `pluginData` and `sharedPluginData` properties.

#### Defined in

packages/figma-parser/src/contents/types.ts:231

___

### version

• `Optional` **version**: `string`

A specific version ID to get. Omitting this will get the current version of the file

#### Defined in

packages/figma-parser/src/contents/types.ts:211
