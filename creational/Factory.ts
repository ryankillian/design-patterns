/*

The Factory pattern is a creational design pattern that provides an interface for creating objects in a superclass, allowing subclasses to alter the type of objects that will be created. Instead of calling a constructor directly to create an object, a factory method is used to create the object. This pattern promotes loose coupling and makes the code more flexible and easier to maintain, as it allows to add new object types without modifying existing code.

There are two variations of the Factory pattern:

1. **Simple Factory**: This is not an official GoF pattern, but it's a simplified version of the Factory pattern. A Simple Factory is a single class responsible for creating objects of different types based on some input or configuration.

2. **Factory Method**: This is the official GoF Factory pattern. It defines an interface for creating an object, but lets subclasses decide which class to instantiate. The Factory Method pattern lets a class defer instantiation to subclasses.

The main components of the Factory Method pattern are:

- **Product**: The interface or abstract class that defines the common behaviors of the objects that the factory method will create.
- **ConcreteProduct**: The concrete classes that implement the Product interface or extend the abstract class.
- **Creator**: The interface or abstract class that declares the factory method, which returns an object of the Product type.
- **ConcreteCreator**: The concrete classes that implement or extend the Creator, providing an implementation for the factory method to create and return ConcreteProduct instances.

The Factory pattern is particularly useful when:

- You want to decouple the process of object creation from the objects themselves.
- You need to create objects from a family of related classes, and you want to make it easy to add new types of objects to the family.
- You want to hide the specific classes that your code instantiates and work only with their interfaces or abstract classes.

*/

// Product interface
interface Animal {
  speak(): void;
}

// ConcreteProduct classes
class Dog implements Animal {
  speak(): void {
    console.log("Woof, woof!");
  }
}

class Cat implements Animal {
  speak(): void {
    console.log("Meow, meow!");
  }
}

class Parrot implements Animal {
  speak(): void {
    console.log("Hello, I'm a parrot!");
  }
}

// Simple Factory class
class AnimalFactory {
  static createAnimal(type: string): Animal | null {
    switch (type.toLowerCase()) {
      case "dog":
        return new Dog();
      case "cat":
        return new Cat();
      case "parrot":
        return new Parrot();
      default:
        return null;
    }
  }
}

// Usage
const dog = AnimalFactory.createAnimal("dog");
dog?.speak(); // Woof, woof!

const cat = AnimalFactory.createAnimal("cat");
cat?.speak(); // Meow, meow!

const parrot = AnimalFactory.createAnimal("parrot");
parrot?.speak(); // Hello, I'm a parrot!

/*
Plain old JS object

interface Animal {
  speak(): string
}

function createDog(): Animal {
  return {
    speak() {
      return "Wuff!"
    }
  }
}

class Cat implements Animal {
  speak() {
    return "Meow!"
  }
}

const AnimalFactory =  {
  createAnimal(animalType: string): Animal | null {
    switch(animalType){
      case 'dog': return createDog();
      case 'cat': return new Cat();
      default: return null
    }
  }
}

let oscar = AnimalFactory.createAnimal("dog");
console.log(oscar?.speak()) // Wuff!


*/

/*
interface Door {
  getHeight(): number;
  getWidth(): number;
}
class WoodenDoor implements Door {
  constructor(public width: number, public height: number) {
    this.width = width;
    this.height = height;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
}

const DoorFactory = {
  makeDoor(width: number, height: number) {
    return new WoodenDoor(width, height);
  },
};

let door = DoorFactory.makeDoor(10, 100);
console.log(door.height);

*/
