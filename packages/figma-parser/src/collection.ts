interface CollectionItem {
  toString(): string
}

export abstract class Collection<Item extends CollectionItem = CollectionItem, Input extends any[] = any[]> {
  public readonly length: number = 0;

  [i: number]: Item;

  constructor(nodes?: Input)
  constructor(nodes?: Item[]) {
    if (!nodes) return
    let length = 0;

    nodes.forEach((item, index) => {
      this[index] = item
      length++;
    });

    this.length = length;
  }

  abstract table(): void

  toString() {
    const out: string[] = [];
    for (let i = 0; i <= this.length - 1; i++) {
      out.push(this[i].toString());
    }
    return out.join(", ");
  }

  at(index: number) {
    if (index > 0 && index > this.length - 1)
      throw new Error(
        `Maximum index for this collection is ${this.length - 1}`,
      );
    if (index < 0 && index < -this.length)
      throw new Error(`Minimum index for this collection is ${-this.length}`);

    if (index < 0) {
      return this[this.length + index];
    }

    return this[index];
  }

  find(predicate: (item: Item, index: number, collection: typeof this) => boolean): Item | undefined {
    for (let i = 0; i <= this.length - 1; i++) {
      if (predicate(this[i], i, this)) {
        return this[i];
      }
    }
    return
  }

  protected _filter<T>(predicate: T): Item[]
  protected _filter(predicate: (item: Item, index: number, collection: typeof this) => boolean): Item[] {
    const out: Item[] = [];

    for (let i = 0; i <= this.length - 1; i++) {
      if (predicate(this[i], i, this)) {
        out.push(this[i]);
      }
    }

    return out
  }

  protected _map<T = any>(callback: (item: Item, index: number, collection: typeof this) => T): T[] {
    const out: T[] = [];

    for (let i = 0; i <= this.length - 1; i++) {
      out.push(callback(this[i], i, this));
    }

    return out;
  }

  forEach(callback: (item: Item, index: number, collection: typeof this) => void): void {
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
