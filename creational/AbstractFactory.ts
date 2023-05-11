/*

The Abstract Factory design pattern is a creational pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes. It is especially useful when a system needs to be independent from the way the objects it creates are generated or it needs to work with multiple types of objects.

An Abstract Factory is typically implemented with a Factory Method, but it can be implemented using Prototype or Singleton as well. It provides a way to encapsulate a group of individual factories that have a common theme, without specifying their concrete classes.

For example, imagine you're building a UI toolkit that needs to support multiple look-and-feel standards (like Windows, MacOS, Linux). You could have an abstract factory "GuiFactory" that specifies the creation methods for abstract products like "Button" and "Menu". Then, you would have concrete factories (like "WindowsGuiFactory", "MacOSGuiFactory") that implement these methods to create the concrete products (like "WindowsButton", "MacOSButton").

The client code only needs to deal with the abstract types (GuiFactory, Button, Menu) and doesn't care about the concrete types. This greatly enhances flexibility and future changes in the concrete products can be made just by modifying the concrete factories, without needing to touch the client code.

As with other factory patterns, the Abstract Factory pattern encapsulates the responsibilities of object creation and helps make the overall system easier to maintain and extend over time.

*/

// Abstract products
interface Pet {
  speak(): string;
}

// Concrete products
class Dog implements Pet {
  speak() {
    return "Wuff!";
  }
}

class Cat implements Pet {
  speak() {
    return "Meow!";
  }
}

class Dinosaur implements Pet {
  speak() {
    return "Roar!";
  }
}

class Mammoth implements Pet {
  speak() {
    return "Grr!";
  }
}

// Abstract factory
interface PetShopFactory {
  createSmallPet(): Pet;
  createLargePet(): Pet;
}

// Concrete factories
class ModernPetShopFactory implements PetShopFactory {
  createSmallPet(): Pet {
    return new Cat();
  }

  createLargePet(): Pet {
    return new Dog();
  }
}

class AncientPetShopFactory implements PetShopFactory {
  createSmallPet(): Pet {
    return new Dinosaur();
  }

  createLargePet(): Pet {
    return new Mammoth();
  }
}

// Client code
function petShopClient(petShopFactory: PetShopFactory) {
  const smallPet = petShopFactory.createSmallPet();
  const largePet = petShopFactory.createLargePet();

  console.log(
    `I've bought a small pet that says ${smallPet.speak()} and a large pet that says ${largePet.speak()}`
  );
}

const modernFactory = new ModernPetShopFactory();
petShopClient(modernFactory); // I've bought a small pet that says Meow! and a large pet that says Wuff!

const ancientFactory = new AncientPetShopFactory();
petShopClient(ancientFactory); // I've bought a small pet that says Roar! and a large pet that says Grr!

/*

interface Door {
  getDescription(): void;
}

class WoodenDoor implements Door {
  getDescription() {
    console.log("Wooden Door");
  }
}

class IronDoor implements Door {
  getDescription() {
    console.log("Iron Door");
  }
}

interface DoorFittingExpert {
  getDescription(): void;
}

class Carpenter implements DoorFittingExpert {
  getDescription() {
    console.log("I fit wooden doors");
  }
}

class Welder implements DoorFittingExpert {
  getDescription() {
    console.log("I fit iron doors");
  }
}

interface DoorFactory {
  makeDoor(): Door;
  makeFitter(): DoorFittingExpert;
}

class WoodenDoorFactory implements DoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }
  makeFitter() {
    return new Carpenter();
  }
}

class IronDoorFactory implements DoorFactory {
  makeDoor() {
    return new IronDoor();
  }
  makeFitter() {
    return new Welder();
  }
}

const woodenFactory = new WoodenDoorFactory();
let door = woodenFactory.makeDoor();
door.getDescription();
let fitter = woodenFactory.makeFitter();
fitter.getDescription();

const ironFactory = new IronDoorFactory();
door = ironFactory.makeDoor();
door.getDescription();
fitter = ironFactory.makeFitter();
fitter.getDescription();

*/
