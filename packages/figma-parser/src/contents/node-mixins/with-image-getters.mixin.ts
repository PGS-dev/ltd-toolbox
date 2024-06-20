import type { GetImagesResponse } from '@figma/rest-api-spec';
import { hasProperty } from '../../shared';
import { FigmaParserError } from '../../shared/errors/figma-parser-error';
import type { Ctor } from '../../shared/nodes/types';
import { defaultImageOptions, type CurrentContext, type ImageOptions } from '../types';

export interface WithImageGettersMixin {
  /**
   *
   */
  getImageUrl(options?: Partial<ImageOptions>): Promise<string | undefined>;

  /**
   *
   */
  getImage(options?: Partial<ImageOptions>): Promise<Buffer>;
}

export function WithImagesGetters<Base extends Ctor>(Base: Base) {
  return class extends Base {
    async getImageUrl(options?: Partial<ImageOptions>): Promise<string | undefined> {
      if (!hasProperty(this, 'currentContext')) throw new FigmaParserError(`No access to current api instance!`, `Couldn't find currentContext property in node.`);
      const context = this.currentContext as CurrentContext;
      const api = context.apiClient;
      const fileId = context.fileId;
      const params = { ids: [this.id], ...defaultImageOptions, ...options };
      const imagesResponse = await api.request<GetImagesResponse>(`images/${fileId}`, params).then((response) => response.images);

      return imagesResponse[this.id]!;
    }

    async getImage(options?: Partial<ImageOptions>): Promise<Buffer> {
      const imageUrl = await this.getImageUrl(options);
      if (!imageUrl) throw new FigmaParserError(`Couldn't get image url!`);
      const img = await fetch(imageUrl).then((r) => r.arrayBuffer());
      return Buffer.from(img);
    }
  };
}
