import { h } from 'hastscript';
import { isInstanceNode, isTextNode } from '../shared/types';
import { ContentNode } from './content-node';
import type { Getter } from './types';

const getListItems = (node: ContentNode) => {
  let items: string[] = [];

  if (node.children.length === 1 && isTextNode(node.children[0])) {
    const text = node.children[0].getRawText()!;
    items = text.split('\n').filter(Boolean);
  }

  if (node.children.length > 1) {
    items = node.children.filter(isTextNode).map((node) => node.getRawText()!);
  }

  return items;
};

const heading: Getter = {
  test(node) {
    return isInstanceNode(node) && ['Heading Lv.1', 'Heading Lv.2', 'Heading Lv.3', 'Heading Lv.4', 'Heading Lv.5', 'Heading Lv.6'].includes(node.name);
  },
  get(node) {
    const depth = node.name.at(-1)!;

    return h(`h${depth}`, [node.getRawChildrenText()]);
  },
};

const unorderedList: Getter = {
  test(node) {
    return isInstanceNode(node) && node.name === 'UnorderedList';
  },
  get(node) {
    const items = getListItems(node);
    return h(
      'ul',
      items.map((item) => h('li', [item]))
    );
  },
};

const orderedList: Getter = {
  test(node) {
    return isInstanceNode(node) && node.name === 'OrderedList';
  },
  get(node) {
    const items = getListItems(node);
    return h(
      'ol',
      items.map((item) => h('li', [item]))
    );
  },
};

const paragraph: Getter = {
  test(node) {
    return isInstanceNode(node) && node.name === 'Paragraph';
  },
  get(node) {
    return h('p', [node.getRawChildrenText()]);
  },
};

export const htmlGetters = [heading, unorderedList, orderedList, paragraph];
