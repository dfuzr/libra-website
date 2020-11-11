export type Optional<T> = T | null;
export type Seq<T> = T[];
export type Tuple<T extends any[]> = T;
export type ListTuple<T extends any[]> = Tuple<T>[];
