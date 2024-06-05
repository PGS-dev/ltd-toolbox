import { Filterable } from './node-mixins/filterable.mixin';
import { Flattable } from './node-mixins/flattable.mixin';
import { Mappable } from './node-mixins/mappable.mixin';
import { WithPath } from './node-mixins/path.mixin';
import { Searchable } from './node-mixins/searchable.mixin';
import { WithToArray } from './node-mixins/to-array.mixin';
import { Traversable } from './node-mixins/traversable.mixin';
import { Walkable } from './node-mixins/walkable.mixin';
import { ParentNode } from './parent.node';

export class RichParentNode extends WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(ParentNode)))))))) {}
