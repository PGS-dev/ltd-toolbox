import { Collection } from '../../collection'
import { FigmaParser } from '../../parser'
import { FigmaParserPlugin } from '../../types'
import { CallbackFunction, NodeCollection, SingleNode } from '../document'
import { CollectionsSet } from './collections-set'
import { Variable, VariableCollection, VariableResponse } from './types'
import { FigmaVariable } from './variable'
import { FigmaVariableCollection } from './variable-collection'


export class VariablesPlugin implements FigmaParserPlugin {
  private host: FigmaParser;

  constructor(host: FigmaParser) {
    this.host = host;
    this.host.variables = this.variables.bind(this);
  }

  async variables(fileId: string, local = true) {
    const localVariablesUrl = `files/${fileId}/variables/local`
    const publishedVariablesUrl = `files/${fileId}/variables/published`

    const url = local ? localVariablesUrl : publishedVariablesUrl;

    const { variables, variableCollections } = await this.host
      .request<VariableResponse >(url)
      .then((response) => response.meta);

    let groupedVariables: Record<string, Variable[]> = {}

    Object.values(variables).forEach((variable) => {
      const collectionId = variable.variableCollectionId
      if ( !groupedVariables[collectionId] ) {
        groupedVariables[collectionId] = []
      }

      groupedVariables[collectionId].push(variable)
    })

    const output = Object.entries(groupedVariables).map(([collectionId, variables]) => {
      return new FigmaVariableCollection(variables, variableCollections[collectionId])
    })

    return new CollectionsSet(output)
  }
}


declare module "../../parser" {
  export interface FigmaParser {
    variables(fileId: string): any;
  }
}
