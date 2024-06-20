[@ltd-toolbox/figma-parser - v0.1.0-alpha.7](../README.md) / [Exports](../modules.md) / ImageOptions

# Interface: ImageOptions

## Table of contents

### Properties

- [contents\_only](ImageOptions.md#contents_only)
- [format](ImageOptions.md#format)
- [scale](ImageOptions.md#scale)
- [svg\_include\_id](ImageOptions.md#svg_include_id)
- [svg\_include\_node\_id](ImageOptions.md#svg_include_node_id)
- [svg\_outline\_text](ImageOptions.md#svg_outline_text)
- [svg\_simplify\_stroke](ImageOptions.md#svg_simplify_stroke)
- [use\_absolute\_bounds](ImageOptions.md#use_absolute_bounds)

## Properties

### contents\_only

• **contents\_only**: `boolean`

Whether content that overlaps the node should be excluded from rendering. Passing false (i.e., rendering overlaps) may increase processing time, since more of the document must be included in rendering.

**`Default`**

```ts
true
```

#### Defined in

packages/figma-parser/src/contents/types.ts:174

___

### format

• **format**: ``"jpg"`` \| ``"png"`` \| ``"svg"`` \| ``"pdf"``

A string enum for the image output format, can be jpg, png, svg, or pdf

#### Defined in

packages/figma-parser/src/contents/types.ts:142

___

### scale

• **scale**: `number`

A number between 0.01 and 4, the image scaling factor

#### Defined in

packages/figma-parser/src/contents/types.ts:137

___

### svg\_include\_id

• **svg\_include\_id**: `boolean`

Whether to include id attributes for all SVG elements. Adds the layer name to the id attribute of an svg element.

**`Default`**

```ts
false
```

#### Defined in

packages/figma-parser/src/contents/types.ts:156

___

### svg\_include\_node\_id

• **svg\_include\_node\_id**: `boolean`

Whether to include node id attributes for all SVG elements. Adds the node id to a data-node-id attribute of an svg element.

**`Default`**

```ts
false
```

#### Defined in

packages/figma-parser/src/contents/types.ts:162

___

### svg\_outline\_text

• **svg\_outline\_text**: `boolean`

Whether text elements are rendered as outlines (vector paths) or as <text> elements in SVGs.
Rendering text elements as outlines guarantees that the text looks exactly the same in the SVG as it does in the browser/inside Figma.
Exporting as <text> allows text to be selectable inside SVGs and generally makes the SVG easier to read. However, this relies on the browser's rendering engine which can vary between browsers and/or operating systems. As such, visual accuracy is not guaranteed as the result could look different than in Figma.

**`Default`**

```ts
true
```

#### Defined in

packages/figma-parser/src/contents/types.ts:150

___

### svg\_simplify\_stroke

• **svg\_simplify\_stroke**: `boolean`

Whether to simplify inside/outside strokes and use stroke attribute if possible instead of <mask>.

**`Default`**

```ts
true
```

#### Defined in

packages/figma-parser/src/contents/types.ts:168

___

### use\_absolute\_bounds

• **use\_absolute\_bounds**: `boolean`

Use the full dimensions of the node regardless of whether or not it is cropped or the space around it is empty. Use this to export text nodes without cropping.

**`Default`**

```ts
false
```

#### Defined in

packages/figma-parser/src/contents/types.ts:180
