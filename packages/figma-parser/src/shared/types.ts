import type { OnPurposeAny } from '../types';

export function hasMethod<O extends Record<string, OnPurposeAny>, M extends string>(node: O, methodName: M): node is O & { [P in M]: (...args: OnPurposeAny[]) => OnPurposeAny } {
  return !!node && methodName in node && typeof node[methodName] === 'function';
}

export function hasProperty<O extends Record<string, OnPurposeAny>, P extends string>(node: O, propertyName: P): node is O & { [K in P]: O[K] } {
  return !!node && propertyName in node;
}
