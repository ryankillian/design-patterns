/*

The Visitor design pattern is often used in scenarios where you have a complex object structure (like an object tree or a composite), and you want to perform operations on the objects in that structure, but you don't want to pollute their classes with these operations. This pattern defines a new operation without changing the classes of the elements on which it operates.

Here are some examples where the Visitor pattern can be beneficial:

Document editors: A document editor may have different types of elements like text, images, tables, etc. If you want to add an export functionality that can export these documents to multiple formats like PDF, Docx, or HTML, the Visitor pattern can be used to separate these export operations from the document classes.

Operating Systems or File Systems: The Visitor pattern can be used to perform operations on files in a file system. Different types of files may require different types of operations. For example, you might need to compress files, extract metadata, or index files for searching. The Visitor pattern allows you to define these operations without changing the file classes.

Rendering engines or Game engines: In a game engine, you may have different types of objects like sprites, lights, meshes, etc., and you want to perform operations like rendering, collision detection, or physics calculations. The Visitor pattern can be used to separate these operations from the object classes.

AST (Abstract Syntax Trees): In compilers, an AST is a tree representation of the abstract syntactic structure of source code. The Visitor pattern can be used to perform operations on the tree, like semantic checking, code generation, optimization, etc., without changing the classes of the nodes in the AST.

Shopping cart: In an e - commerce application, you might have different types of items in a shopping cart, and you want to calculate shipping or apply discounts differently based on the type of item.The Visitor pattern can be used to separate these operations from the item classes.


The Visitor design pattern is useful in situations where you need to perform a set of operations on a collection of objects with disparate types, but you want to avoid type checking or type casting in your code. Here are some benefits of the Visitor pattern:

Separation of Concerns: It helps to separate algorithms from the objects on which they operate, which can lead to cleaner code.

Adding new operations: It makes it easier to add new operations on the objects without modifying the objects themselves. The new operations are simply added in the new visitor.

Accumulating state: Visitors can accumulate state as they visit each object in the structure, which can be useful when performing complex operations.

Adding operations on existing classes: It can be useful when you need to add operations to existing classes and recompilation is not possible.

Group related operations: If there are several related operations to perform across a suite of objects, these can be grouped in a single Visitor class rather than being distributed among the object classes.

However, the Visitor pattern does have its downsides. One notable one is that it can become difficult to maintain if the object structure changes frequently, because any change would require modifications to the Visitor interface and all its concrete implementations. It also violates the principle of encapsulation because it requires exposing the internal details of the elements to the visitor for it to operate.

*/

class Monkey {
  shout() {
    console.log("Ooh oo aa aa!");
  }

  accept(operation: Visitor) {
    operation.visitMonkey(this);
  }
}

class Lion {
  roar() {
    console.log("Roaaar!");
  }

  accept(operation: Visitor) {
    operation.visitLion(this);
  }
}

class Dolphin {
  speak() {
    console.log("Tuut tuttu tuutt!");
  }

  accept(operation: Visitor) {
    operation.visitDolphin(this);
  }
}

interface Visitor {
  visitLion(lion: Lion): void;
  visitMonkey(monkey: Monkey): void;
  visitDolphin(dolphin: Dolphin): void;
}

const speak: Visitor = {
  visitLion(lion: Lion) {
    lion.roar();
  },
  visitMonkey(monkey: Monkey) {
    monkey.shout();
  },
  visitDolphin(dolphin: Dolphin) {
    dolphin.speak();
  },
};

const monkey = new Monkey();
const lion = new Lion();
const dolphin = new Dolphin();

monkey.accept(speak); // Ooh oo aa aa!
lion.accept(speak); // Roaaar!
dolphin.accept(speak); // Tuut tutt tuutt!

const jump: Visitor = {
  visitMonkey(monkey: Monkey) {
    console.log("Jumped 20 feet high! on to the tree!");
  },
  visitLion(lion: Lion) {
    console.log("Jumped 7 feet! Back on the ground!");
  },
  visitDolphin(dolphin: Dolphin) {
    console.log("Walked on water a little and disappeared");
  },
};

monkey.accept(speak); // Ooh oo aa aa!
monkey.accept(jump); // Jumped 20 feet high! on to the tree!

lion.accept(speak); // Roaaar!
lion.accept(jump); // Jumped 7 feet! Back on the ground!

dolphin.accept(speak); // Tuut tutt tuutt!
dolphin.accept(jump); // Walked on water a little and disappeared

/*

Benefits of using classes:

Encapsulation: Classes allow you to group related data and methods together, which makes the code more organized and easier to understand.
Inheritance: Classes enable you to inherit properties and methods from other classes, promoting code reuse.
Type checking: TypeScript can provide better type checking and code completion when using classes.
Benefits of using simple JavaScript objects:

Simplicity: Simple objects are easier to create and understand, especially when the functionality is limited.
Less boilerplate: You don't need to define constructors or class definitions, which reduces boilerplate code.
Easier to serialize: Objects can be easily serialized to JSON and sent over the network or stored in a database.
In this specific example, using simple JavaScript objects could be a better choice if you don't need any additional functionality or inheritance. The code becomes more concise, and the Visitor objects can be created without having to instantiate new classes.

However, if you foresee the need to add more functionality to the Jump and Speak visitors or if you'd like to inherit some behavior from other classes, using classes would be more appropriate.

*/
