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
