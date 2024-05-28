import { LocalVariable, LocalVariableCollection } from '@figma/rest-api-spec';
import { GetVariablesError } from './get-variables.error'
import { FigmaLocalVariableCollection } from './variable-collection';

export class CollectionsSet {
  length: number = 0;
  [i: number]: FigmaLocalVariableCollection;

  constructor(collections: { [key: string]: LocalVariableCollection }, variablesRef: { [key: string]: LocalVariable }) {
    if (!collections) return;
    let length = 0;

    Object.values(collections).map((collection, index) => {
      const collectionInstance = new FigmaLocalVariableCollection(collection, this);

      collection.variableIds.forEach((id) => {
        collectionInstance.push(variablesRef[id]);
      });

      this[index] = collectionInstance;
      length++;
    });

    this.length = length;
  }

  /**
   * Prints a table in the console listing the name, ID, type, and hiddenFromPublishing status of each collection in the set.
   */
  table(): void {
    const lines = Array.from(this).map((collection) => ({
      name: collection?.name,
      id: collection?.id,
      type: collection?.length,
      hiddenFromPublishing: collection?.hiddenFromPublishing,
    }));

    console.table(lines);
  }

  /**
   * Retrieves a collection by its name.
   */
  getByName(name: string) {
    return this.find((collection) => collection.name === name);
  }

  /**
   * Retrieves a variable by its ID from any collection within the set.
   * Throws an error if no variable with the given ID is found.
   */
  getVariableById(id: string) {
    for (let i = 0; i <= this.length - 1; i++) {
      const variable = this[i].find((variable) => variable.id === id);
      if (variable) return variable;
    }

    throw new GetVariablesError(`Couldn't find variable with id: ${id}`);
  }

  /**
   * Finds the first collection in the set that satisfies the provided testing function.
   */
  find(predicate: (item: FigmaLocalVariableCollection, index: number, collection: CollectionsSet) => boolean): FigmaLocalVariableCollection | undefined {
    for (let i = 0; i <= this.length - 1; i++) {
      if (predicate(this[i], i, this)) {
        return this[i];
      }
    }
    return;
  }

  /**
   * Creates a new array with all collections that pass the test implemented by the provided function.
   */
  filter(predicate: (item: FigmaLocalVariableCollection, index: number, collection: typeof this) => boolean): FigmaLocalVariableCollection[] {
    const out: FigmaLocalVariableCollection[] = [];

    for (let i = 0; i <= this.length - 1; i++) {
      if (predicate(this[i], i, this)) {
        out.push(this[i]);
      }
    }

    return out;
  }
  /**
   * Creates an array of results by calling a provided function on every collection in the set.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  map<T = any>(callback: (item: FigmaLocalVariableCollection, index: number, collection: typeof this) => T): T[] {
    const out: T[] = [];

    for (let i = 0; i <= this.length - 1; i++) {
      out.push(callback(this[i], i, this));
    }

    return out;
  }

  /**
   * Retrieves the collection at a specified index, supporting positive and negative indexing.
   * Throws an error if the index is out of bounds.
   */
  at(index: number) {
    if (index > 0 && index > this.length - 1) throw new GetVariablesError(`Maximum index for this collection is ${this.length - 1}`);
    if (index < 0 && index < -this.length) throw new GetVariablesError(`Minimum index for this collection is ${-this.length}`);

    if (index < 0) {
      return this[this.length + index];
    }

    return this[index];
  }

  /**
   * Executes a provided function once for each collection in the set.
   */
  forEach(callback: (item: FigmaLocalVariableCollection, index: number, collection: typeof this) => void): void {
    for (let i = 0; i <= this.length - 1; i++) {
      callback(this[i], i, this);
    }
  }

  *[Symbol.iterator]() {
    for (let i = 0; i <= this.length - 1; i++) {
      yield this[i];
    }
  }
}
