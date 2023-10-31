import { SingleNode } from '../plugins/document/single-node';
import { isTextNode } from '../plugins/document/types';
import { combineSchema } from './combine-schema.util';
import { fromMarkdown } from "mdast-util-from-markdown";
import { getNodeDecoratedText, LineType } from '../plugins/markdown/utils';
import { Root } from "mdast";

export const markdownAST = (...nodes: SingleNode[]): Root => {
  if (!nodes.length) throw new Error("Expected SingleNodes.");

  const output = nodes.flatMap((node) => {
    if (!isTextNode(node)) return;

    const lines = combineSchema({
      indent: (node as any).lineIndentations as number[],
      type: (node as any).lineTypes as LineType[],
      text: getNodeDecoratedText(node)?.split("\n") || [],
    });

    const markdown = lines
      .map((line) => {
        let bullet = "";

        if (line.type === "ORDERED") {
          bullet = "1. ";
        }
        if (line.type === "UNORDERED") {
          bullet = "* ";
        }
        return "   ".repeat(line.indent) + bullet + line.text;
      })
      .join("\n");

    return markdown;
  });

  return fromMarkdown(output.join("\n"));
};
