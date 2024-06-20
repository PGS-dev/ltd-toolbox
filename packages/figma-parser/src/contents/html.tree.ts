import { isInstanceNodeInstance, isTextNodeInstance } from '@ltd-toolbox/figma-node-classes';
import { h } from 'hastscript';
import type { OnPurposeAny } from '../types';

import type { Getter } from './types';

const getListItems = (node: OnPurposeAny) => {
  let items: string[] = [];

  if (node.children.length === 1 && isTextNodeInstance(node.children[0])) {
    const text = typeof node.children[0].getRawText === 'function' ? node.children[0].getRawText() : '';
    items = text.split('\n').filter(Boolean);
  }

  if (node.children.length > 1) {
    items = node.children.filter(isTextNodeInstance).map((node: OnPurposeAny) => node.getRawText());
  }

  return items;
};

const heading: Getter = {
  test(node) {
    return isInstanceNodeInstance(node as OnPurposeAny) && ['Heading Lv.1', 'Heading Lv.2', 'Heading Lv.3', 'Heading Lv.4', 'Heading Lv.5', 'Heading Lv.6'].includes(node.name);
  },
  get(node) {
    const depth = node.name.at(-1)!;

    return h(`h${depth}`, [node.getRawChildrenText()]);
  },
};

const unorderedList: Getter = {
  test(node) {
    return isInstanceNodeInstance(node as OnPurposeAny) && node.name === 'UnorderedList';
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
    return isInstanceNodeInstance(node as OnPurposeAny) && node.name === 'OrderedList';
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
    return isInstanceNodeInstance(node as OnPurposeAny) && node.name === 'Paragraph';
  },
  get(node) {
    return h('p', [node.getRawChildrenText()]);
  },
};

export const htmlGetters = [heading, unorderedList, orderedList, paragraph];
