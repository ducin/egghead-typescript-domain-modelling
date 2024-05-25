declare function assert(value: unknown): asserts value;
declare const maybeStringOrNumber: string | number;

maybeStringOrNumber; // string | number

// assert(typeof maybeStringOrNumber === "string");
// maybeStringOrNumber; // string

const five = 5;
assert(maybeStringOrNumber === five);
maybeStringOrNumber; // 5
