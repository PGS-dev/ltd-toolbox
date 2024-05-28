[@ltd-toolbox/figma-parser - v0.1.0-alpha.5](../README.md) / [Modules](../modules.md) / [dev](../modules/dev.md) / FigmaParserOptions

# Interface: FigmaParserOptions

[dev](../modules/dev.md).FigmaParserOptions

## Table of contents

### Properties

- [cache](dev.FigmaParserOptions.md#cache)
- [cacheDir](dev.FigmaParserOptions.md#cachedir)
- [cacheLifetime](dev.FigmaParserOptions.md#cachelifetime)
- [silent](dev.FigmaParserOptions.md#silent)

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

___

### silent

• **silent**: `boolean`

Whether

#### Defined in

packages/figma-parser/src/core/types.ts:27
