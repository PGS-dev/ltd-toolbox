# Figma Parser

Tool for parsing and traversing through figma files. 

## Plugins
You can use multiple different plugins with Figma Parser, for example:

- [HardCache](./src/plugins/hard-cache/readme.md) - Caches File requests for better performance. 
- [Document](./src/plugins/document/readme.md) - **default** - allows for traversing Figma document using convinient API
- [Styles](./src/plugins/styles/readme.md) - Fetches and parses Style information from Figma document. It also can export these information using [W3C Desgin Tokens Format](https://tr.designtokens.org/format/) for known styles.
- [Markdown](./src/plugins/markdown/readme.md) - Converts fetched text to plain markdown or markdown AST. Supports plugins for building own transformers. 


## Quick start

Default export with all plugins loaded by default:

```typescript
import figmaParser from '@ltd-toolbox/figma-parser'

(async () => {
  const parser = figmaParser(TOKEN)
  
  const styles = parser.styles(stylesFileId)
  const tokens = styles.designTokens()
  
  const docsFile = parser.document(documentationFileId)
  const docsNode = docsFile.find(node => node.name === 'Documentation')
  const docsMarkdown = parser.markdown(docsNode).toMarkdown();
})()
```

## Plugin Architecture

Figma Parser has its plugin architecture. You can run FigmaParser with plugins loaded by default, or with your own.

(More on [plugins](./src/plugins/readme.md) page)

```typescript
import { FigmaParser } from '@ltd-toolbox/figma-parser'

class CustomPlugin {
  constructor(private host: FigmaParser) {
    this.host.hello = this.hello.bind(this)
  }

  hello(person: string = 'world') {
    if (this.host?.options?.displayHello) {
      console.log(`Hello ${person}!`)
    }
  }

}

declare module "@ltd-toolbox/figma-parser" {
  // Extend main parser interface with new method 
  interface FigmaParser {
    hello(content: string): void;
  }

  // Extend main parser confing options with new property
  interface FigmaParserOptions {
    displayHello: boolean;
  }
}


(async () => {
  const parser = new FigmaParser(TOKEN, {
    plugins: [CustomPlugin],
    displayHello: true
  })

  parser.hello('You')
})()
```
