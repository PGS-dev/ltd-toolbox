import { isEmptyObject } from '../shared';
import { FigmaParserError } from '../shared/errors/figma-parser-error';
import { isObject } from '../shared/is-object.util';
import { createLogger } from '../shared/logger';
import { InMemoryCache } from './in-memory-cache';
import { PersistentCache } from './persistent-cache';
import { RequestError, requestLogger } from './request-error';
import type { ErrorDescriptions, FigmaApiInterface, FigmaPAT, FigmaParserOptions } from './types';

process.on('uncaughtException', (error: FigmaParserError) => {
  const logger = error.logger || createLogger();
  logger.error(error.message);
  throw error;
  process.exit(1);
});

class FigmaApi implements FigmaApiInterface {
  cache: PersistentCache;
  softCache: InMemoryCache;

  readonly options: FigmaParserOptions = {
    cache: false,
    cacheDir: './.cache',
    cacheLifetime: 1000 * 60 * 60 * 8, // 8 hours
  };

  constructor(
    private token: FigmaPAT | string,
    userOptions: Partial<FigmaParserOptions> = {}
  ) {
    if (!token) throw new FigmaParserError('You need to provide Personal Access Token for Figma.');
    this.options = { ...this.options, ...userOptions } as FigmaParserOptions;
    this.cache = new PersistentCache(this.options.cacheDir, this.options.cacheLifetime);
    this.softCache = new InMemoryCache();
  }

  readonly defaultErrorDescriptions: ErrorDescriptions = {
    400: 'Parameters are invalid or malformed. Please check the input formats. This error can also happen if the requested resources are too large to complete the request, which results in a timeout. Please reduce the number and size of objects requested.',
    404: 'The requested file or resource was not found.',
    429: 'In some cases API requests may be throttled or rate limited. Please wait a while before attempting the request again (typically a minute). Rate limiting is calculated on a per-user basis. If the caller is using an OAuth token, the rate limit is calculated based on the user associated with the token. You may alos consider using FrimgaParer cache.',
    500: 'This most commonly occurs for very large image render requests, which may time out our server and return a 500. Please reduce the number and size of objects requested',
  };

  errorDescriptions: ErrorDescriptions = {};

  public withErrorDescriptions(descriptions: ErrorDescriptions) {
    this.errorDescriptions = {
      ...this.defaultErrorDescriptions,
      ...descriptions,
    };

    return this;
  }

  private buildPath(path: string, params?: Record<string, string>) {
    if (!params || isEmptyObject(params)) return path;

    return path + '?' + new URLSearchParams(params).toString();
  }

  private getFromPersistentCache(path: string) {
    const cached = this.cache.get(path);

    if (cached && this.options.cache) {
      requestLogger.success(`Matching cached request found. Retrieving from cache.`);
      return JSON.parse(cached);
    }

    if (cached && !this.options.cache) return this.cache.invalidate(path);

    return false;
  }

  public async request<Response = object>(path: string, params?: Record<string, string>): Promise<Response> {
    const pathWithParams = this.buildPath(path, params);
    const requestUrl = `https://api.figma.com/v1/${pathWithParams}`;

    const inMemoryCached = this.softCache.get(pathWithParams);

    if (inMemoryCached) {
      return Promise.resolve(inMemoryCached) as Response;
    }

    const persistentlyCached = this.getFromPersistentCache(pathWithParams);
    if (persistentlyCached) {
      return Promise.resolve(persistentlyCached) as Response;
    }

    requestLogger.start(`Requesting ${requestUrl}...`);

    const headers = new Headers({
      'X-Figma-Token': this.token,
    });

    const data = await fetch(requestUrl, { headers })
      .catch((e) => {
        throw new FigmaParserError(e);
      })
      .then((response) => {
        if (!response.ok) {
          let errorDescription = this.errorDescriptions[response.status];
          if (typeof errorDescription === 'function') {
            errorDescription = errorDescription(response);
          }

          throw new RequestError(response.status, response.statusText, errorDescription);
        }

        requestLogger.success('Request finalized successfuly.');
        return response.json() as Response;
      });

    this.softCache.set(path, JSON.stringify(data));

    if (this.options.cache) {
      this.cache.set(path, JSON.stringify(data));
      requestLogger.info(`Request cached.`);
    }

    return data as Response;
  }
}

export function figmaApi(): FigmaApi;
export function figmaApi(token: FigmaPAT): FigmaApi;
export function figmaApi(options: Partial<FigmaParserOptions>): FigmaApi;
export function figmaApi(token: FigmaPAT, options?: Partial<FigmaParserOptions>): FigmaApi;
export function figmaApi(tokenOrOptions?: FigmaPAT | Partial<FigmaParserOptions>, userOptions?: Partial<FigmaParserOptions>) {
  let token: FigmaPAT = process.env.FIGMA_PAT as FigmaPAT;
  let options: Partial<FigmaParserOptions> = userOptions || {};

  if (typeof tokenOrOptions === 'string') {
    token = tokenOrOptions;
  }

  if (isObject(tokenOrOptions)) {
    options = tokenOrOptions;
  }

  if (!token) throw new FigmaParserError(`Missing Figma Personal Access Token`, `Figma token wasn't set explicitly if "figmaApi()". Neither "FIGMA_PAT" env var was found.`);

  return new FigmaApi(token, options);
}
