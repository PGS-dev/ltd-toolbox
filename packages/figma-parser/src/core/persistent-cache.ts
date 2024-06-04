import { existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import { hashData } from '../shared/create-hash.util';

export class PersistentCache {
  constructor(
    private directory: string = './.cache',
    private lifetime: number = 1000 * 60 * 60 * 8
  ) {
    this.directory = resolve(directory);
  }

  cacheFile(path: string) {
    const filename = hashData(path);
    return join(this.directory, `${filename}.cache`);
  }

  isValid(path: string) {
    const file = this.cacheFile(path);
    if (!existsSync(file)) return false;
    const cacheFileValid = Date.now() - statSync(file).birthtimeMs < this.lifetime;
    if (!cacheFileValid) {
      this.invalidate(path);
    }
    return cacheFileValid;
  }

  invalidate(path: string) {
    const file = this.cacheFile(path);

    if (existsSync(file)) {
      rmSync(file);
    }

    return false;
  }

  get(path: string) {
    if (!this.isValid(path)) return false;

    const file = this.cacheFile(path);

    if (existsSync(file)) {
      return readFileSync(file, 'utf-8');
    }

    return false;
  }

  set(path: string, content: string) {
    const file = this.cacheFile(path);

    if (!existsSync(this.directory)) {
      mkdirSync(this.directory, { recursive: true });
    }

    writeFileSync(file, content, 'utf-8');

    return content;
  }
}
