import { beforeEach, describe, expect, test, vi } from 'vitest'
import { StylesPlugin } from './styles.plugin'
import { stylesPluginMockFactory } from './tests/styles-plugin-mock'

describe('Styles Plugin', () => {
  let plugin: StylesPlugin;

  beforeEach(() => {
    plugin = stylesPluginMockFactory()
  })

  describe('Design Tokens', () => {
    test('Should generate design tokens object', async () => {
      const styles = await plugin.styles('any')

      const designTokens = styles.designTokens()

      expect(designTokens).toBeTypeOf('object')
    })
  })

  describe('Transform', () => {
    test.todo('Should validate whether passed function is a transformer', async () => {})
    test.todo('Should display descriptive error message when passed parameter is not ttransformer function', async () => {})

    test('Should execute passed transformer', async () => {
      const styles = await plugin.styles('any')
      const stylesTransform = vi.fn()

      styles.transform(stylesTransform)

      expect(stylesTransform).toHaveBeenCalled()
    })

    test('Should execute passed transformer with style definitions', async () => {
      const styles = await plugin.styles('any')
      const stylesTransform = vi.fn()

      styles.transform(stylesTransform)

      const definitions = styles.definitions()

      expect(stylesTransform).toHaveBeenCalledWith(definitions)
    })

    test('Should execute multiple transforms', async () => {
      const styles = await plugin.styles('any')
      const stylesTransform = vi.fn()
      const anotherStylesTransform = vi.fn()
      const yetAnotherStylesTransform = vi.fn()

      styles.transform(stylesTransform, anotherStylesTransform, yetAnotherStylesTransform)

      expect(stylesTransform).toHaveBeenCalled()
      expect(anotherStylesTransform).toHaveBeenCalled()
      expect(yetAnotherStylesTransform).toHaveBeenCalled()
    })

  })
})
