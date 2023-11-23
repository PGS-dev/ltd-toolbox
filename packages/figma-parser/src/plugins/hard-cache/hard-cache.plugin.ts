import { join, resolve } from "path";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { hashData } from '../../shared/create-hash.util';
import type { FigmaParserPlugin } from '../../types';
import { FigmaParser } from '../../parser';

export class HardCachePlugin implements FigmaParserPlugin {
  host: FigmaParser;

  private directory = resolve("./.cache");

  constructor(host: FigmaParser) {
    this.host = host;

    this.directory = (this.host as any)?.options?.cacheDir || this.directory;

    if (!existsSync(this.directory)) {
      mkdirSync(this.directory, { recursive: true });
    }

    this.originalRequest = this.host.request.bind(this.host);
    this.host.request = this.request.bind(this);
  }

  originalRequest: <Response = object>(
    path: string,
    params?: object,
  ) => Promise<Response>;

  async request<Response = object>(
    path: string,
    params?: object,
  ): Promise<Response> {
    const cached = this.get({ path, params });
    if (cached && (this.host as any).options.hardCache) {
      return JSON.parse(cached) as Response;
    }
    const data = await this.originalRequest(path, params);

    if ((this.host as any).options.hardCache) {
      this.set({ path, params }, JSON.stringify(data, null, 2));
    }

    return data as Response;
  }

  cacheFile(data: any) {
    const filename = hashData(JSON.stringify(data));
    return join(this.directory, `${filename}.cache`);
  }

  get(data: any) {
    const file = this.cacheFile(data);
    if (existsSync(file)) {
      return readFileSync(file, "utf-8");
    }
    return false;
  }

  set(data: any, content: string) {
    const file = this.cacheFile(data);
    writeFileSync(file, content, "utf-8");
  }
}

declare module "../../parser" {
  export interface FigmaParserOptions {
    hardCache?: boolean;
    cacheDir?: string;
  }
}
