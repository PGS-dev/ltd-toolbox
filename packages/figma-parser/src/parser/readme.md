# Document Plugin

Plugin for traversing Figma document

```javascript
(async () => {
  const parser = new FigmaParser(TOKEN);

  const documentNode = await parser.document('<fileId>');
})();
```

`.document()` method returns `SingleNode`

## `SignleNode`

### `table`

Debugging method. Prints out table in console with name, id and type of the node

```javascript
documentNode.table();
```

### `toString`

returns node name

### `glob`

get nodes by glob pattern using layer names. Pattern is case insensitive.

```javascript
const canvasNodes = [];

const udageExamplesTitles = documentNode.glob('documentation/usage/examples/**/title');
```

### `walk`

Walk recursively through document and perform callback action.

```javascript
const canvasNodes = []

documentNode.walk((node: SingleNode, path: PathBreadcrumb[]) => {
  if (node.type === 'CANVAS') {
    canvasNodes.push(node)
  }
})
```

## `NodeCollection`

Iterable nodes colection keyed with index numbers.

```javascript
console.log(documentNode.children[1]) // Prints node with index of 1

for (const node of documentNode.children) {
  console.log(node.name)
}

const nodesArray = Array.from(documentNode.children)

for (const i; i < documentNode.length; i++) {
  console.log( documentNode[i] )
}
```

### `length`

Returns current length of the collection

### `parent`

Points to the parent of collection.

### `table`

Debugging methods. Prints out table with chilren nodes metadata.

```javascript
documentNode.children.table();
```

### `toString`

Returns string with node names.

```javascript
console.log(documentNode.children.toString());
```

### `at`

Selects specific node by its index. Also supports negative indexs for selecting nodes backwards.

```javascript
console.log(documentNode.children.at(4));
console.log(documentNode.children.at(-2));
```

### `get`

Selects specific child by predicate function and stops after returning first result.

```javascript
const iconNode = documentNode.children.get((node) => {});
```

### `id`

Gets node by its id.

```javascript
const descriptionNode = documentNode.children.id('123:456');
```

### `name`

Gets node by its name.

```javascript
const titleNode = documentNode.children.name('Section title');
```

### `filter`

filter nodes by predicate function and return new NodeCollection.

```javascript
const frameNodes = documentNode.children.filter((node) => node.type === 'FRAME');
```

### `each`

Iterates through nodes.

```javascript
documentNode.children.each((node) => {
  console.log(node.name);
});
```
