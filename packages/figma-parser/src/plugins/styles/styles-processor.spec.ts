import { beforeEach, describe, expect, test, vi } from 'vitest'
import { StylesProcessor } from './styles-processor'
import { FILE_NODES_FIXTURE } from './tests/file-nodes.fixture'
import { STYLE_METADATA_FIXTURE } from './tests/style-metadata.fixture'

describe('Styles Processor', () => {
  let stylesProcessor: StylesProcessor;

  beforeEach(() => {
    stylesProcessor = new StylesProcessor(STYLE_METADATA_FIXTURE, FILE_NODES_FIXTURE)
  });

  describe('Design Tokens', () => {
    test('Should generate design tokens object', async () => {

      const designTokens = stylesProcessor.designTokens();

      expect(designTokens).toBeTypeOf('object');
    });
  });

  test.todo('Should validate whether passed function is a transformer');
  test.todo('Should display descriptive error message when passed parameter is not ttransformer function');

  test('Should execute passed transformer', async () => {
    const stylesTransform = vi.fn();

    stylesProcessor.transform(stylesTransform);

    expect(stylesTransform).toHaveBeenCalled();
  });

  test('Should execute passed transformer with style definitions', async () => {
    const stylesTransform = vi.fn();

    stylesProcessor.transform(stylesTransform);

    const definitions = stylesProcessor.definitions();

    expect(stylesTransform).toHaveBeenCalledWith(definitions);
  });

  test('Should execute multiple transforms', async () => {
    const stylesTransform = vi.fn();
    const anotherStylesTransform = vi.fn();
    const yetAnotherStylesTransform = vi.fn();

    stylesProcessor.transform(stylesTransform, anotherStylesTransform, yetAnotherStylesTransform);

    expect(stylesTransform).toHaveBeenCalled();
    expect(anotherStylesTransform).toHaveBeenCalled();
    expect(yetAnotherStylesTransform).toHaveBeenCalled();
  });
});
