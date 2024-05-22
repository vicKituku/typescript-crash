//Basic Types
let id: number = 5;
let company: string = "Appex";
let isPublished: boolean = true;
let x: any = "Hello";
x = true;

//type of arrays
let ids: number[] = [1, 2, 4];
ids.push(3);

let arr: any[] = [1, "three"];

//tuple array
let employee: [number, string][];

employee = [
  [1, "brad"],
  [2, "john"],
];
//Union
let pId: string | number;

pId = 3;
pId = "three";

//Enums : Set of named constants

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
console.log(Direction2.Up);

//Objects
type User = {
  id: number;
  name: string;
  age?: number;
};
const user: User = {
  id: 1,
  name: "John",
};

//type assertion

let cid: any = 1;
// let customerId = <number>cid;

let customerId = cid as number;

//functions

const addNum = (x: number, y: number): number => {
  let z: number = x + y;
  return z;
};

//Void

const log = (message: string | number): void => {
  console.log(message);
};

log(3);

//Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}

let user1: UserInterface = {
  id: 4,
  name: "rogan",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => {
  return x + y;
};

// classes

class Person {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name} is my name`;
  }
}

const bean = new Person(1, "bean");
console.log(bean.register());

//subclass

class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "vic", "dev");

console.log(emp.name);
console.log(emp.register());

//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray(["vic", "joe", "alias", "newton"]);
