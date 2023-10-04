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

## Transforming output

```js
const parser = new FigmaParser(TOKEN, {
  plugins: [FigmaParserStylesPlugin]
})

```
