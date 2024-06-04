export class InMemoryCache {
  cache: Map<string, string> = new Map();

  invalidate(path: string) {
    if (this.cache.has(path)) this.cache.delete(path);
  }

  get(path: string) {
    if (this.cache.has(path)) return JSON.parse(this.cache.get(path)!);
    return false;
  }

  set(path: string, content: string) {
    this.cache.set(path, content);
  }
}
