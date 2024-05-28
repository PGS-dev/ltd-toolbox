import type { LocalVariable, RGBA, VariableAlias, VariableCodeSyntax, VariableScope } from '@figma/rest-api-spec';
import { FigmaLocalVariableCollection } from './variable-collection';

export const isVariableAlias = (value: unknown): value is VariableAlias => !!value && typeof value === 'object' && 'type' in value && value.type === 'VARIABLE_ALIAS';

class Data implements LocalVariable {
  constructor(public raw: LocalVariable) {}

  /**
   * The unique identifier of this variable.
   */
  get id(): string {
    return this.raw.id;
  }

  /**
   * The name of this variable.
   */
  get name(): string {
    return this.raw.name;
  }

  /**
   * The key of the variable.
   */
  get key(): string {
    return this.raw.key;
  }

  /**
   * The id of the variable collection that contains this variable.
   */
  get variableCollectionId(): string {
    return this.raw.variableCollectionId;
  }

  /**
   * The resolved type of the variable.
   */
  get resolvedType(): 'BOOLEAN' | 'FLOAT' | 'STRING' | 'COLOR' {
    return this.raw.resolvedType;
  }

  /**
   * The values for each mode of this variable.
   */
  get valuesByMode(): Record<string, boolean | number | string | RGBA | VariableAlias> {
    return this.raw.valuesByMode;
  }

  /**
   * Whether the variable is remote.
   */
  get remote(): boolean {
    return this.raw.remote;
  }

  /**
   * Description of this variable.
   */
  get description(): string {
    return this.raw.description;
  }

  /**
   * Whether this variable is hidden when publishing the current file as a library.
   * If the parent VariableCollection is marked as hiddenFromPublishing, then this variable will also be hidden from publishing via the UI. hiddenFromPublishing is independently toggled for a variable and collection. However, both must be true for a given variable to be publishable.
   */
  get hiddenFromPublishing(): boolean {
    return this.raw.hiddenFromPublishing;
  }

  /**
   * An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields.
   *
   * Setting scopes for a variable does not prevent that variable from being bound in other scopes (for example, via the Plugin API). This only limits the variables that are shown in pickers within the Figma UI.
   */
  get scopes(): VariableScope[] {
    return this.raw.scopes;
  }

  /**
   * Code syntax definitions for this variable. Code syntax allows you to represent variables in code using platform-specific names, and will appear in Dev Mode's code snippets when inspecting elements using the variable.
   */
  get codeSyntax(): VariableCodeSyntax {
    return this.raw.codeSyntax;
  }
}

export class FigmaLocalVariable extends Data {
  constructor(
    public raw: LocalVariable,
    public collection: FigmaLocalVariableCollection
  ) {
    super(raw);
  }

  /**
   * Prints a table in the console that lists the properties of this variable, including id, name, key, and others.
   */
  table() {
    console.table(this.raw);
  }

  /**
   * Determines if a specific mode has a defined value for this variable.
   */
  hasValueForMode(name: string) {
    return !!this.valueByMode(name);
  }

  /**
   * Retrieves the value of the variable for a specified mode. If no mode is specified, it returns the default value.
   */
  valueByMode(modeName?: string) {
    if (!modeName) return this.defaultValue();

    const modeId = this.collection.getModeId(modeName);

    if (!modeId) return this.defaultValue();

    return this.raw.valuesByMode[modeId];
  }

  /**
   * Gets the default value of the variable, which is the value for the collection's default mode.
   */
  defaultValue() {
    return this.valuesByMode[this.collection.defaultModeId];
  }

  /**
   * Resolves the final value of an alias for a given mode, recursively resolving nested aliases if necessary.
   */
  resolveAliasValueForMode(alias: VariableAlias, name: string): string | number | boolean | RGBA {
    const aliassedVariable = this.collection.setRef.getVariableById(alias.id);

    const value = aliassedVariable.valueByMode(name);

    if (!isVariableAlias(value)) return value;

    return aliassedVariable.resolveAliasValueForMode(value as VariableAlias, name);
  }

  /**
   * Resolves the value of the variable for a given mode, taking into account potential aliases.
   */
  resolveValue(name: string): string | number | boolean | RGBA {
    const value = this.valueByMode(name);

    if (isVariableAlias(value)) return this.resolveAliasValueForMode(value, name);

    return value;
  }

  /**
   * Retrieves the value of the variable for a specified mode, formatting it as a reference string if it's an alias.
   */
  value(name: string): string | number | boolean | RGBA {
    const value = this.valueByMode(name);

    if (isVariableAlias(value)) {
      const aliasedVariable = this.collection.setRef.getVariableById(value.id);

      return `{${aliasedVariable.name.replaceAll('/', '.')}}`;
    }

    return value;
  }
}
