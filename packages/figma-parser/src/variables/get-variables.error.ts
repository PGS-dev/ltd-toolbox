import { FigmaParserError } from '../shared/errors/figma-parser-error';
import { createModuleLogger } from '../shared/logger';

export class GetVariablesError extends FigmaParserError {
  logger = createModuleLogger('getVariables');
}
