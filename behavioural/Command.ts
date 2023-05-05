/*

The Command design pattern is useful when you want to encapsulate actions or behavior as objects, which can be passed, stored, and executed when required. Here are some good examples of the Command pattern:

Undo/Redo functionality in text editors or graphic applications: Each action, like typing, deleting, or applying a format, can be represented as a command object. This allows the application to maintain a history of executed commands, enabling users to undo or redo actions.

Task scheduling and execution in job queues: In a job processing system, each task can be represented as a command object. The job queue can store and execute these command objects in a specific order or based on priority.

GUI button and menu actions: In a graphical user interface (GUI), buttons and menu items can trigger various actions. By associating command objects with these UI elements, you can decouple the UI elements from the code that performs the actions, making it easier to change or extend the behavior.

Remote procedure calls (RPC) or network commands: When sending commands or requests over a network, you can represent each command or request as a command object. This allows the client and server to communicate in a unified and decoupled manner.

Macro recording in software applications: Some applications allow users to record a series of actions as a macro, which can be played back to repeat the actions. By encapsulating each action as a command object, the application can record, store, and replay the macro easily.

*/

// Command interface
interface Command {
  execute(): void;
}

// Receiver classes
class Light {
  on() {
    console.log("Light is on");
  }

  off() {
    console.log("Light is off");
  }
}

class Door {
  open() {
    console.log("Door is open");
  }

  close() {
    console.log("Door is closed");
  }
}

// Concrete command classes
class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.on();
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.off();
  }
}

class DoorOpenCommand implements Command {
  constructor(private door: Door) {}

  execute() {
    this.door.open();
  }
}

class DoorCloseCommand implements Command {
  constructor(private door: Door) {}

  execute() {
    this.door.close();
  }
}

// Invoker class
class RemoteControl {
  private command!: Command;

  setCommand(command: Command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Client code
const light = new Light();
const door = new Door();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const doorOpen = new DoorOpenCommand(door);
const doorClose = new DoorCloseCommand(door);

const remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton(); // Output: Light is on

remote.setCommand(lightOff);
remote.pressButton(); // Output: Light is off

remote.setCommand(doorOpen);
remote.pressButton(); // Output: Door is open

remote.setCommand(doorClose);
remote.pressButton(); // Output: Door is closed

/*


To implement undo and redo functionality with the Command design pattern, you can extend your Command interface and the specific command classes to support these operations. Additionally, you need to maintain a history of commands to keep track of the performed actions. Here's an example:

The Invoker class now maintains a history of executed commands and their positions. The undo and redo methods call the corresponding methods on the command instances. The command classes themselves handle the actual undo and redo logic by reverting or re-applying the performed actions.

Remember that not all commands may be undoable or redoable, so you might need to adapt this example to accommodate such cases. You can also consider implementing different command interfaces or abstract classes for undoable and non-undoable commands if needed.

*/

// interface Command {
//   execute(): void;
//   undo(): void;
//   redo(): void;
// }

// class ConcreteCommand implements Command {
//   constructor(private receiver: Receiver) {}

//   execute() {
//     this.receiver.performAction();
//   }

//   undo() {
//     this.receiver.reverseAction();
//   }

//   redo() {
//     this.receiver.performAction();
//   }
// }

// class Invoker {
//   private history: Command[] = [];
//   private currentPosition: number = -1;

//   executeCommand(command: Command) {
//     command.execute();
//     this.history = this.history.slice(0, this.currentPosition + 1);
//     this.history.push(command);
//     this.currentPosition++;
//   }

//   undo() {
//     if (this.currentPosition < 0) {
//       console.log("Nothing to undo.");
//       return;
//     }

//     this.history[this.currentPosition].undo();
//     this.currentPosition--;
//   }

//   redo() {
//     if (this.currentPosition >= this.history.length - 1) {
//       console.log("Nothing to redo.");
//       return;
//     }

//     this.currentPosition++;
//     this.history[this.currentPosition].redo();
//   }
// }
