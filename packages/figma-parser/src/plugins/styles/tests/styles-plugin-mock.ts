import { vi } from 'vitest'
import { StylesPlugin } from '../styles.plugin'
import { STYLES_DATA_FIXTURE } from './style-data.fixture'

const parserMock = {
  request: vi.fn()
} as any

export const stylesPluginMockFactory = () => {
  const plugin = new StylesPlugin(parserMock)

  plugin.styles = vi.fn().mockImplementation( async () => {
    // @ts-expect-error - stylesData is private property
    plugin.stylesData = STYLES_DATA_FIXTURE
    return plugin
  })

  return plugin
}
