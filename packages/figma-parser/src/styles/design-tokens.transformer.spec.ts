import { describe, expect, test } from 'vitest';
import { ColorTokenValue, GradientStop, GradientTokenValue, ShadowStop, ShadowTokenValue, TypographyTokenValue } from '../shared/design-tokens-format.types';
import { DesignTokens } from './design-tokens.transformer';
import { DEFINITIONS_FIXTURE } from './tests/definitions.fixture';

describe('Design Tokens Transformer', () => {
  test.todo('Should generate nested object if deep option is set to true', async () => {});
  test.todo('Should generate flat object if deep option is set to false', async () => {});

  describe('W3C Design Tokens Format compliancy', () => {
    describe('Solid Color Token', () => {
      test('Should transform solid color definition', async () => {
        const output = DesignTokens()(DEFINITIONS_FIXTURE);
        const colorToken = output['color.token']['$value'];
        expect(colorToken).toBeTypeOf('string');
      });

      test('Should take alpha value from parent definition', async () => {
        const output = DesignTokens()(DEFINITIONS_FIXTURE);
        const alphaHexValue = output['color.token']['$value'] as ColorTokenValue;

        const fillOpacity = 0.5; // ( FILE_NODES_FIXTURE['1171:10749'].document.fills[0].opacity )
        const hexOpacity = Math.round(fillOpacity * 255)
          .toString(16)
          .padStart(2, '0');

        expect(alphaHexValue.slice(-2)).toEqual(hexOpacity);
      });
    });

    describe('Gradient Token', () => {
      test.todo('Should transform gradient definition', async () => {
        const valueSchema = {
          color: String,
          position: Number,
        };

        const designTokens = DesignTokens();
        const output = designTokens(DEFINITIONS_FIXTURE);
        const gradientToken = output['gradient.token']['$value'] as GradientTokenValue;

        gradientToken.forEach((gradientStop: GradientStop) => expect(gradientStop).toMatchSchema(valueSchema));
      });
    });

    describe('Shadow Token', () => {
      test('Should transform shadow definition', async () => {
        const valueSchema = {
          color: String,
          offsetX: Number,
          offsetY: Number,
          blur: Number,
          spread: Number,
        };

        const output = DesignTokens()(DEFINITIONS_FIXTURE);
        const shadowToken = output['shadow.token']['$value'] as ShadowTokenValue;

        console.log(shadowToken);

        shadowToken.forEach((shadow: ShadowStop) => expect(shadow).toMatchSchema(valueSchema));
      });

      test('Shadow stops should have correct order', async () => {
        // Figma Rest API sends gradient stops in reversed oreder.
        const output = DesignTokens()(DEFINITIONS_FIXTURE);
        const shadowToken = output['shadow.token']['$value'] as ShadowTokenValue;

        expect(shadowToken[0].color).toEqual('#0000ffff');
        expect(shadowToken[1].color).toEqual('#ff0000ff');
      });
    });

    describe('Typography Token', () => {
      test('Should transform typography definition', async () => {
        const valueSchema = {
          fontFamily: String,
          fontSize: Number,
          fontWeight: Number,
          letterSpacing: Number,
          lineHeight: Number,
        };

        const output = DesignTokens()(DEFINITIONS_FIXTURE);
        const textToken = output['text.token']['$value'] as TypographyTokenValue;

        expect(textToken).toMatchSchema(valueSchema);
      });
    });
  });

  test('', async () => {});
});
