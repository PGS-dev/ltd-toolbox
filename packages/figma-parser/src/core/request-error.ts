import { createModuleLogger } from '../shared/logger'

export const requestLogger = createModuleLogger('request')

export class RequestError extends Error {
  logger = requestLogger

  constructor(public status: number, public text: string, public cause: string = '(no description provided)') {
    super()
    this.name = this.constructor.name
    this.message = `${status} ${text} - ${this.cause}`
  }
}

