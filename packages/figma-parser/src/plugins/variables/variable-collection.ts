import { Collection } from '../../collection'
import { CollectionsSet } from './collections-set'
import { Variable, VariableCollection } from './types'
import { FigmaVariable } from './variable'

export class FigmaVariableCollection extends Collection<FigmaVariable, FigmaVariable[] | Variable[]> {
  public readonly length: number = 0;

  constructor(variables: FigmaVariable[] | Variable[], private readonly meta: VariableCollection) {
    super();
    let length = 0;

    variables.forEach((variable, index) => {
      this[index] = variable instanceof FigmaVariable ? variable : new FigmaVariable(variable, this);
      length++;
    });

    this.length = length;
  }

  get name() {
    return this.meta.name
  }

  get id() {
    return this.meta.id
  }

  get key() {
    return this.meta.key
  }

  get modes() {
    return this.meta.modes
  }

  get defaultModeId() {
    return this.meta.defaultModeId
  }

  get remote() {
    return this.meta.remote
  }

  get hiddenFromPublishing() {
    return this.meta.hiddenFromPublishing
  }

  table() {
    const lines = Array.from(this).map((variable) => ({
      name: variable.id,
      id: variable?.name,
      type: variable?.value,
      hiddenFromPublishing: variable?.hiddenFromPublishing,
    }));

    console.table(lines);
  }

  findVariable(predicate: (variable: FigmaVariable) => boolean) {
    return this.find(predicate)
  }

  filter(predicate: (collection: FigmaVariableCollection, index: number, set: CollectionsSet) => boolean) {
    const items = this._filter(predicate)
    return new FigmaVariableCollection(items, this.meta);
  }

  getByName(name: string): FigmaVariable | undefined {
    return this.find(variable => variable.name === name)
  }
}
