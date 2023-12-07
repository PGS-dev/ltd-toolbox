import { Color } from '../../full-figma-types'
import { CodeSyntax, Variable, VariableAlias, VariableCollection, VariableScope } from './types'
import { FigmaVariableCollection } from './variable-collection'

export class FigmaVariable {
  constructor(private original: Variable, public collection: FigmaVariableCollection) {
  }

  table() {
    console.table(this.original)
  }

  /**
   * The unique identifier of this variable.
   */
  get id(): string {
    return this.original.id;
  }

  /**
   * The name of this variable.
   */
  get name(): string {
    return this.original.name;
  }

  /**
   * The key of the variable.
   */
  get key(): string {
    return this.original.key;
  }

  /**
   * The id of the variable collection that contains this variable.
   */
  get variableCollectionId(): string {
    return this.original.variableCollectionId;
  }

  /**
   * The resolved type of the variable.
   */
  get resolvedType(): "BOOLEAN" | "FLOAT" | "STRING" | "COLOR" {
    return this.original.resolvedType;
  }

  /**
   * The values for each mode of this variable.
   */
  get valuesByMode(): Record<string, boolean | number | string | Color | VariableAlias> {
    return this.original.valuesByMode;
  }

  /**
   * Whether the variable is remote.
   */
  get remote(): boolean {
    return this.original.remote;
  }

  /**
   * Description of this variable.
   */
  get description(): string {
    return this.original.description;
  }

  /**
   * Whether this variable is hidden when publishing the current file as a library.
   * If the parent VariableCollection is marked as hiddenFromPublishing, then this variable will also be hidden from publishing via the UI. hiddenFromPublishing is independently toggled for a variable and collection. However, both must be true for a given variable to be publishable.
   */
  get hiddenFromPublishing(): boolean {
    return this.original.hiddenFromPublishing;
  }

  /**
   * An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields.
   *
   * Setting scopes for a variable does not prevent that variable from being bound in other scopes (for example, via the Plugin API). This only limits the variables that are shown in pickers within the Figma UI.
   */
  get scopes(): VariableScope[] {
    return this.original.scopes;
  }

  /**
   * Code syntax definitions for this variable. Code syntax allows you to represent variables in code using platform-specific names, and will appear in Dev Mode's code snippets when inspecting elements using the variable.
   */
  get codeSyntaxVariable(): CodeSyntax {
    return this.original.codeSyntaxVariable;
  }

}

