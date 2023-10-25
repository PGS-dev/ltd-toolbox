import { SingleNode } from '../document/single-node.js'
import { Paragraph } from 'mdast'
import { isTextNode } from '../document/types.js'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { TypeStyleTable } from './types.js'

export type LineType = 'ORDERED' | 'UNORDERED' | 'NONE' | 'LIST'

export const styleOverrideMap = (table: TypeStyleTable) => {
  const styles = Object.entries(table).map(([styleId, textStyle]) => {
    if (textStyle.italic === true && textStyle.fontWeight >= 700) return [styleId, '***']
    if (textStyle.fontWeight >= 700) return [styleId, '**']
    if (textStyle.italic === true) return [styleId, '*']
  })
  styles.unshift(['0', ''])
  return Object.fromEntries(styles)
}

export const  getNodeDecoratedText = (node: SingleNode) => {
  if (!isTextNode(node)) return
  const styleOverrides = node.characterStyleOverrides.concat(new Array(node.characters.length - node.characterStyleOverrides.length).fill(0))
  const mapa = styleOverrideMap(node.styleOverrideTable)
  const formatted = styleOverrides.reduce((acc, current, index, array) => {
    const prev = array[Math.max(0, index -1)]

    if (current !== prev && current === 0) {
      return acc + mapa[prev] + node.characters[index]
    }

    if (current !== prev && prev === 0) {
      return acc + mapa[current] + node.characters[index]
    }

    return acc + node.characters[index]
  }, '')

  return formatted
}

export const basicTextFormatToAst = (node: SingleNode): Paragraph => {
  const textNode = node.findDeep(isTextNode)
  const text = getNodeDecoratedText(textNode)
  const ast = fromMarkdown(text)
  return ast.children.at(0) as Paragraph
}
