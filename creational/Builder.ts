class Burger {
  size: number;
  cheese: boolean;
  lettuce: boolean;
  ketchup: boolean;
  pickle: boolean;

  constructor(builder: BurgerBuilder) {
    this.size = builder.size;
    this.cheese = builder.cheese || false;
    this.lettuce = builder.lettuce || false;
    this.ketchup = builder.ketchup || false;
    this.pickle = builder.pickle || false;
  }
}
class BurgerBuilder {
  size: number;
  cheese = false;
  lettuce = false;
  ketchup = false;
  pickle = false;
  constructor(size: number) {
    this.size = size;
  }
  addCheese() {
    this.cheese = true;
    return this;
  }
  addLettuce() {
    this.lettuce = true;
    return this;
  }
  addKetchup() {
    this.ketchup = true;
    return this;
  }
  addPickle() {
    this.pickle = true;
    return this;
  }

  build() {
    return new Burger(this);
  }
}

let burger = new BurgerBuilder(12).addCheese().addKetchup().addPickle().build();
console.log(burger.lettuce);
console.log(burger.pickle);
