import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import { FigmaParser } from '../../parser/parser';
import { hashData } from '../../shared/create-hash.util';

export class HardCachePlugin {
  host: FigmaParser;

  private directory = resolve('./.cache');

  constructor(host: FigmaParser) {
    this.host = host;

    this.directory = this.host?.options?.cacheDir || this.directory;

    this.originalRequest = this.host.request.bind(this.host);
    this.host.request = this.request.bind(this);
  }

  originalRequest: <Response = object>(path: string, params?: Record<string, string>) => Promise<Response>;

  async request<Response = object>(path: string, params?: Record<string, string>): Promise<Response> {
    const cached = this.get({ path, params });
    if (cached && this.host.options.hardCache) {
      return JSON.parse(cached) as Response;
    }
    const data = await this.originalRequest(path, params);

    if (this.host.options.hardCache) {
      this.set({ path, params }, JSON.stringify(data, null, 2));
    }

    return data as Response;
  }

  cacheFile(data: object) {
    const filename = hashData(JSON.stringify(data));
    return join(this.directory, `${filename}.cache`);
  }

  get(data: object) {
    const file = this.cacheFile(data);
    if (existsSync(file)) {
      return readFileSync(file, 'utf-8');
    }
    return false;
  }

  set(data: object, content: string) {
    const file = this.cacheFile(data);
    if (!existsSync(this.directory)) {
      mkdirSync(this.directory, { recursive: true });
    }
    writeFileSync(file, content, 'utf-8');
  }
}

declare module '../../parser/parser' {
  export interface FigmaParserOptions {
    hardCache?: boolean;
    cacheDir?: string;
  }
}