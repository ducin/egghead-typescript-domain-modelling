function isTypeof(value: any, typeString: "boolean"): value is boolean;
function isTypeof(value: any, typeString: "number"): value is number;
function isTypeof(value: any, typeString: "string"): value is string;
function isTypeof(value: any, typeString: string): boolean {
  return typeof value === typeString;
}

const value: unknown = {};
isTypeof(value, "boolean") && value;
