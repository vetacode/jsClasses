//Static properties and methods
//SYNTAX:
/**
 * class MyClass {
  static property = ...;

  static method() {
    ...
  }
}
 */

class User {
  static staticMethod() {
    console.log(this === User);
  }
}

User.staticMethod(); // true

//function comparing articles
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// usage
let articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1)),
];

articles.sort(Article.compare);

console.log(articles[0].title); // CSS

{
  //Create todays articles update
  class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }

    static createTodays() {
      // remember, this = Article
      return new this("Today's digest", new Date().toLocaleDateString('id-ID'));
    }
  }

  let article = Article.createTodays();

  console.log(article.title); // Today's digest
  console.log(article.date); // Today's digest
}

{
  //STATIC PROPS
  class Article {
    static publisher = 'Ilya Kantor';
  }

  console.log(Article.publisher); // Ilya Kantor
}

//Inheritance of static properties and methods
class Animal {
  static planet = 'Earth';

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbits = [new Rabbit('White Rabbit', 10), new Rabbit('Black Rabbit', 5)];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.

console.log(Rabbit.planet); // Earth

/**TASK 1
 * Class extends Object?
importance: 3
As we know, all objects normally inherit from Object.prototype and get access to “generic” object methods like hasOwnProperty etc.

For instance:

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// hasOwnProperty method is from Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true
But if we spell it out explicitly like "class Rabbit extends Object", then the result would be different from a simple "class Rabbit"?

What’s the difference?

Here’s an example of such code (it doesn’t work – why? fix it?):

class Rabbit extends Object {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') ); // Error
 */
{
  class Rabbit extends Object {
    constructor(name) {
      super();
      this.name = name;
    }
  }

  let rabbit = new Rabbit('Rab');

  console.log(rabbit.hasOwnProperty('name')); // True
}
