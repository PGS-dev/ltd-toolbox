import { createLogger } from '../logger';

export class FigmaParserError extends Error {
  logger = createLogger();

  constructor(
    public message: string = '(no message provided)',
    public cause: string = '(no description provided)'
  ) {
    super(message);
    this.name = this.constructor.name;
    this.message = `${message} \n ${this.cause} \n`;
  }
}
