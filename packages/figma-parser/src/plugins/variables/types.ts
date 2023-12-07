import { Color } from '../../full-figma-types'

export interface VariableResponse {
  status: number
  error: boolean
  meta: {
    variables: Record<string, Variable>;
    variableCollections: Record<string, VariableCollection>;
  }
}


/**
 * A grouping of related Variable objects each with the same modes.
 */
export interface VariableCollection {
  /**
   * The unique identifier of this variable collection.
   */
  id: string

  /**
   * The name of this variable collection.
   */
  name: string

  /**
   * The key of the variable collection.
   */
  key: string

  /**
   * The list of modes defined for this variable collection.
   */
  modes: { modeId: string, name: string }[]

  /**
   * The id of the default mode.
   */
  defaultModeId: string

  /**
   * Whether the variable collection is remote.
   */
  remote: boolean

  /**
   * Whether this variable collection is hidden when publishing the current file as a library.
   */
  hiddenFromPublishing: boolean

  /**
   * The ids of the variables in the collection. Note that the order of these variables is roughly the same as what is shown in Figma Design, however it does not account for groups. As a result, the order of these variables may not exactly reflect the exact ordering and grouping shown in the authoring UI.
   */
  variableIds: string[]
}

export interface VariableAlias {
  type: "VARIABLE_ALIAS"
  id: string
}

export type VariableScope = 'ALL_SCOPES' | 'TEXT_CONTENT' | 'WIDTH_HEIGHT' | 'GAP' | 'ALL_SCOPES' | 'ALL_FILLS' | 'FRAME_FILL' | 'SHAPE_FILL' | 'TEXT_FILL' | 'STROKE_COLOR'

export interface  CodeSyntax {
  WEB: string
  ANDROID: string
  iOS: string
}

/**
 * A Variable is a single design token that defines values for each of the modes in its VariableCollection. These values can be applied to various kinds of design properties.
 */
export interface Variable {
  /**
   * The unique identifier of this variable.
   */
  id: string

  /**
   * The name of this variable.
   */
  name: string

  /**
   * The key of the variable.
   */
  key: string

  /**
   * The id of the variable collection that contains this variable.
   */
  variableCollectionId: string

  /**
   * The resolved type of the variable.
   */
  resolvedType: "BOOLEAN" | "FLOAT" | "STRING" | "COLOR"

  /**
   * The values for each mode of this variable.
   */
  valuesByMode: Record<string, boolean | number | string | Color | VariableAlias>

  /**
   * Whether the variable is remote.
   */
  remote: boolean

  /**
   * Description of this variable.
   */
  description: string

  /**
   * Whether this variable is hidden when publishing the current file as a library.
   * If the parent VariableCollection is marked as hiddenFromPublishing, then this variable will also be hidden from publishing via the UI. hiddenFromPublishing is independently toggled for a variable and collection. However, both must be true for a given variable to be publishable.
   */
  hiddenFromPublishing: boolean

  /**
   * An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields.
   *
   * Setting scopes for a variable does not prevent that variable from being bound in other scopes (for example, via the Plugin API). This only limits the variables that are shown in pickers within the Figma UI.
   */
  scopes: VariableScope[]

  /**
   * Code syntax definitions for this variable. Code syntax allows you to represent variables in code using platform-specific names, and will appear in Dev Mode's code snippets when inspecting elements using the variable.
   */
  codeSyntaxVariable: CodeSyntax

}
