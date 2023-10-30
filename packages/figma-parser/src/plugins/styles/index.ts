import { FigmaParser } from "../../parser.js";
import type { FigmaParserPlugin } from "../../types.d.js";
import {
  Effect,
  FileNodesResponse,
  FileStylesResponse,
  Paint,
  TypeStyle,
} from "../../full-figma-types.js";
import {
  EffectStyle,
  FigmaStyleDfeinition,
  FigmaStylesTransformer,
  FillStyle,
  FullStyle,
  isEffectStyle,
  isFillStyle,
  isTextStyle,
  TextStyle,
} from "./types.js";
import { DesignTokens } from "./transformers/design-tokens/index.js";

export class Styles implements FigmaParserPlugin {
  private host: FigmaParser;
  private stylesData: FullStyle[] = [];

  constructor(host: FigmaParser) {
    this.host = host;
    this.host.styles = this.styles.bind(this);
  }

  async styles(fileId: string) {
    if (!fileId) return;
    const stylesUrl = `files/${fileId}/styles`;
    const fileStyles = await this.host
      .request<FileStylesResponse>(stylesUrl)
      .then((response) => response?.meta?.styles);

    const nodeIds = fileStyles?.map((style) => style.node_id).join(",");

    const nodesUrl = `files/${fileId}/nodes`;
    const fileNodes = await this.host
      .request<FileNodesResponse>(nodesUrl, { ids: nodeIds })
      .then((response) => response.nodes);

    this.stylesData = fileStyles.map((style) => ({
      styleMeta: style,
      nodeData: fileNodes[style.node_id]?.document,
    }));

    return this;
  }

  private getFillStyle(style: FillStyle): Readonly<Paint[]> {
    if (!isFillStyle(style)) return;

    return style.nodeData.fills;
  }

  private getTextStyle(style: TextStyle): Readonly<TypeStyle> {
    if (!isTextStyle(style)) return;
    return style.nodeData.style;
  }

  private getEffectStyle(style: EffectStyle): Readonly<Effect[]> {
    if (!isEffectStyle(style)) return;

    return style.nodeData.effects;
  }

  definitions(): FigmaStyleDfeinition[] {
    return this.stylesData.map((style) => ({
      name: style.styleMeta.name,
      type: style.styleMeta.style_type,
      nodeId: style.styleMeta.node_id,
      definition: this.getStyle(style),
    }));
  }

  designTokens() {
    return this.transform(DesignTokens);
  }

  transform(...transformers: FigmaStylesTransformer[]) {
    if (transformers.length === 0) return this.definitions();
    return transformers.reduce(
      (acc, transformer) => transformer(acc),
      this.definitions(),
    );
  }

  private getStyle(style: FullStyle) {
    if (isFillStyle(style)) return this.getFillStyle(style);
    if (isTextStyle(style)) return this.getTextStyle(style);
    if (isEffectStyle(style)) return this.getEffectStyle(style);

    return null;
  }
}

declare module "../../parser.js" {
  export interface FigmaParser {
    styles(fileId: string): Promise<Styles>;
  }
}
