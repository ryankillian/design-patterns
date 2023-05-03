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
