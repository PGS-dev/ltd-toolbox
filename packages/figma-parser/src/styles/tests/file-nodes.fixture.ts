import { GetFileNodesResponse } from '@figma/rest-api-spec';
import { PartialDeep } from 'type-fest';

export const FILE_NODES_FIXTURE: PartialDeep<GetFileNodesResponse['nodes']> = {
  '330:1817': {
    document: {
      id: '330:1817',
      name: 'text/token',
      type: 'TEXT',
      scrollBehavior: 'SCROLLS',
      blendMode: 'PASS_THROUGH',
      absoluteBoundingBox: {
        x: 0,
        y: 0,
        width: 97,
        height: 32,
      },
      absoluteRenderBounds: {
        x: 1.9920001029968262,
        y: 7.911999702453613,
        width: 93.87262725830078,
        height: 21.93600082397461,
      },
      constraints: {
        vertical: 'TOP',
        horizontal: 'LEFT',
      },
      fills: [
        {
          blendMode: 'NORMAL',
          type: 'SOLID',
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 1,
          },
        },
      ],
      strokes: [],
      strokeWeight: 0,
      strokeAlign: 'INSIDE',
      effects: [],
      characters: 'Rag 123',
      style: {
        fontFamily: 'Arial',
        fontPostScriptName: 'Arial Bold',
        fontWeight: 700,
        textAutoResize: 'WIDTH_AND_HEIGHT',
        fontSize: 24,
        textAlignHorizontal: 'LEFT',
        textAlignVertical: 'TOP',
        letterSpacing: 0.48,
        lineHeightPx: 32,
        lineHeightPercent: 109.37926483154297,
        lineHeightPercentFontSize: 133.3333282470703,
        lineHeightUnit: 'PIXELS',
      },
      characterStyleOverrides: [],
      styleOverrideTable: {},
      lineTypes: ['NONE'],
      lineIndentations: [0],
    },
  },
  '1171:10749': {
    document: {
      id: '1171:10749',
      name: 'color/token',
      type: 'RECTANGLE',
      scrollBehavior: 'SCROLLS',
      boundVariables: {
        fills: [
          {
            type: 'VARIABLE_ALIAS',
            id: 'VariableID:1174:8998',
          },
        ],
      },
      blendMode: 'PASS_THROUGH',
      absoluteBoundingBox: {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      },
      absoluteRenderBounds: {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      },
      constraints: {
        vertical: 'TOP',
        horizontal: 'LEFT',
      },
      fills: [
        {
          opacity: 0.5,
          blendMode: 'NORMAL',
          type: 'SOLID',
          color: {
            r: 1,
            g: 1,
            b: 1,
            a: 1,
          },
          boundVariables: {
            color: {
              type: 'VARIABLE_ALIAS',
              id: 'VariableID:1174:8998',
            },
          },
        },
      ],
      strokes: [],
      strokeWeight: 1,
      strokeAlign: 'INSIDE',
      effects: [],
    },
  },
  '330:1853': {
    document: {
      id: '330:1853',
      name: 'shadow/token',
      type: 'RECTANGLE',
      scrollBehavior: 'SCROLLS',
      blendMode: 'PASS_THROUGH',
      absoluteBoundingBox: {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      },
      absoluteRenderBounds: {
        x: -20,
        y: 0,
        width: 140,
        height: 140,
      },
      constraints: {
        vertical: 'TOP',
        horizontal: 'LEFT',
      },
      fills: [
        {
          blendMode: 'NORMAL',
          type: 'SOLID',
          color: {
            r: 0.8509804010391235,
            g: 0.8509804010391235,
            b: 0.8509804010391235,
            a: 1,
          },
        },
      ],
      strokes: [],
      strokeWeight: 1,
      strokeAlign: 'INSIDE',
      effects: [
        {
          type: 'DROP_SHADOW',
          visible: true,
          color: {
            r: 0.062745101749897,
            g: 0.0941176488995552,
            b: 0.1568627506494522,
            a: 0.029999999329447746,
          },
          blendMode: 'NORMAL',
          offset: {
            x: 0,
            y: 8,
          },
          radius: 8,
          spread: -4,
          showShadowBehindNode: true,
        },
        {
          type: 'DROP_SHADOW',
          visible: true,
          color: {
            r: 0.062745101749897,
            g: 0.0941176488995552,
            b: 0.1568627506494522,
            a: 0.07999999821186066,
          },
          blendMode: 'NORMAL',
          offset: {
            x: 0,
            y: 20,
          },
          radius: 24,
          spread: -4,
          showShadowBehindNode: true,
        },
      ],
    },
  },
  '886:3122': {
    document: {
      id: '886:3122',
      name: 'effect/token',
      type: 'RECTANGLE',
      scrollBehavior: 'SCROLLS',
      blendMode: 'PASS_THROUGH',
      absoluteBoundingBox: {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      },
      absoluteRenderBounds: {
        x: -4,
        y: -4,
        width: 108,
        height: 108,
      },
      constraints: {
        vertical: 'TOP',
        horizontal: 'LEFT',
      },
      fills: [
        {
          blendMode: 'NORMAL',
          type: 'SOLID',
          color: {
            r: 0.8509804010391235,
            g: 0.8509804010391235,
            b: 0.8509804010391235,
            a: 1,
          },
        },
      ],
      strokes: [],
      strokeWeight: 1,
      strokeAlign: 'INSIDE',
      effects: [
        {
          type: 'DROP_SHADOW',
          visible: true,
          color: {
            r: 0.9215686321258545,
            g: 0.8392156958580017,
            b: 0.9098039269447327,
            a: 1,
          },
          blendMode: 'NORMAL',
          offset: {
            x: 0,
            y: 0,
          },
          radius: 0,
          spread: 4,
          showShadowBehindNode: false,
        },
      ],
    },
  },
};
