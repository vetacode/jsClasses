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
console.log(User2 === Function); // true

// The methods are in User2.prototype, e.g:
console.log(User2.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
