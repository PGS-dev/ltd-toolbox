import type { GetImagesResponse } from '@figma/rest-api-spec';
import { logger } from '../../shared';
import { FigmaParserError } from '../../shared/errors/figma-parser-error';
import { RichParentNode } from '../../shared/nodes/rich-parent.node';
import type { Ctor } from '../../shared/nodes/types';
import { defaultImageOptions, type CurrentContext, type ImageOptions } from '../types';

export interface WithImageGettersMixin {
  /**
   * Fetches the image url for current node
   */
  getImageUrl(options?: Partial<ImageOptions>): Promise<string | undefined>;

  /**
   * Fetches the actual image for current node
   * Image is returned as Buffer, so you can format it however you want.
   */
  getImage(options?: Partial<ImageOptions>): Promise<Buffer>;

  /**
   * Fetches multiple images for specified nodes.
   *
   * @example
   * ```
   * for await (const image of canvas.getImages(images, {format: 'svg'})) {
   *   const [node, img] = image
   *   console.log( node.name, img.toString('utf-8')
   * }
   * ```
   */
  getImages(nodes: this[], options?: Partial<ImageOptions>): AsyncGenerator<[this, Buffer]>;

  /**
   * Fetches the images for specified nodes and returns data in form of an array.
   */
  getImagesArray(nodes: this[], options?: Partial<ImageOptions>): Promise<[this, Buffer][]>;
}

export function WithImagesGetters<Base extends Ctor>(Base: Base) {
  return class extends Base {
    #getCurrentContext(): CurrentContext | undefined {
      // eslint-disable-next-line
      let parent = this;

      while (parent) {
        if (parent instanceof RichParentNode) {
          throw new FigmaParserError(`Cant get path for this node.`, `Node you are trying to resolve path to is an instance of "RichParentNode". It doesn't necessairly have a parent node.`);
        }

        parent = parent.parent;

        if (parent?.parent === undefined) {
          return parent.currentContext;
        }
      }
    }

    async getImageUrl(options?: Partial<ImageOptions>): Promise<string | undefined> {
      const context = this.#getCurrentContext();
      if (!context) throw new FigmaParserError(`No access to current api instance!`, `Couldn't find currentContext!`);
      const api = context.apiClient;

      const fileId = context.fileId;
      const params = { ids: [this.id], ...defaultImageOptions, ...options };
      const imagesResponse = await api.request<GetImagesResponse>(`images/${fileId}`, params).then((response) => response.images);

      return imagesResponse[this.id]!;
    }

    async getImage(options?: Partial<ImageOptions>): Promise<Buffer> {
      const requestLogger = logger.withTag('imageRequest');
      const context = this.#getCurrentContext();
      if (!context) throw new FigmaParserError(`No access to current api instance!`, `Couldn't find currentContext!`);

      const clientOptions = context.apiClient.options;
      const cache = context.apiClient.cache;
      const imageUrl = await this.getImageUrl(options);
      if (!imageUrl) throw new FigmaParserError(`Couldn't get image url!`);

      if (clientOptions.cache) {
        const cached = cache.get(imageUrl);
        requestLogger.debug(`Matching cached request found. Retrieving from cache.`);
        if (cached) return Promise.resolve(Buffer.from(cached));
      }

      requestLogger.debug(`Requesting ${imageUrl}...`);
      const img = await fetch(imageUrl).then((r) => r.text());
      requestLogger.debug('Request finalized successfuly.');

      if (clientOptions.cache) {
        cache.set(imageUrl, img);
        requestLogger.debug(`Request cached.`);
      }
      return Buffer.from(img);
    }

    async *getImages(nodes: this[], options?: Partial<ImageOptions>): AsyncGenerator<[this, Buffer]> {
      const requestLogger = logger.withTag('imageRequest');
      const context = this.#getCurrentContext();
      if (!context) throw new FigmaParserError(`No access to current api instance!`, `Couldn't find currentContext!`);

      const clientOptions = context.apiClient.options;
      const ids: string[] = nodes.map((node) => node.id);
      const cache = context.apiClient.cache;
      const api = context.apiClient;
      const fileId = context.fileId;
      const params = { ids, ...defaultImageOptions, ...options };
      const imagesResponse = await api.request<GetImagesResponse>(`images/${fileId}`, params).then((response) => response.images);

      for (const node of nodes) {
        const imageUrl = imagesResponse[node.id]!;

        if (clientOptions.cache) {
          const cached = cache.get(imageUrl);
          if (cached) {
            requestLogger.debug(`Matching cached request found. Retrieving from cache.`);
            yield [node, Buffer.from(cached)];
            continue;
          }
        }

        requestLogger.debug(`Requesting ${imageUrl}...`);
        const img = await fetch(imageUrl).then((r) => r.text());
        requestLogger.debug('Request finalized successfuly.');

        if (clientOptions.cache) {
          cache.set(imageUrl, img);
          requestLogger.debug(`Request cached.`);
        }

        yield [node, Buffer.from(img)];
      }
    }

    async getImagesArray(nodes: this[], options?: Partial<ImageOptions>): Promise<[this, Buffer][]> {
      const out: [this, Buffer][] = [];

      for await (const image of this.getImages(nodes, options)) {
        out.push(image);
      }

      return out;
    }
  };
}
