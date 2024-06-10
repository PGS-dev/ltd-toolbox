# @ltd-toolbox/figma-node-classes

This package contains classes for all node types. Classes are generated from OpenAPI declaration from `@figma/rest-api-spec` package. Node classes are generated for the purposes of `@ltd-toolbox/figma-node-classes`, however feel free to use it if you find it useful ;).

## Why ?

Beacuse it is easier to debug nodes when you get an output like this 

```bash
$ node fetch-nodes.js

FrameNode {
  ...
  children: [
    LineNode { ... }
    TextNode { ... }
  ]
}
```

and you don't have to look for type field, that describes the kind of the node.

More of that, I wanted to store node information inside classes along with all the utility methods for traversing and manipulating nodes. 

## Node classes
There are 26 node classes:

- DocumentNode,
- CanvasNode,
- BooleanOperationNode,
- SectionNode,
- FrameNode,
- GroupNode,
- ComponentNode,
- ComponentSetNode,
- VectorNode,
- StarNode,
- LineNode,
- EllipseNode,
- RegularPolygonNode,
- RectangleNode,
- TextNode,
- TableNode,
- TableCellNode,
- SliceNode,
- InstanceNode,
- EmbedNode,
- LinkUnfurlNode,
- StickyNode,
- ShapeWithTextNode,
- ConnectorNode,
- WashiTapeNode,
- WidgetNode

`SubcanvasNode` is an unity type for all nodes except `DocumentNode` and `CanvasNode`.

## Helper functions 

There are some helper functions available for determinging the type od the nodes:
- `is*Node()`, e.g. `isFreameNode()` - Determines whether passed node is given node type
- `hasChildren()` - Returns true if node is kind of node that supposed to have children nodes
- `createNode()` - Node factory that creates the node instance for passed object

## types

Apart from class types definitions, there are also some utillity types available:

- `Raw*` node types - node types reexported from `@figma/rest-api-spec` package.
- `NodeTypes` - Union of all available node type names (e.g. 'TEXT', 'FRAME', etc.)
- `NodeConstructors` - Union of all available node consturctors
- `TypeOfRawNode<T>` - Returns the node type name for the object of `Raw*` type.
- `InstanceByRawNode<T>` - returns class instance type for object of `Raw*` type 
