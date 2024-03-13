interface LoggerOptions {
  header: string;
  separator: string;
}

interface Logger {
  log: (...messages: unknown[]) => void;
  info: (...messages: unknown[]) => void;
  warn: (...messages: unknown[]) => void;
  error: (...messages: unknown[]) => void;
}

export function loggerFactory(options?: Partial<LoggerOptions>): Logger;
export function loggerFactory(header: string, options?: Partial<LoggerOptions>): Logger;
export function loggerFactory(headerOrOptions?: Partial<LoggerOptions> | string, options?: Partial<LoggerOptions>): Logger {
  let loggerOptions: LoggerOptions = {
    separator: ':',
  } as LoggerOptions;

  if (typeof headerOrOptions === 'string') {
    loggerOptions.header = headerOrOptions;
  }

  if (typeof headerOrOptions === 'object' && headerOrOptions.constructor === Object) {
    loggerOptions = { ...loggerOptions, ...headerOrOptions };
  }

  if (!!options && typeof options === 'object' && options.constructor === Object) {
    loggerOptions = { ...loggerOptions, ...options };
  }

  const header = loggerOptions.header ? loggerOptions.header + loggerOptions.separator : undefined;

  return {
    log: (...messages: unknown[]) => console.log(header, ...messages),
    info: (...messages: unknown[]) => console.info(header, ...messages),
    warn: (...messages: unknown[]) => console.warn(header, ...messages),
    error: (...messages: unknown[]) => console.error(header, ...messages),
  };
}

export const logger = loggerFactory();
