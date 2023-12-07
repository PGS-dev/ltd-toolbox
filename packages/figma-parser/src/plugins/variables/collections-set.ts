import { Collection } from '../../collection'
import { FigmaVariable } from './variable'
import { FigmaVariableCollection } from './variable-collection'

export class CollectionsSet extends Collection<FigmaVariableCollection>{
  constructor(collections: FigmaVariableCollection[]) {
    super(collections)
  }

  table(): void {
    const lines = Array.from(this).map((collection) => ({
      name: collection?.name,
      id: collection?.id,
      type: collection?.length,
      hiddenFromPublishing: collection?.hiddenFromPublishing,
    }));

    console.table(lines);
  }

  publishable() {
    const items = this._filter(collection => !collection.hiddenFromPublishing)
    return new CollectionsSet(items)
  }

  getByName(name: string) {
    return this.find((collection) => collection.name === name)
  }

  findVariable(predicate: (variable: FigmaVariable) => boolean) {
    for (let i = 0; i <= this.length - 1; i++) {
      const variable = this[i].findVariable(predicate)
      if (variable) return variable
    }
    return
  }

  *[Symbol.iterator]() {
    for (let i = 0; i <= this.length - 1; i++) {
      yield this[i];
    }
  }

}
