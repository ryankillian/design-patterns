class Burger {
  readonly size: number;
  readonly cheese: boolean;
  readonly lettuce: boolean;
  readonly ketchup: boolean;
  readonly pickle: boolean;

  constructor(builder: BurgerBuilder) {
    this.size = builder.size;
    this.cheese = builder.cheese || false;
    this.lettuce = builder.lettuce || false;
    this.ketchup = builder.ketchup || false;
    this.pickle = builder.pickle || false;
  }
}
class BurgerBuilder {
  readonly size: number;
  cheese = false;
  lettuce = false;
  ketchup = false;
  pickle = false;

  constructor(size: number) {
    this.size = size;
  }
  addCheese(): BurgerBuilder {
    this.cheese = true;
    return this;
  }
  addLettuce(): BurgerBuilder {
    this.lettuce = true;
    return this;
  }
  addKetchup(): BurgerBuilder {
    this.ketchup = true;
    return this;
  }
  addPickle(): BurgerBuilder {
    this.pickle = true;
    return this;
  }

  build(): Burger {
    return new Burger(this);
  }
}

let burger = new BurgerBuilder(12).addCheese().addKetchup().addPickle().build();
console.log(burger.lettuce);
console.log(burger.pickle);
