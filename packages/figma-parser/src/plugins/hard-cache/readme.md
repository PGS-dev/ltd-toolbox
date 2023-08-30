# Hard Cache Plugin
This plugin allows to store request responses in cache.

```js
const parser = new FigmaParser('<token>', {
  plugins: [HardCache]
})

const response = await parser.request('<...>')

console.log(response)
```

## Transforming output
```js
const parser = new FigmaParser('<token>', {
  plugins: [FigmaParserStylesPlugin]
})
```
