import type { ConsolaInstance, ConsolaOptions } from 'consola'
import { createConsola } from 'consola'

export function createLogger(options?: Partial<ConsolaOptions>): ConsolaInstance {
  return createConsola({
    ...options,
    formatOptions: {
      date: false
    }
  }).withTag('FigmaParser')
}

export function createModuleLogger(moduleName: string, options?: Partial<ConsolaOptions>): ConsolaInstance {
  return createLogger(options).withTag(moduleName)
}
