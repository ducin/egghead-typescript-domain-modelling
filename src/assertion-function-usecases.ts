declare const someValue: number | undefined;
declare const anotherValue: number | null;

// built-in
// type NonNullable<T> = T extends null | undefined ? never : T

// some example logic:
someValue.toFixed(2);
if (!someValue) {
  // or `=== undefined`
  throw new Error("Value is not defined");
}
someValue.toFixed(2);

anotherValue.toFixed(2);
if (!anotherValue) {
  // or `=== null`
  throw new Error("Value is not defined");
}
anotherValue.toFixed(2);

function assertNonNullable<T>(value: T): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error("Value is not defined");
  }
}

declare const yetOneMoreValue: number | undefined | null;
assertNonNullable(yetOneMoreValue);
yetOneMoreValue;
