import './full-figma-types.d.ts'
import { FigmaParser } from './parser.js'

export interface FigmaParserPlugin {
}

export type FigmaParserPluginFunction = (host: FigmaParser) => FigmaParserPlugin

export interface FigmaParserPluginConstructor<Return extends FigmaParserPlugin = FigmaParserPlugin> {
  new (host: FigmaParser): Return;
}

export type FigmaParserPluginInstance = FigmaParserPluginConstructor | FigmaParserPluginFunction

// type FigmaPAT = `figd_${string}`
export type FigmaPAT = string
