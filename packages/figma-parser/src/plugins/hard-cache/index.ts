import { join, resolve } from 'path'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { hashData } from '../../shared/create-hash.util.js'
import type { FigmaParserPlugin } from '../../types.d.js'
import { FigmaParser } from '../../parser.js'

export class HardCache implements FigmaParserPlugin {
  host: FigmaParser;

  private directory = resolve('./.cache')

  constructor(host: FigmaParser) {
    this.host = host

    this.directory = (this.host as any)?.options?.cacheDir || this.directory

    if (!existsSync(this.directory)) {
      mkdirSync(this.directory, { recursive: true })
    }

    this.originalRequest = this.host.request.bind(this.host)
    this.host.request = this.request.bind(this)
  }

  originalRequest: Function;

  async request<Response = object>(path: string, params: object = null): Promise<Response> {
    const cached = this.get({ path, params })
    if (cached && (this.host as any).options.hardCache) {
      return JSON.parse(cached) as Response
    }
    const data = await this.originalRequest(path, params)

    if ((this.host as any).options.hardCache) {
      this.set({path, params}, JSON.stringify(data, null, 2))
    }

    return data as Response
  }

  cacheFile(data: any) {
    const filename = hashData(JSON.stringify(data))
    return join(this.directory, `${filename}.cache`)
  }

  get(data: any) {
    const file = this.cacheFile(data)
    if (existsSync(file)) {
      return readFileSync(file, 'utf-8')
    }
    return false
  }

  set(data: any, content: string) {
    const file = this.cacheFile(data)
    try {
      writeFileSync(file, content, 'utf-8')
    } catch {

    }
  }
}

declare module "../../parser.ts" {
  interface FigmaParserOptions {
    hardCache?: boolean,
    cacheDir?: string
  }
}
