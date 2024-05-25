export type StateMember<TType extends string> = {
  type: TType;
};

export function matchesState<TType extends string>(
  state: { type: string },
  expectedType: TType
): state is StateMember<TType> {
  return state.type === expectedType;
}

// check single
// export function assertState<TType extends string>(
//   state: { type: string },
//   expectedType: TType
// ): asserts state is StateMember<TType> {
//   if (state.type !== expectedType){
//     throw new Error(`Invalid state ${state.type} (expected: ${expectedType})`)
//   }
// }

// check multiple
export function assertState<TType extends string>(
  state: { type: string },
  ...expectedTypes: TType[]
): asserts state is StateMember<TType> {
  if (!expectedTypes.includes(state.type as TType)) {
    throw new Error(
      `Invalid state ${state.type} (expected one of: ${expectedTypes})`
    );
  }
}
