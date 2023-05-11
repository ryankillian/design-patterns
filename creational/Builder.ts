/*

The Builder Design Pattern is a creational pattern designed to provide a flexible solution to various object creation problems in object-oriented programming. The intent of the Builder design pattern is to separate the construction of a complex object from its representation. By doing so, the same construction process can create different representations.

The Builder pattern is typically used when there is a need to build complex objects step by step, and these objects are often composed of several parts or sub-objects. The Builder pattern abstracts the construction process of complex objects, allowing the client code to specify the type and content of the object it needs, but shielding it from the details of the object's construction.

Here's a simple structure of the Builder pattern:

Builder: This is an interface that specifies methods for creating parts of a complex object.
ConcreteBuilder: This class implements the Builder interface to construct and assemble parts of the product. The ConcreteBuilder defines and keeps track of the representation it creates and provides an interface for retrieving the product.
Director: This class is responsible for constructing the complex object using the Builder interface. Director is a mechanism that encapsulates the construction and representation of a complex object. It separates construction and representation.
Product: The complex object that is being built. This is the final output of the builder process.
This pattern allows you to change the internal representation of an object, encapsulate code for construction and representation, and isolate code for construction and representation.It provides control over the construction process and offers finer control over the construction process unlike other creational patterns like Factory and Abstract Factory which constructs an object in one go.

*/

/*

In this example, SuperheroBuilder is the Builder class that builds instances of Superhero. It has a fluent interface where each method returns this, allowing the methods to be chained together. Each set method sets a different attribute of the superhero. The build method finally creates the superhero with the specified attributes.

The superheroes Batman and Superman are created using the builder. The describe method of each superhero prints their details.

Builder: This is represented by the SuperheroBuilder class in our example. It specifies methods for creating parts of a complex object. In this case, methods like setName, setPowers, setTeam, and setSecretIdentity are used to build a superhero.

ConcreteBuilder: In this example, there's just one builder, the SuperheroBuilder, so it's both the Builder and the ConcreteBuilder. It implements the methods to construct and assemble parts of the product and keeps track of the representation it creates.

Director: In this specific example, we don't have a separate Director class. The role of the Director, which is to use the Builder interface to create a complex object, is performed by the code that uses SuperheroBuilder to create instances of Superhero.

Product: This is the Superhero class in our example. It's the complex object that's being built. Instances of Superhero are the final output of the builder process.

*/

class Superhero {
  constructor(
    public name: string,
    public powers: string[],
    public team: string,
    public secretIdentity: string
  ) {}

  describe(): void {
    console.log(`Superhero: ${this.name}`);
    console.log(`Powers: ${this.powers.join(", ")}`);
    console.log(`Team: ${this.team}`);
    console.log(`Secret Identity: ${this.secretIdentity}`);
  }
}

class SuperheroBuilder {
  private name: string = "";
  private powers: string[] = [];
  private team: string = "";
  private secretIdentity: string = "";

  setName(name: string): SuperheroBuilder {
    this.name = name;
    return this;
  }

  setPowers(powers: string[]): SuperheroBuilder {
    this.powers = powers;
    return this;
  }

  setTeam(team: string): SuperheroBuilder {
    this.team = team;
    return this;
  }

  setSecretIdentity(secretIdentity: string): SuperheroBuilder {
    this.secretIdentity = secretIdentity;
    return this;
  }

  build(): Superhero {
    return new Superhero(
      this.name,
      this.powers,
      this.team,
      this.secretIdentity
    );
  }
}

const superheroBuilder = new SuperheroBuilder();

const batman = superheroBuilder
  .setName("Batman")
  .setPowers(["Martial Arts", "Stealth", "Gadgets"])
  .setTeam("Justice League")
  .setSecretIdentity("Bruce Wayne")
  .build();

batman.describe();

const superman = superheroBuilder
  .setName("Superman")
  .setPowers(["Flight", "Super Strength", "Heat Vision"])
  .setTeam("Justice League")
  .setSecretIdentity("Clark Kent")
  .build();

superman.describe();

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
