import { isObject } from '../shared/is-object.util';
import { HardCache } from './hard-cache';
import { loggerFactory } from './logger';

/**
 * Figma Personal Access Token format.
 */
export type FigmaPAT = `figd_${string}` | string;

export interface FigmaParserOptions {
  /**
   * Whether cache should be used
   * @default false
   */
  cache: boolean;
  /**
   * Directory to store cached files
   * @default .cache
   */
  cacheDir: string;
  /**
   * Defines how long cache should live. Cache file creation time is used, therefore it counts since first matching request.
   * @default 8 hours (1000 * 60 * 60 * 8)
   */
  cacheLifetime: number;
}

const logger = loggerFactory('Figma Parser');

class FigmaApi implements FigmaApiInterface {
  cache: HardCache;

  readonly options: FigmaParserOptions = {
    cache: false,
    cacheDir: './.cache',
    cacheLifetime: 1000 * 60 * 60 * 8, // 8 hours
  };

  constructor(
    private token: FigmaPAT | string,
    userOptions: Partial<FigmaParserOptions> = {}
  ) {
    if (!token) throw new Error('You need to provide Personal Access Token for Figma.');
    this.options = { ...this.options, ...userOptions } as FigmaParserOptions;
    this.cache = new HardCache(this.options.cacheDir, this.options.cacheLifetime);
  }

  async request<Response = object>(path: string, params?: Record<string, string>): Promise<Response> {
    const cached = this.cache.get({ path, params });
    if (cached && this.options.cache) {
      logger.info('(Using cache)', `Found cached request. Retrieving from cache.`);
      return Promise.resolve(JSON.parse(cached)) as Response;
    }

    if (cached && this.options.cache === false) {
      this.cache.invalidate({ path, params });
    }

    let url = `https://api.figma.com/v1/${path}`;
    const headers = new Headers({
      'X-Figma-Token': this.token,
    });

    if (params && Object.keys(params).length > 0) {
      url += '?' + new URLSearchParams(params).toString();
    }

    logger.info(`Requesting ${url}...`);
    const data = await fetch(url, { headers })
      .catch((e) => {
        throw new Error(e.message);
      })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json() as Response;
      });

    if (this.options.cache) {
      logger.info('(Using cache)', `Caching request.`);
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

  if (!token) throw new Error(`Figma Token wasn't set explicitly if "figmaApi()", and there were no "FIGMA_PAT" in environment variables or .env files.`);

  return new FigmaApi(token, options);
}

export interface FigmaApiInterface {
  request<Response = object>(path: string, params?: Record<string, string>): Promise<Response>;
}
