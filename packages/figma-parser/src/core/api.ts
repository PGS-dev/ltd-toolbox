import { HardCache } from './hard-cache';
import { loggerFactory } from './logger';

export type FigmaPAT = `figd_${string}`;

export interface FigmaParserOptions {
  hardCache?: boolean;
  cacheDir?: string;
  cacheLifetime: number;
}

export interface FigmaRequestOptions {
  path: string;
  params: Record<string, string> | object;
}

const logger = loggerFactory('Figma Parser');

class FigmaApi implements FigmaApiInterface {
  cache: HardCache;

  readonly options: FigmaParserOptions = {
    hardCache: true,
    cacheDir: './cache',
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
    if (cached && this.options.hardCache) {
      logger.info('(Using cache)', `Found cached request. Retrieving from cache.`);
      return (await Promise.resolve(JSON.parse(cached))) as Response;
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

    if (this.options.hardCache) {
      logger.info('(Using cache)', `Caching request.`);
      this.cache.set({ path, params }, JSON.stringify(data, null, 2));
    }

    return data as Response;
  }
}

export const figmaApi = (token: FigmaPAT, options?: Partial<FigmaParserOptions>) => new FigmaApi(token, options);

export interface FigmaApiInterface {
  request<Response = object>(path: string, params?: Record<string, string>): Promise<Response>
}
