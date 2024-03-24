[@ltd-toolbox/figma-parser - v0.1.0-alpha.2](../README.md) / [Modules](../modules.md) / [core/api](../modules/core_api.md) / FigmaParserOptions

# Interface: FigmaParserOptions

[core/api](../modules/core_api.md).FigmaParserOptions

## Table of contents

### Properties

- [cache](core_api.FigmaParserOptions.md#cache)
- [cacheDir](core_api.FigmaParserOptions.md#cachedir)
- [cacheLifetime](core_api.FigmaParserOptions.md#cachelifetime)

## Properties

### cache

• **cache**: `boolean`

Whether cache should be used

**`Default`**

```ts
false
```

#### Defined in

packages/figma-parser/src/core/api.ts:15

___

### cacheDir

• **cacheDir**: `string`

Directory to store cached files

**`Default`**

```ts
.cache
```

#### Defined in

packages/figma-parser/src/core/api.ts:20

___

### cacheLifetime

• **cacheLifetime**: `number`

Defines how long cache should live. Cache file creation time is used, therefore it counts since first matching request.

**`Default`**

```ts
8 hours (1000 * 60 * 60 * 8)
```

#### Defined in

packages/figma-parser/src/core/api.ts:25
