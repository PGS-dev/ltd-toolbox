import { Root } from 'mdast';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { getNodeDecoratedText } from '../contents/utils';
import { SingleNode } from '../document/single-node';
import { isTextNode } from '../document/types';
import { combineSchema } from './combine-schema.util';

export const markdownAST = (...nodes: SingleNode[]): Root => {
  if (!nodes.length) throw new Error('Expected SingleNodes.');

  const output = nodes.flatMap((node) => {
    if (!isTextNode(node)) return;

    const lines = combineSchema({
      indent: node.lineIndentations,
      type: node.lineTypes,
      text: getNodeDecoratedText(node)?.split('\n') || [],
    });

    const markdown = lines
      .map((line) => {
        let bullet = '';

        if (line.type === 'ORDERED') {
          bullet = '1. ';
        }
        if (line.type === 'UNORDERED') {
          bullet = '* ';
        }
        return '   '.repeat(line.indent) + bullet + line.text;
      })
      .join('\n');

    return markdown;
  });

  return fromMarkdown(output.join('\n'));
};
