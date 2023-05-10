/*

The Flyweight design pattern is a structural pattern that allows you to share common data among a large number of similar objects, reducing memory consumption and improving performance. It's particularly useful when dealing with a large number of objects that have some shared, intrinsic data, and some unique, extrinsic data.

The main idea behind the Flyweight pattern is to separate the shared, intrinsic data from the unique, extrinsic data. The intrinsic data is stored in a flyweight object, which can be shared by multiple instances. The extrinsic data is stored outside the flyweight and passed to it when needed.

The Flyweight pattern consists of the following components:

Flyweight: This is an interface or abstract class that defines the common properties and methods for the shared objects. It ensures that all the flyweights can be used interchangeably.

ConcreteFlyweight: A class that implements the Flyweight interface, representing a shared object with the intrinsic data. ConcreteFlyweights are managed by the FlyweightFactory and shared among clients.

FlyweightFactory: This is a class that manages the creation and sharing of flyweight objects. It keeps a collection of flyweight objects and returns an existing flyweight if it matches the requested intrinsic data, or creates a new one if it doesn't.

Client: The client is responsible for maintaining the extrinsic data and using the FlyweightFactory to get the shared flyweight objects. The client interacts with the flyweights by passing the extrinsic data when required.

The Flyweight pattern helps to optimize memory usage and improve the performance of systems dealing with a large number of similar objects. However, it can also introduce complexity in the system, as you need to manage the separation of intrinsic and extrinsic data, and ensure that the shared objects are used correctly.

The Flyweight pattern is useful when you need to handle a large number of similar objects efficiently by sharing common data among these objects to reduce memory usage. This pattern is particularly useful when:

A large number of similar objects are created.
The memory footprint of each object is significant.
Most of the object's data can be made extrinsic (shared data).
A good example of the Flyweight pattern is a text editor. Suppose you want to create a text editor that can handle documents with millions of characters, and you want to store the formatting attributes (like font, color, size, etc.) for each character. Storing formatting attributes for each character would consume a lot of memory. The Flyweight pattern can help you optimize the memory usage by sharing formatting attributes among characters.

In this example, we have a TreeType interface representing the Flyweight, and a ConcreteTreeType class implementing it. The TreeTypeFactory manages the creation and sharing of tree types. The client, in this case, the Tree class, holds the extrinsic data (position and size) and uses the flyweight objects for the intrinsic data (texture and color).

This implementation helps to save memory by sharing the common intrinsic data (tree texture and color) among multiple tree instances.
*/

// Flyweight interface
interface TreeType {
  texture: string;
  color: string;
  draw(position: { x: number; y: number }, size: number): void;
}

// Concrete Flyweight
class ConcreteTreeType implements TreeType {
  constructor(public texture: string, public color: string) {}

  draw(position: { x: number; y: number }, size: number): void {
    console.log(
      `Draw a tree of type ${this.texture} and color ${this.color} at position (${position.x}, ${position.y}) with size ${size}`
    );
  }
}

// Flyweight Factory
class TreeTypeFactory {
  private treeTypes: { [key: string]: ConcreteTreeType } = {};

  getTreeType(texture: string, color: string): ConcreteTreeType {
    const key = `${texture}_${color}`;

    if (!this.treeTypes[key]) {
      this.treeTypes[key] = new ConcreteTreeType(texture, color);
    }

    return this.treeTypes[key];
  }
}

// Client
class Tree {
  constructor(
    private treeType: TreeType,
    private position: { x: number; y: number },
    private size: number
  ) {}

  draw(): void {
    this.treeType.draw(this.position, this.size);
  }
}

// Usage
const treeTypeFactory = new TreeTypeFactory();

const tree1 = new Tree(
  treeTypeFactory.getTreeType("Pine", "Green"),
  { x: 10, y: 20 },
  5
);
const tree2 = new Tree(
  treeTypeFactory.getTreeType("Oak", "Green"),
  { x: 30, y: 40 },
  7
);
const tree3 = new Tree(
  treeTypeFactory.getTreeType("Pine", "Green"),
  { x: 50, y: 60 },
  5
);

tree1.draw(); // Draw a tree of type Pine and color Green at position (10, 20) with size 5
tree2.draw(); // Draw a tree of type Oak and color Green at position (30, 40) with size 7
tree3.draw(); // Draw a tree of type Pine and color Green at position (50, 60) with size 5

/*
// Flyweight class
class Tea {
  constructor(public flavour: string) {}
}

// Flyweight Factory
class TeaFactory {
  private teaMap: Map<string, Tea> = new Map();

  public getTea(flavour: string): Tea {
    if (!this.teaMap.has(flavour)) {
      this.teaMap.set(flavour, new Tea(flavour));
      console.log(`Brewing up some ${flavour}`);
    }
    return this.teaMap.get(flavour)!;
  }
}

class TeaOrder {
  constructor(private tea: Tea, private table: number) {}

  serve(): void {
    console.log(
      `Serving tea flavor ${this.tea.flavour} to table ${this.table}`
    );
  }
}

class TeaShop {
  private orders: TeaOrder[] = [];

  constructor(private teaFactory: TeaFactory) {}

  public takeOrder(flavour: string, table: number) {
    const tea = this.teaFactory.getTea(flavour);
    this.orders.push(new TeaOrder(tea, table));
  }

  public serve(): void {
    this.orders.forEach((order) => order.serve());
  }
}

function main() {
  const teaFactory = new TeaFactory();
  const teaShop = new TeaShop(teaFactory);

  teaShop.takeOrder("earl grey", 1);
  teaShop.takeOrder("green tea", 2);
  teaShop.takeOrder("chai tea", 3);
  teaShop.takeOrder("earl grey", 4);
  teaShop.takeOrder("chai tea", 5);

  teaShop.serve();
}
main();

*/

/*

// Flyweight class
class CharacterFormat {
  constructor(public font: string, public size: number, public color: string) {}
}

// Flyweight factory
class FormatFactory {
  private formats: { [key: string]: CharacterFormat } = {};

  getFormat(font: string, size: number, color: string) {
    const key = `${font}_${size}_${color}`;
    if (!this.formats[key]) {
      this.formats[key] = new CharacterFormat(font, size, color);
    }
    return this.formats[key];
  }
}

// Client class
class Document {
  private characters: { [index: number]: string } = {};
  private formats: { [index: number]: CharacterFormat } = {};

  constructor(private formatFactory: FormatFactory) {}

  insertCharacter(index: number, character: string, font: string, size: number, color: string) {
    this.characters[index] = character;
    this.formats[index] = this.formatFactory.getFormat(font, size, color);
  }
}

// Usage
const formatFactory = new FormatFactory();
const document = new Document(formatFactory);

document.insertCharacter(0, 'H', 'Arial', 12, 'black');
document.insertCharacter(1, 'e', 'Arial', 12, 'black');
document.insertCharacter(2, 'l', 'Arial', 12, 'black');
// ...

*/
