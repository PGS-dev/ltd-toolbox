import { NodeCollection } from '../plugins/nodes/node-collection';
import { SingleNode } from '../plugins/nodes/single-node';
import { FigmaParser } from './parser';

type AnyFeature = { [k: string | symbol]: unknown };
export type FigmaParserPluginInterface<T extends AnyFeature = AnyFeature> = {
  name: string;
} & T;
export type FigmaParserPluginFunction = (host: FigmaParser) => FigmaParserPluginInterface;
export interface FigmaParserPluginConstructor<Return extends FigmaParserPluginInterface = FigmaParserPluginInterface> {
  new (host: FigmaParser): Return;
}
export type CallbackFunction<OUT = void> = (node: SingleNode, index?: number, collection?: NodeCollection) => OUT;

export type FigmaParserPlugin = FigmaParserPluginConstructor | FigmaParserPluginFunction;
