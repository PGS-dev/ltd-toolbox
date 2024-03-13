import { FigmaStyleDfeinition } from '../types';

export const DEFINITIONS_FIXTURE: FigmaStyleDfeinition[] = [
  {
    name: 'text/token',
    type: 'TEXT',
    nodeId: '330:1817',
    definition: {
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
  },
  {
    name: 'color/token',
    type: 'FILL',
    nodeId: '1171:10749',
    definition: [
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
  },
  {
    name: 'shadow/token',
    type: 'EFFECT',
    nodeId: '330:1853',
    definition: [
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
  {
    name: 'effect/token',
    type: 'EFFECT',
    nodeId: '886:3122',
    definition: [
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
];
