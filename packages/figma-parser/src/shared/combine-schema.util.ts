type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

export const combineSchema = <InputData extends { [k: string]: unknown[] }>(
  combineSchema: InputData,
): { [k in keyof InputData]: ArrayElement<InputData[k]> }[] => {
  const values = Object.values(combineSchema);
  const valuesAreEqualLength = values.every(
    (current, _index: number, array) => current.length === array[0].length,
  );
  if (!valuesAreEqualLength)
    throw new Error("All collections in schema must be equal length!");

  const entries = Object.entries(combineSchema);
  const output: any[] = [];

  entries.forEach(([key, collection]: [string, any[]]) => {
    collection.forEach((node: any, index: number) => {
      output[index] = {
        ...output[index],
        [key]: node,
      };
    });
  });

  return output;
};
