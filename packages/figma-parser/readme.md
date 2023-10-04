# Figma Parser

Tool for parsing and traversing through figma files. 

## Plugins
You can use multiple different plugins with Figma Parser, for example:

- Document (loaded by default) - allows for traversing Figma document using convinient API
- Styles - Fetches and parses Style information from Figma document. It also can export these information using [W3C Desgin Tokens Format](https://tr.designtokens.org/format/) for known styles.
- HardCache - Caches File requests for better performance. 

All plugins are exported and you can use them as you want.

```javascript
import { FigmaParser } from '@ltd-toolbox/figma-parser/parser'
import { Styles } from '@ltd-toolbox/figma-parser/plugins/styles'

(async() => {
  const parser = new FigmaParser(TOKEN, {
    plugins: [Styles],
  })

  const document = await parser.styles('<fileId>')

  // [...]
})()
```

## Loading plugins

It is possible to load plugins using constructor, or `.use()` metthod:

```javascript
const parser = new FigmaParser(TOKEN)

parser.use(HardCache, Styles)
```

```javascript
const parser = new FigmaParser(TOKEN, {
  plugins: [HardCache, Styles]
})
```
## Plugins options

Plugins can extend default parser options. For example `HardCache` Plugin extends options by `hardCache: boolean`

```javascript
  const parser = new FigmaParser(TOKEN, {
    plugins: [Styles],
    hardCache: true // Option added by HardCache plugin.
  })
```
