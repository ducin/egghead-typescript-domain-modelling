function addXY<T extends Object>(
  obj: T,
  x: number,
  y: number
): asserts obj is T & { x: number; y: number } {
  // Adding properties via = would be more complicated...
  Object.assign(obj, { x, y });
}

const obj = { color: "green" };
//    ^?
addXY(obj, 9, 4);

obj;
// ^?
