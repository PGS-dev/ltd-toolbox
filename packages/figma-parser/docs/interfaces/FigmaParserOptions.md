[@ltd-toolbox/figma-parser - v0.1.0-alpha.7](../README.md) / [Exports](../modules.md) / FigmaParserOptions

# Interface: FigmaParserOptions

## Table of contents

### Properties

- [cache](FigmaParserOptions.md#cache)
- [cacheDir](FigmaParserOptions.md#cachedir)
- [cacheLifetime](FigmaParserOptions.md#cachelifetime)

## Properties

### cache

• **cache**: `boolean`

Whether cache should be used

**`Default`**

```ts
false
```

#### Defined in

packages/figma-parser/src/core/types.ts:13

___

### cacheDir

• **cacheDir**: `string`

Directory to store cached files

**`Default`**

```ts
.cache
```

#### Defined in

packages/figma-parser/src/core/types.ts:18

___

### cacheLifetime

• **cacheLifetime**: `number`

Defines how long cache should live. Cache file creation time is used, therefore it counts since first matching request.

**`Default`**

```ts
8 hours (1000 * 60 * 60 * 8)
```

#### Defined in

packages/figma-parser/src/core/types.ts:23
