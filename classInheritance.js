//EXTENDS Keyword
//The syntax to extend another class is: class Child extends Parent.
{
  class Animal {
    constructor(name) {
      this.name = name;
      this.speed = 0;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed} km/h`);
    }

    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still`);
    }
  }
  let animal = new Animal('My Animal');
  animal.stop();
  animal.run(50);

  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} hides!`);
    }
  }

  let rabbit = new Rabbit('Long Ears');

  rabbit.run(30);
  rabbit.hide();

  //CREATE class wrapping function
  function f(say) {
    return class {
      sayHi() {
        console.log(say);
      }
    };
  }

  class User extends f('Hello') {}
  new User().sayHi(); //Hello
}
