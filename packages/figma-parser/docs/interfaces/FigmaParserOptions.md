[@ltd-toolbox/figma-parser - v0.1.0-alpha.11](../README.md) / [Exports](../modules.md) / FigmaParserOptions

# Interface: FigmaParserOptions

## Table of contents

### Properties

- [cache](FigmaParserOptions.md#cache)
- [cacheDir](FigmaParserOptions.md#cachedir)
- [cacheLifetime](FigmaParserOptions.md#cachelifetime)
- [logLevel](FigmaParserOptions.md#loglevel)

## Properties

### cache

• **cache**: `boolean`

Whether cache should be used

**`Default`**

```ts
false
```

#### Defined in

packages/figma-parser/src/core/types.ts:15

___

### cacheDir

• **cacheDir**: `string`

Directory to store cached files

**`Default`**

```ts
.cache
```

#### Defined in

packages/figma-parser/src/core/types.ts:20

___

### cacheLifetime

• **cacheLifetime**: `number`

Defines how long cache should live. Cache file creation time is used, therefore it counts since first matching request.

**`Default`**

```ts
8 hours (1000 * 60 * 60 * 8)
```

#### Defined in

packages/figma-parser/src/core/types.ts:25

___

### logLevel

• **logLevel**: ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5``

Defines what types of feedback you will see:
0: Fatal and Error
1: Warnings
2: Normal logs
3: Informational logs, success, fail, ready, start, ...
4: Debug logs
5: Trace logs

**`Default`**

```ts
3
```

#### Defined in

packages/figma-parser/src/core/types.ts:36
