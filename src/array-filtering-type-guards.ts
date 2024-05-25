const arr = [1, "hello", 3, "world", undefined, null];
// (string | number | null | undefined)[]

const strings = arr.filter(
  // string[]
  // before:
  // (val): val is string => typeof val == 'string'
  // after:
  (val) => typeof val == "string"
);

function isNotNullish<T>(value: T): value is NonNullable<T> {
  return value !== undefined && value !== null;
}

const filteredResult = arr.filter(isNotNullish); // filtered!

if (arr.every(isNotNullish)) {
  arr; // ALSO filtered!
}
