import { existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import { hashData } from '../shared/create-hash.util';

export class HardCache {
  constructor(
    private directory: string = './.cache',
    private lifetime: number = 1000 * 60 * 60 * 8
  ) {
    this.directory = resolve(directory);
  }

  cacheFile(data: object) {
    const filename = hashData(JSON.stringify(data));
    return join(this.directory, `${filename}.cache`);
  }

  isValid(data: object) {
    const file = this.cacheFile(data);
    const cacheFileValid = Date.now() - statSync(file).birthtimeMs < this.lifetime;
    if (!cacheFileValid) {
      this.invalidate(data);
    }
    return cacheFileValid;
  }

  invalidate(data: object) {
    const file = this.cacheFile(data);

    if (existsSync(file)) {
      rmSync(file);
    }
  }

  get(data: object) {
    if (!this.isValid(data)) return false;

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
