export type Prev<T extends number> = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10][T];
export type Last<original extends unknown[]> = original[Prev<original extends { length: infer L } ? L : never>];
