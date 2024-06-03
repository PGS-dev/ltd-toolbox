import type { LocalVariable, LocalVariableCollection, RGBA } from '@figma/rest-api-spec';
import type { DesignToken, DesignTokenType, DesignTokensFormat, DesignTokensFormatDeep, DesignTokensFormatFlat } from '../shared/design-tokens-format.types';
import { entriesToDeepObject } from '../shared/entries-to-deep-object.util';
import { rgbaToHexa } from '../shared/rgba-to-hex.util';
import type { CollectionsSet } from './collections-set';
import { GetVariablesError } from './get-variables.error';
import { FigmaLocalVariable } from './variable';

const resolveTokenType = (variable: FigmaLocalVariable): DesignTokenType => {
  if (variable.resolvedType === 'COLOR') return 'color';

  if (variable.resolvedType === 'FLOAT' && variable.scopes.includes('WIDTH_HEIGHT')) return 'dimension';

  if (variable.resolvedType === 'FLOAT') return 'number';

  return 'unknown';
};

const resolvedTokenValue = (variable: FigmaLocalVariable, mode: string): string | number | boolean => {
  const value = variable.resolveValue(mode);

  if (variable.resolvedType === 'COLOR') return rgbaToHexa(value as RGBA);

  return value as string | number | boolean;
};

const tokenValue = (variable: FigmaLocalVariable, mode: string): string | number | boolean => {
  return variable.value(mode) as string | number | boolean;
};

interface DesignTokensTransformOptions {
  resolveAliases: boolean;
  deep: boolean;
}

class Data {
  constructor(readonly raw: LocalVariableCollection) {}

  get name() {
    return this.raw.name;
  }

  get id() {
    return this.raw.id;
  }

  get key() {
    return this.raw.key;
  }

  get modes() {
    return this.raw.modes;
  }

  get defaultModeId() {
    return this.raw.defaultModeId;
  }

  get remote() {
    return this.raw.remote;
  }

  get hiddenFromPublishing() {
    return this.raw.hiddenFromPublishing;
  }
}

export class FigmaLocalVariableCollection extends Data {
  length: number = 0;
  [i: number]: FigmaLocalVariable;

  constructor(
    readonly raw: LocalVariableCollection,
    public setRef: CollectionsSet,
    variables?: FigmaLocalVariable[] | LocalVariable[]
  ) {
    super(raw);
    let length = 0;

    if (variables && Array.isArray(variables) && variables.length > 0) {
      variables.forEach((variable, index) => {
        this[index] = variable instanceof FigmaLocalVariable ? variable : new FigmaLocalVariable(variable, this);
        length++;
      });
    }

    this.length = length;
  }

  /**
   * Adds a variable to the collection. If the variable is not already an instance of FigmaLocalVariable, it is converted.
   */
  push(variable: LocalVariable | FigmaLocalVariable) {
    const localVariable = variable instanceof FigmaLocalVariable ? variable.raw : variable;
    this[this.length] = new FigmaLocalVariable(localVariable, this);
    this.length++;
  }

  /**
   * Displays a table in the console listing properties of each variable in the collection, including name, ID, type, and hiddenFromPublishing status.
   */
  table() {
    const lines = Array.from(this).map((variable) => ({
      name: variable.id,
      id: variable?.name,
      type: variable?.resolvedType,
      hiddenFromPublishing: variable?.hiddenFromPublishing,
    }));

    console.table(lines);
  }

  /**
   * Checks if a mode by the given name exists within the collection.
   */
  modeExists(modeName: string) {
    return !!this.raw.modes.find(({ name }) => name === modeName);
  }

  /**
   * Retrieves the mode ID for a given mode name. If the name is not found, returns the default mode ID.
   */
  getModeId(name?: string) {
    return this.raw.modes.find((mode) => mode.name === name)?.modeId || this.raw.defaultModeId;
  }

  /**
   * Generates design tokens for a given mode. This method can produce tokens in a flat or deep format, based on user options.
   */
  designTokensByMode(mode: string): DesignTokensFormatFlat;
  designTokensByMode(mode: string, userOptions: { deep: false }): DesignTokensFormatFlat;
  designTokensByMode(mode: string, userOptions: { deep: true }): DesignTokensFormatDeep;
  designTokensByMode(mode: string, userOptions?: Partial<DesignTokensTransformOptions>): DesignTokensFormat {
    const options: DesignTokensTransformOptions = {
      resolveAliases: true,
      deep: false,
      ...userOptions,
    };

    const output: [string, DesignToken][] = [];

    for (let i = 0; i <= this.length - 1; i++) {
      const variable = this[i];
      const token: DesignToken = {
        $type: resolveTokenType(variable),
        $value: options.resolveAliases ? resolvedTokenValue(variable, mode) : tokenValue(variable, mode),
      };

      if (variable.description) {
        token.$description = variable.description;
      }

      output.push([variable.name.replaceAll('/', '.').replaceAll(' ', '-'), token]);
    }

    if (options.deep) {
      return entriesToDeepObject(output);
    }

    return Object.fromEntries(output);
  }

  /**
   * Finds the first variable that satisfies the provided testing function.
   */
  find(predicate: (item: FigmaLocalVariable, index: number, collection: typeof this) => boolean): FigmaLocalVariable | undefined {
    for (let i = 0; i <= this.length - 1; i++) {
      if (predicate(this[i], i, this)) {
        return this[i];
      }
    }
    return;
  }

  /**
   * Creates a new variable collection containing all variables that match the predicate test.
   */
  filter(predicate: (item: FigmaLocalVariable, index: number, collection: FigmaLocalVariableCollection) => boolean): FigmaLocalVariableCollection {
    const out: FigmaLocalVariable[] = [];

    for (let i = 0; i <= this.length - 1; i++) {
      if (predicate(this[i], i, this)) {
        out.push(this[i]);
      }
    }

    return new FigmaLocalVariableCollection(this.raw, this.setRef, out);
  }

  /**
   * Transforms the collection of variables into an array of a specified type based on a transformation function.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  map<T = any>(callback: (item: FigmaLocalVariable, index: number, collection: FigmaLocalVariableCollection) => T): T[] {
    const out: T[] = [];

    for (let i = 0; i <= this.length - 1; i++) {
      out.push(callback(this[i], i, this));
    }

    return out;
  }

  /**
   * Retrieves the variable at a specified index within the collection.
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
   * Executes a provided function once for each variable in the collection.
   */
  forEach(callback: (item: FigmaLocalVariable, index: number, collection: FigmaLocalVariableCollection) => void): void {
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
