/*

The Memento design pattern is used when you need to snapshot the state of an object, and be able to restore back to that state later. This pattern is particularly useful when your program needs an undo mechanism or when you need to maintain a history of states. Here are a couple of examples:

Text Editor/Word Processor Undo Mechanism: Word processors or text editors often have an undo functionality. When you type, delete, or format text, these changes can be reversed by using the undo function. Each operation can be captured as a memento. If the user decides to undo a change, the application can restore the state from the memento.

Game State Saving: In video games, especially in strategy games or role-playing games (RPGs), the ability to save and load the game state is crucial. The game state includes data such as the player’s character level, experience points, items, game world state, etc. The memento pattern can be used to create snapshots of the game state, which can then be loaded at a later time.

Database Transactions: In database systems, changes are often grouped into transactions. If an error occurs during the processing of a transaction, all changes need to be rolled back. This rollback operation can be implemented using the memento pattern, where each state before a transaction is saved, and can be restored if necessary.

Virtual Machine Snapshots: Virtualization software often provides a snapshot feature, which allows the state of a virtual machine to be saved and restored later. This can be useful for testing software in different states or for restoring a system after a failure.

Remember, the Memento pattern should be used when you need to capture and externalize an object's internal state so that it can be restored later, all without violating encapsulation.

*/

class Memento {
  constructor(private state: string) {}

  getContent() {
    return this.state;
  }
}

class Editor {
  private content: string = "";

  type(words: string): void {
    this.content += words;
  }

  getContent(): string {
    return this.content;
  }

  save(): Memento {
    return new Memento(this.content);
  }

  restore(memento: Memento): void {
    this.content = memento.getContent();
  }
}

const editor = new Editor();

editor.type("This is the first sentence.");
editor.type("This is second.");

const saved = editor.save();

editor.type("And this is third.");

console.log(editor.getContent()); // This is the first sentence. This is second. And this is third.

editor.restore(saved);

console.log(editor.getContent()); // This is the first sentence. This is second.
