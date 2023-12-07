# Hard Cache Plugin

This plugin allows to store request responses in cache.

```js
const parser = new FigmaParser(TOKEN, {
  plugins: [HardCachePlugin],
});

const response = await parser.request('<fileId>');

console.log(response);
```

## Transforming output

```js
const parser = new FigmaParser(TOKEN, {
  plugins: [StylesPlugin],
});
```
