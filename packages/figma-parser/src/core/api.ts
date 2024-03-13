import { HardCache } from './hard-cache';
import { loggerFactory } from './logger';

/**
 * Figma Personal Access Token format.
 */
export type FigmaPAT = `figd_${string}`;

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

export const figmaApi = (token: FigmaPAT, options?: Partial<FigmaParserOptions>) => new FigmaApi(token, options);

export interface FigmaApiInterface {
  request<Response = object>(path: string, params?: Record<string, string>): Promise<Response>;
}
