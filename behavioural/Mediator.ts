/*

The Mediator pattern promotes a "many-to-many relationship network" to "full object status". It's a behavioral design pattern that encapsulates how a set of objects interact. Here are some examples where the Mediator pattern might be applicable:

Chat room: As in the example I just gave, a chat room can act as a mediator between multiple users, handling messages and distributing them appropriately.

Air Traffic Control (ATC) System: An ATC system can act as a mediator between airplanes, coordinating take-offs, landings, and in-flight paths to avoid collisions. Each plane doesn't need to communicate with all the others, just with the ATC system.

GUI Components: In a complex graphical user interface, different elements (buttons, checkboxes, text fields) might need to interact, but it can become very complex if each component interacts directly with all the others. A mediator object can coordinate these interactions.

Database applications: When multiple clients are interacting with a database simultaneously, a mediator can coordinate these interactions, handling queries, updates, and transactions.

Workflow Engine: A workflow engine can act as a mediator coordinating the execution of multiple tasks, managing dependencies between them, error handling, etc.

Smart House: In a smart home, various devices like lights, heating systems, blinds, music systems, etc., are interconnected. A central hub (mediator) can control and coordinate the activities of these devices based on user input or sensor data.

Remember, the main idea of the Mediator pattern is to reduce the complexity of communication between a group of objects, by moving this communication to one central point (the mediator).

*/

/*

In this example, User objects represent Colleagues, and the ChatRoom is the Mediator. The Mediator's role is to handle and coordinate communication between Colleague objects. In this case, a user can send a message via the chat room, and the chat room handles how that message is disseminated.

This is a simplified example, but it illustrates the core concept of the Mediator pattern. In a more complex scenario, the ChatRoom could handle more sophisticated routing, filtering, or modification of messages.

*/

interface Mediator {
  showMessage(user: User, message: string): void;
}

class ChatRoom implements Mediator {
  showMessage(user: User, message: string) {
    const time = new Date();
    const sender = user.getName();
    console.log(`${time}[${sender}]: ${message}`);
  }
}

class User {
  constructor(public chatMediator: ChatRoom, public name: string) {}

  getName() {
    return this.name;
  }

  send(message: string) {
    this.chatMediator.showMessage(this, message);
  }
}

let chatroom = new ChatRoom();

let bob = new User(chatroom, "Bob");
let alice = new User(chatroom, "Alice");

bob.send("Hi, Alice!");
alice.send("Hey, Bob!");
