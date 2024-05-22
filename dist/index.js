"use strict";
//Basic Types
let id = 5;
let company = "Appex";
let isPublished = true;
let x = "Hello";
x = true;
//type of arrays
let ids = [1, 2, 4];
ids.push(3);
let arr = [1, "three"];
//tuple array
let employee;
employee = [
    [1, "brad"],
    [2, "john"],
];
//Union
let pId;
pId = 3;
pId = "three";
//Enums : Set of named constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
const user = {
    id: 1,
    name: "John",
};
//type assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
//functions
const addNum = (x, y) => {
    let z = x + y;
    return z;
};
//Void
const log = (message) => {
    console.log(message);
};
log(3);
let user1 = {
    id: 4,
    name: "rogan",
};
const add = (x, y) => {
    return x + y;
};
// classes
class Person {
    constructor(id, name) {
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
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "vic", "dev");
console.log(emp.name);
console.log(emp.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["vic", "joe", "alias", "newton"]);
