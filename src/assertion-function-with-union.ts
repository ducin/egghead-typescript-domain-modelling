type AccessLevel = "r" | "w" | "rw";

const writeOnly = "w";

function allowsReadAccess(
  level: AccessLevel
): asserts level is "r" | "rw" {
  if (!level.includes("r"))
    throw new Error("Read not allowed");
}

allowsReadAccess(writeOnly);
