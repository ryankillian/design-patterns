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

// Creator interface
interface AnimalFactory {
  createAnimal(): Animal;
}

// ConcreteCreator classes
class DogFactory implements AnimalFactory {
  createAnimal(): Animal {
    return new Dog();
  }
}

class CatFactory implements AnimalFactory {
  createAnimal(): Animal {
    return new Cat();
  }
}

class ParrotFactory implements AnimalFactory {
  createAnimal(): Animal {
    return new Parrot();
  }
}

// Usage
const dogFactory = new DogFactory();
const dog = dogFactory.createAnimal();
dog?.speak(); // Woof, woof!

const catFactory = new CatFactory();
const cat = catFactory.createAnimal();
cat?.speak(); // Meow, meow!

const parrotFactory = new ParrotFactory();
const parrot = parrotFactory.createAnimal();
parrot?.speak(); // Hello, I'm a parrot!

/*

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

// Creator abstract class
abstract class AnimalCreator {
  public abstract factoryMethod(): Animal;

  public makeAnimalSpeak(): void {
    const animal = this.factoryMethod();
    animal.speak();
  }
}

// ConcreteCreator classes
class DogCreator extends AnimalCreator {
  factoryMethod(): Animal {
    return new Dog();
  }
}

class CatCreator extends AnimalCreator {
  factoryMethod(): Animal {
    return new Cat();
  }
}

// Usage
const dogCreator = new DogCreator();
dogCreator.makeAnimalSpeak(); // Woof, woof!

const catCreator = new CatCreator();
catCreator.makeAnimalSpeak(); // Meow, meow!


*/

/*

interface Interviewer {
  askQuestions(): void;
}

class Developer implements Interviewer {
  askQuestions() {
    console.log("pattern test");
  }
}

class Designer implements Interviewer {
  askQuestions() {
    console.log("architecture quiz");
  }
}

abstract class HiringManager {
  abstract makeInterviewer(): Interviewer;
  takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

class DevelopmentManager extends HiringManager {
  makeInterviewer() {
    return new Developer();
  }
}

class DesignManager extends HiringManager {
  makeInterviewer() {
    return new Designer();
  }
}

const devManager = new DevelopmentManager();
devManager.takeInterview();

*/
