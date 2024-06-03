import { FigmaParserError } from '../shared/errors/figma-parser-error';
import { isObject } from '../shared/is-object.util';
import { createLogger } from '../shared/logger';
import { HardCache } from './hard-cache';
import { RequestError, requestLogger } from './request-error';
import type { ErrorDescriptions, FigmaApiInterface, FigmaPAT, FigmaParserOptions, FigmaRequestOptions } from './types';

process.on('uncaughtException', (error: FigmaParserError) => {
  const logger = error.logger || createLogger();
  logger.error(error.message);
  process.exit(1);
});

class FigmaApi implements FigmaApiInterface {
  cache: HardCache;

  readonly options: FigmaParserOptions = {
    cache: false,
    cacheDir: './.cache',
    cacheLifetime: 1000 * 60 * 60 * 8, // 8 hours
  };

  constructor(
    private token: FigmaPAT | string,
    private userOptions: Partial<FigmaParserOptions> = {}
  ) {
    if (!token) throw new FigmaParserError('You need to provide Personal Access Token for Figma.');
    this.options = { ...this.options, ...userOptions } as FigmaParserOptions;
    this.cache = new HardCache(this.options.cacheDir, this.options.cacheLifetime);
  }

  defaultErrorDescriptions: ErrorDescriptions = {
    400: 'Parameters are invalid or malformed. Please check the input formats. This error can also happen if the requested resources are too large to complete the request, which results in a timeout. Please reduce the number and size of objects requested.',
    404: 'The requested file or resource was not found.',
    429: 'In some cases API requests may be throttled or rate limited. Please wait a while before attempting the request again (typically a minute). Rate limiting is calculated on a per-user basis. If the caller is using an OAuth token, the rate limit is calculated based on the user associated with the token. You may alos consider using FrimgaParer cache.',
    500: 'This most commonly occurs for very large image render requests, which may time out our server and return a 500. Please reduce the number and size of objects requested',
  };

  withErrorDescriptions(descriptions: ErrorDescriptions) {
    const newInstance = new FigmaApi(this.token, this.userOptions);
    newInstance.defaultErrorDescriptions = {
      ...newInstance.defaultErrorDescriptions,
      ...descriptions,
    };

    return newInstance;
  }

  async request<Response = object>(path: string, params?: Record<string, string>, requestOptions?: Partial<FigmaRequestOptions>): Promise<Response> {
    if (this.options.cache) {
      requestLogger.info('Using cache.');
    }

    let url = `https://api.figma.com/v1/${path}`;

    requestLogger.start(`Requesting ${url}...`);

    const cached = this.cache.get({ path, params });

    if (cached && this.options.cache) {
      requestLogger.success(`Matching cached request found. Retrieving from cache.`);
      return Promise.resolve(JSON.parse(cached)) as Response;
    }

    if (cached && this.options.cache === false) {
      this.cache.invalidate({ path, params });
    }

    const headers = new Headers({
      'X-Figma-Token': this.token,
    });

    if (params && Object.keys(params).length > 0) {
      url += '?' + new URLSearchParams(params).toString();
    }

    const errorDescriptions: ErrorDescriptions = {
      ...this.defaultErrorDescriptions,
      ...requestOptions?.errorDescriptions,
    };

    const data = await fetch(url, { headers })
      .catch((e) => {
        throw new FigmaParserError(e);
      })
      .then(function handleResponse(response) {
        if (!response.ok) {
          let errorDescription = errorDescriptions[response.status];
          if (typeof errorDescription === 'function') {
            errorDescription = errorDescription(response);
          }

          throw new RequestError(response.status, response.statusText, errorDescription);
        }

        requestLogger.success('Request finalized successfuly.');
        return response.json() as Response;
      });

    if (this.options.cache) {
      requestLogger.info(`Request cached.`);
      this.cache.set({ path, params }, JSON.stringify(data, null, 2));
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

  if (!token) throw new FigmaParserError(`Figma token wasn't set explicitly if "figmaApi()". Neither "FIGMA_PAT" env var was found.`);

  return new FigmaApi(token, options);
}
