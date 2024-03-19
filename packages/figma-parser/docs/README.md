@ltd-toolbox/figma-parser / [Modules](modules.md)

# Figma Parser: A toolkit for the Figma REST API

Welcome to Figma Parser, your go-to toolkit for effortlessly navigating and extracting data from the Figma REST API. This comprehensive suite of tools is designed to simplify your workflow, enabling you to focus on creating rather than on parsing complexities.

## API 
Please check out [API Docs](docs/modules.md)

## Quick start

Jumpstart your project with Figma Parser using this straightforward guide:

```typescript
import { figmaApi, getDocument } from '@ltd-toolbox/figma-parser'

(async () => {
  // Initialize the Figma API with your Personal Access Token
  const api = figmaApi(FIGMA_PAT_TOKEN)

  // Retrieve and parse your Figma document with ease
  const document = await getDocument(api, 'FIGMAFILEID')
  
  // Conveniently display a table of all nodes within your document
  document.children.table()
})()
```

## Modular architecture

Figma Parser is crafted with a modular approach at its core. This design philosophy ensures that you can seamlessly integrate your own custom tools or enhance the existing ones to suit your specific needs, making it a highly versatile toolkit for developers.

### `figmaApi` - core utility

```typescript
import { figmaApi } from '@ltd-toolbox/figma-parser'
```

At the heart of Figma Parser is the `figmaApi` utility. This essential tool not only facilitates caching to optimize performance but also simplifies HTTP requests by managing authentication for you. Should you require more advanced functionality or encounter any issues, you're free to substitute it with your implementation, provided it adheres to our straightforward `FigmaApiInterface`:

```typescript
export interface FigmaApiInterface {
  request<Response = object>(path: string, params?: Record<string, string>): Promise<Response>
}
```
Certainly, here are the rephrased sections to match the updated documentation style:

### `getDocument` - navigating Figma documents with ease

```typescript
import { getDocument } from '@ltd-toolbox/figma-parser'
import { getDocument } from '@ltd-toolbox/figma-parser/document'
```

Dive deep into the structure of your Figma documents with the `getDocument` utility. This tool is your gateway to efficiently traversing the Figma document tree, empowering you to pinpoint and select the nodes you need with precision. Whether you prefer to navigate through methodical functions or harness the flexibility of **glob patterns**, the `getDocument` utility ensures you have the capabilities at your fingertips. Explore our API for more detailed guidance.

### `getStyles` - extracting styles with precision

```typescript
import { getStyles } from '@ltd-toolbox/figma-parser'
import { getStyles } from '@ltd-toolbox/figma-parser/styles'
```

The `getStyles` feature is your solution to accessing published style information from any specified Figma file. Utilize this tool to peruse through styles or to create design tokens in the standardized [Design Tokens Format](https://design-tokens.github.io/community-group/format/). This functionality not only simplifies the process of understanding style applications but also enhances your ability to implement consistent design principles across your projects.

### `getVariables` - leveraging variables for advanced customization

> NOTE: Accessing the variables endpoint requires an enterprise plan.

```typescript
import { getVariables } from '@ltd-toolbox/figma-parser'
import { getVariables } from '@ltd-toolbox/figma-parser/variables'
```

Unlock the full potential of Figma's customization capabilities with the `getVariables` function. This advanced feature fetches all local variables from your Figma file, allowing you to navigate, resolve aliases, or determine final values and modes with unparalleled ease. Moreover, it facilitates the generation of design token definitions adhering to the [Design Tokens Format](https://design-tokens.github.io/community-group/format/), providing a structured and efficient approach to managing your design systems.

### `getContents` - rich content extraction

```typescript
import { getContents } from '@ltd-toolbox/figma-parser'
import { getContents } from '@ltd-toolbox/figma-parser/contents'
```

Unlock the narrative within your Figma files with the `getContents` utility, a sophisticated tool designed to extract the textual content from your designs. This feature delves into your document's structure, retrieving text from layers and transforming it into an easy to process syntax tree.

Whether you're aiming to document your design system, generate readable content, or create structured data from your Figma designs, `getContents` offers the flexibility and precision needed for detailed content extraction and transformation thanks to customizable getters for fine-tuned content retrieval.

## Creating custom tools

Creating custom tools is as simple as crafting an asynchronous function that utilizes the `figmaApi` and any additional parameters you deem necessary.

```typescript
import { FigmaApiInterface } from '@ltd-toolbox/figma-parser'
import { GetFileResponse } from '@figma/rest-api-spec'

export async function getImages(api: FigmaApiInterface, fileId: string, imagePrefix = 'img:') {
  const file = await api.request<GetFileResponse>(`files/${fileId}`);

  return node.filterDeep((node) => node.name.startsWith(imagePrefix))
}
```

Using your custom tools is equally straightforward:

```typescript
import { figmaApi } from '@ltd-toolbox/figma-parser'
import { getImages } from './tools/get-images'

(async () => {
  const api = figmaApi(TOKEN, { hardCache: true })
  
  const images = await getImages(api, 'FIGMAFILEID', '[image]')

  console.log(images)
})()
```

Embrace the power of Figma Parser to elevate your Design Systems to another level. Whether you're extending functionality with custom tools or leveraging the robust capabilities of Figma Parser, this toolkit is here to streamline your interaction with the Figma REST API.
