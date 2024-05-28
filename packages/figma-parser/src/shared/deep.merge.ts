import type { MergeDeep } from 'type-fest';

interface Obj {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: any | Obj;
}

export const deepMerge = <First extends Obj, Second extends Obj>(first: First, second: Second): MergeDeep<First, Second> => {
  // Clone object
  const output = structuredClone(first);

  // Iterate through `second` properties and if an `Object` set property to merge of `output` and `second` properties
  for (const key of Object.keys(second) as (keyof Second)[]) {
    // If array, then concat values.
    if (key in second && Array.isArray(second[key])) second[key] = second[key].concat(output[key as keyof First]);

    // If object, then call deepMerge again
    if ((second[key] as unknown) instanceof Object) Object.assign(second[key], deepMerge(output[key as keyof First], second[key]));
  }

  // Join `output` and modified `source`
  Object.assign(output || {}, second);

  return output as MergeDeep<First, Second>;
};
