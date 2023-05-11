/*


The Prototype design pattern is a creational pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects. This pattern is particularly useful when the construction of a class is expensive or complex.

The prototype pattern involves implementing a prototype interface which tells to create a clone of the current object. It allows you to create a copy of an existing object and modify it to your needs, instead of going through the trouble of creating an object from scratch and setting it up.

This can be particularly useful if objects are instantiated at runtime and their structure is not known in advance, or if creating a new object is computationally expensive. By copying or cloning an existing object, a program can avoid costly setup operations.

Here is a simple breakdown of the Prototype pattern's components:

Prototype: This is the interface that all concrete prototypes must implement. It declares a method for cloning itself.

Concrete Prototype: This is a class that implements the Prototype interface and defines the method to duplicate itself.

Client: The client code that uses the prototype object to clone it and create new objects.

An example of the Prototype pattern in real-world software development is the clone() method provided in many JavaScript libraries, which creates a clone or copy of an existing object. This is often used to prevent mutations to the original object when changes need to be made to the copied object.

*/

/*

In this code:

Cloneable is the prototype interface that specifies the clone method. It's our "Prototype".
Sheep is our "Concrete Prototype". It implements the Prototype interface and defines the method to duplicate itself.
The originalSheep.clone() line is where our "Client" uses the prototype object to clone it and create new objects.
Note that while the cloned sheep has the same name and color as the original, they are not the same object (hence clonedSheep === originalSheep returns false). This is the essence of the Prototype pattern: creating new objects by copying existing ones.

*/

interface Cloneable {
  clone(): Cloneable;
}

class Sheep implements Cloneable {
  constructor(public name: string, public color: string) {}

  clone(): Sheep {
    return new Sheep(this.name, this.color);
  }
}

let originalSheep = new Sheep("Dolly", "white");

let clonedSheep = originalSheep.clone();

console.log(clonedSheep); // Sheep { name: 'Dolly', color: 'white' }
console.log(clonedSheep === originalSheep); // false

// interface Prototype {
//   clone(): Prototype;
// }

// class Sheep implements Prototype {
//   constructor(public name: string, public color: string) {
//     this.name = name;
//     this.color = color;
//   }
//   clone() {
//     return new Sheep(this.name, this.color);
//   }
// }

/*
interface Prototype<T> {
  clone(): T;
}

class Sheep implements Prototype<Sheep> {
  constructor(public name: string, public color: string) {
    this.name = name;
    this.color = color;
  }
  clone(): Sheep {
    return new Sheep(this.name, this.color);
  }
}

function main() {
  const sheep1 = new Sheep("Dolly", "white");
  console.log(`Sheep 1: ${sheep1.name}, ${sheep1.color}`);

  const sheep2 = sheep1.clone();
  console.log(`Sheep 2: ${sheep2.name}, ${sheep2.color}`);
  sheep2.name = "Holly";
  console.log(`Sheep 2: ${sheep2.name}, ${sheep2.color}`);
}

main();
*/

// function Sheep(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Sheep.prototype.clone = function () {
//   // Create a new object with the same prototype as the current object
//   const clonedSheep = Object.create(Object.getPrototypeOf(this));

//   // Copy properties to the new object
//   clonedSheep.name = this.name;
//   clonedSheep.color = this.color;

//   return clonedSheep;
// };
