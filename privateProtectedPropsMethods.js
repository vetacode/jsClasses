//Protecting “waterAmount”
//Protected properties are usually prefixed with an underscore _.

class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
console.log(coffeeMachine);

// add water
coffeeMachine.waterAmount = -10; // _waterAmount will become 0, not -10
console.log(coffeeMachine.waterAmount); // 0
