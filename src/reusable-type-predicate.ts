type NonEmptyArray<T> = [T, ...T[]];
// or: type NonEmptyArray<T> = T[] & { 0: T }

// @ts-expect-error
var empty__strings: NonEmptyArray<string> = [];
var nonEmpty__strings: NonEmptyArray<string> = ["hello", "world"];

declare const numbers: number[];

// type guard
function isNonEmptyArray<T>(arr: T[]): arr is NonEmptyArray<T> {
  return arr.length > 0;
}

if (isNonEmptyArray(numbers)) {
  console.log(numbers);
}

// assertion function
function assertNonEmptyArray<T>(arr: T[]): asserts arr is NonEmptyArray<T> {
  if (arr.length === 0) {
    throw new Error(`Expected non-empty array: ${arr}`);
  }
}

numbers;
assertNonEmptyArray(numbers);
numbers;
