import { Nationality, Employee, Project, Office, Money } from "./model";

interface Trainee {
  name: string;
  salary: Money;
  boss: Employee;
}

declare let entity: Employee | Project | Office | Trainee;

// 👉 TYPE PREDICATES WITH UNIONS

function isEmployeeOrProject(thing: any): thing is Employee | Project {
  return typeof thing === "object"; // && ... && ...
}

if (isEmployeeOrProject(entity)) {
  console.log(entity.id);
} else {
  console.log(entity);
}

// 👉 TYPE PREDICATES WITH INLINED TYPES

function hasSalary(thing: any): thing is { salary: Money } {
  return (
    typeof thing === "object" &&
    thing != null &&
    "salary" in thing &&
    typeof thing.salary === "number"
  );
}

declare let u: unknown;
if (hasSalary(u)) {
  console.log(u.salary);
}
if (hasSalary(entity)) {
  console.log(entity.salary);
}

// 👉 NARROWING PROPERTIES

interface Entity {} // whatever it is
declare function isEntity(object: any): object is Entity;
declare function hasProperty<TEntity>(
  object: TEntity
): object is TEntity & { prop: string };
