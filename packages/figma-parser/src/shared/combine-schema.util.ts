type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

// Need help with typing this util

export const combineSchema = <InputData extends { [k: string]: unknown[] }>(combineSchema: InputData): { [k in keyof InputData]: ArrayElement<InputData[k]> }[] => {
  const values = Object.values(combineSchema);
  const valuesAreEqualLength = values.every((current, _index: number, array) => current.length === array[0].length);
  if (!valuesAreEqualLength) throw new Error('All collections in schema must be equal length!');

  const entries = Object.entries(combineSchema);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const output: any[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  entries.forEach(([key, collection]: [string, any[]]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    collection.forEach((value: any, index: number) => {
      output[index] = {
        ...output[index],
        [key]: value,
      };
    });
  });

  return output;
};
