import type { ErrorResponsePayloadWithErrMessage, ErrorResponsePayloadWithErrorBoolean } from '@figma/rest-api-spec';

/**
 * Figma Personal Access Token format.
 */
export type FigmaPAT = `figd_${string}` | string;

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

export type ErrorResponse = Partial<ErrorResponsePayloadWithErrMessage & ErrorResponsePayloadWithErrorBoolean & Response>;

export type RequestErrorFn = (response: ErrorResponse) => string;

export type ErrorDescriptions = Record<number, string | RequestErrorFn>;

export interface FigmaApiInterface {
  /**
   * Add custom error descriptions for error codes in form of an object.
   *
   * ```
   * const api = figmaApi()
   * const withMyOwnErrorDescriptions = api.withErrorDescriptions({
   *   404: 'These are not the resources you are looking for...',
   *   403: (response) => response.message || 'Unknown error'
   * })
   * ```
   * @param descriptions
   */
  withErrorDescriptions(descriptions: ErrorDescriptions): FigmaApiInterface;

  /**
   * Requests given resources with path and params.
   *
   * ```
   * const api = figmaApi()
   * const nodes == await api.request('/files/<FIGMAFILEID>/nodes', {ids: ['111:11', '111:12', depth: 1]})
   * ```
   * @param path
   * @param params
   */
  request<Response = object>(path: string, params?: Record<string, string>): Promise<Response>;
}
