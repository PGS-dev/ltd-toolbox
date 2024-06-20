[@ltd-toolbox/figma-parser - v0.1.0-alpha.7](../README.md) / [Exports](../modules.md) / ParseTreeOptions

# Interface: ParseTreeOptions

## Table of contents

### Properties

- [defaultGetter](ParseTreeOptions.md#defaultgetter)
- [omitEmpty](ParseTreeOptions.md#omitempty)
- [omitFauxNodes](ParseTreeOptions.md#omitfauxnodes)

## Properties

### defaultGetter

• **defaultGetter**: [`GetterGetFn`](../modules.md#gettergetfn)

Default getter for nodes that don't pass the test of any of provided getters.
By default it returns an empty object, which then is ommited, when `omitEmpty` is set to true.
You can use it for example to find all unkown nodes

**`Example`**

```ts

```

**`Example`**

```typescript
 defaultGetter: (node) => ({
   type: 'unknown',
   data: node.getFormattedContents()
 })
```

#### Defined in

packages/figma-parser/src/contents/types.ts:130

___

### omitEmpty

• **omitEmpty**: `boolean`

Whether omit the nodes that returned an empty object, or not.
Use this option if you want to have clean tree of nodes without additional rubish.

**`Default`**

```ts
true
```

#### Defined in

packages/figma-parser/src/contents/types.ts:109

___

### omitFauxNodes

• **omitFauxNodes**: `boolean`

Whether nodes that's only property is `children` should be skipped, or not.

#### Defined in

packages/figma-parser/src/contents/types.ts:113
