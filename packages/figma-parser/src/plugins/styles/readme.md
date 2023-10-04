# Styles Plugin
This plugin allows for fetching styles from given figma file.

```js
const parser = new FigmaParser(TOKEN, {
  plugins: [FigmaParserStylesPlugin]
})

const fileStyles = await parser.styles('<fileId>')

console.log(fileStyles)

// [
//   {
//     styleMeta: {
//       ...
//     },
//     nodeData: {
//       ...
//     }
//   }
// ]
```

## Converting to design tokens

File styles data can be converted to [Design Tokens](https://tr.designtokens.org/format/) format 

```js
const parser = new FigmaParser(TOKEN, {
  plugins: [FigmaParserStylesPlugin]
})

const fileStyles = await parser.styles('<fileId>')

const designTokens = fileStyles.designTokens()

console.log(designTokens['colors/primary/500'])
```

## Transforming 

File styles can be transformed using cusotm transform function using `.transform()` method.


```javascript
const Filter = (type) => {
  return (input) => input.filter(style => style.type === type)
}

const colorStyles = fileStyles.transform(Filter('color'))
```

You can also pipe transforms:

```javascript
import { DesignTokens } from '@ltd-toolbox/figma-parser/plugins/styles/transformers/design-tokens'

const Filter = (type) => {
  return (input) => input.filter(style => style.type === type)
}

const PrefixNames = (input) => input.map( definition => definition.name = `prefix/${definition.name}` )

const colorStyles = fileStyles.transform(Filter('color'), PrefixNames, DesignTokens())
```


