import { Employee, Money } from "./model";

interface Trainee {
  name: string;
  salary: Money;
  boss: Employee;
}

function hasId<
  T extends object,
  K extends "string" | "number"
>(entity: T, idType: K): entity is T & { id: K } {
  return "id" in entity && typeof entity.id === idType;
}

// declare let u: unknown;
// if (hasId(u, "string")) {
//   console.log(u.id);
// }
declare let obj: object;
if (hasId(obj, "string")) {
  console.log(obj.id);
}

declare const trainee: Trainee;
if (hasId(trainee, "string")) {
  console.log(trainee.id);
}
