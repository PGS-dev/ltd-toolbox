import { FigmaParserError } from '../shared/errors/figma-parser-error'
import { createModuleLogger } from '../shared/logger'

export const stylesLogger = createModuleLogger('getStyles')

export class GetStylesError extends FigmaParserError {
  logger = stylesLogger
}
