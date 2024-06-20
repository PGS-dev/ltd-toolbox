import type { Ctor } from '../types';
import { Filterable, type FilterableMixin } from './filterable.mixin';
import { Flattable, type FlattableMixin } from './flattable.mixin';
import { Mappable, type MappableMixin } from './mappable.mixin';
import { WithPath, type WithPathMixin } from './path.mixin';
import { Searchable, type SearchableMixin } from './searchable.mixin';
import { WithToArray, type WithToArrayMixin } from './to-array.mixin';
import { Traversable, type TraversableMixin } from './traversable.mixin';
import { Walkable, type WalkableMixin } from './walkable.mixin';

export function NodeUtils<Base extends Ctor>(BaseClass: Base) {
  return WithPath(Traversable(WithToArray(Filterable(Flattable(Mappable(Searchable(Walkable(BaseClass))))))));
}

export type NodeUtilsInterface<T> = WithPathMixin<T> & TraversableMixin<T> & WithToArrayMixin<T> & FilterableMixin<T> & FlattableMixin<T> & MappableMixin & SearchableMixin<T> & WalkableMixin<T>;
