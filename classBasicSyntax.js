'use strict';

//Class is a function
//syntax
//NOTE: No comma between class methods: to distinguish with object literals
/**
 * class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
 */

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// Usage:
let user = new User('John');
user.sayHi();
console.log(User.prototype.constructor == user.__proto__.constructor);

class User2 {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}

// class is a function
console.log(typeof User2); // function

// ...or, more precisely, the constructor method
console.log(User2 === User2.prototype.constructor); // true

// The methods are in User2.prototype, e.g:
console.log(User2.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

function Car() {}
Car.prototype.sayHi = function () {};
console.log(Car.prototype.constructor == Car); //true

class User3 {
  constructor(jeneng) {
    this.jeneng = jeneng;
  }

  sayHi(pesan) {
    return `${this.jeneng} ${pesan}`;
  }
}

const user3 = new User3('Veta');
console.log(user3.constructor === User3); // true
console.log(user3.jeneng); //Veta
console.log(user3.sayHi('mau makan')); //Veta
