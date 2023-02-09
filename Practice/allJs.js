// Variables
let name = "John Doe";
const age = 30;
var job = "Developer";

// Data Types
const string = "hello world";
const number = 42;
const boolean = true;
const nullValue = null;
const undefinedValue = undefined;
const symbol = Symbol("foo");

// Arrays
const array = [1, 2, 3, 4, 5];
array.push(6);
array.pop();
array.unshift(0);
array.shift();

// Objects
const person = {
  name: "Jane Doe",
  age: 28,
  job: "Designer"
};
person.email = "jane@example.com";
delete person.age;

// Functions
function greet(name) {
  return `Hello ${name}!`;
}
const sayHello = (name) => {
  return `Hello ${name}!`;
};

// Conditional Statements
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// Loops
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

// Exception Handling
try {
  console.log(notDeclared);
} catch (error) {
  console.error(error);
} finally {
  console.log("This will run regardless of an error or not.");
}

// Classes
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    return `The ${this.make} ${this.model} is running.`;
  }
}
const car = new Car("Tesla", "Model X");
console.log(car.startEngine());

// Import and Export
import { greet as sayHi } from "./greet.js";
export const goodbye = (name) => {
  return `Goodbye ${name}!`;
};
