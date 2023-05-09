/*

The Strategy and State patterns might look similar at first glance since both involve using composition to delegate behavior to different objects. However, they have distinct use cases and intentions.

Strategy pattern:

The Strategy pattern is used when you have multiple algorithms or approaches to accomplish a specific task and you want to choose one of them at runtime.
The choice of a specific strategy is usually determined by the client or a higher-level component.
Strategies are often interchangeable and independent, meaning that they don't have a direct relationship with one another.
The main focus of the Strategy pattern is to define a family of algorithms, encapsulate each one, and make them interchangeable.
State pattern:

The State pattern is used when an object's behavior changes based on its internal state.
The state transitions are typically managed internally by the object itself or the state objects.
States often have a direct relationship with one another, representing a specific sequence of states or state transitions.
The main focus of the State pattern is to allow an object to change its behavior when its internal state changes, appearing as if the object has changed its class.
In summary, the Strategy pattern deals with choosing between different algorithms or approaches to accomplish a task, while the State pattern deals with an object's behavior that changes based on its internal state.

*/

/*

The State design pattern is useful when an object's behavior changes based on its internal state. It allows you to encapsulate state-specific logic in separate classes, promoting a cleaner and more maintainable code structure. Here are some examples of the State design pattern:

Traffic Light System: A traffic light system has different states (e.g., red, yellow, and green) with specific behaviors and transitions between states (e.g., red to green, green to yellow, and yellow to red). The State pattern can be used to represent each state with its logic and manage transitions between them.

Vending Machine: A vending machine can have multiple states like idle, processing payment, dispensing items, and out of stock. The State pattern can be used to represent these states and their behaviors, such as accepting payment or dispensing items, and managing transitions between the states based on user actions or internal conditions.

Media Player: A media player can have states like playing, paused, stopped, and buffering. The State pattern can be used to represent each state and manage the actions that can be performed in each state, like play, pause, stop, or resume.

Document Workflow: A document workflow system might have states like draft, under review, approved, and published. The State pattern can be used to represent each state and the allowed transitions between them. It can also manage state-specific behaviors like enabling or disabling editing, sending notifications, or managing access rights.

User Authentication: A user authentication system can have states like logged out, logged in, and locked due to too many failed login attempts. The State pattern can be used to represent each state and manage the allowed actions in each state, like login, logout, or unlock account.

These are just a few examples where the State design pattern can be applied to manage an object's behavior based on its internal state.

*/

/*
interface DocumentState {
  next(document: Document): void;
  previous(document: Document): void;
  printStatus(): void;
}

class Draft implements DocumentState {
  next(document: Document): void {
    document.setState(new UnderReview());
  }

  previous(document: Document): void {
    console.log("This is the first state. No previous state.");
  }

  printStatus(): void {
    console.log("The document is in the Draft state.");
  }
}

class UnderReview implements DocumentState {
  next(document: Document): void {
    document.setState(new Approved());
  }

  previous(document: Document): void {
    document.setState(new Draft());
  }

  printStatus(): void {
    console.log("The document is under review.");
  }
}

class Approved implements DocumentState {
  next(document: Document): void {
    document.setState(new Published());
  }

  previous(document: Document): void {
    document.setState(new UnderReview());
  }

  printStatus(): void {
    console.log("The document has been approved.");
  }
}

class Published implements DocumentState {
  next(document: Document): void {
    console.log("This is the final state. No further transitions.");
  }

  previous(document: Document): void {
    document.setState(new Approved());
  }

  printStatus(): void {
    console.log("The document is published.");
  }
}

class Document {
  private state: DocumentState;

  constructor() {
    this.state = new Draft();
  }

  setState(state: DocumentState): void {
    this.state = state;
  }

  next(): void {
    this.state.next(this);
  }

  previous(): void {
    this.state.previous(this);
  }

  printStatus(): void {
    this.state.printStatus();
  }
}

const document = new Document();
document.printStatus(); // The document is in the Draft state.

document.next();
document.printStatus(); // The document is under review.

document.next();
document.printStatus(); // The document has been approved.

document.next();
document.printStatus(); // The document is published.

document.previous();
document.printStatus(); // The document has been approved.

*/

interface TrafficLightState {
  next(trafficLight: TrafficLight): void;
  getStatus(): string;
}

class RedLight implements TrafficLightState {
  next(trafficLight: TrafficLight): void {
    trafficLight.setState(new GreenLight());
  }

  getStatus(): string {
    return "Red light. Stop!";
  }
}

class GreenLight implements TrafficLightState {
  next(trafficLight: TrafficLight): void {
    trafficLight.setState(new YellowLight());
  }

  getStatus(): string {
    return "Green light. Go!";
  }
}

class YellowLight implements TrafficLightState {
  next(trafficLight: TrafficLight): void {
    trafficLight.setState(new RedLight());
  }

  getStatus(): string {
    return "Yellow light. Slow down!";
  }
}

class TrafficLight {
  private state: TrafficLightState;

  constructor() {
    this.state = new RedLight();
  }

  setState(state: TrafficLightState): void {
    this.state = state;
  }

  next(): void {
    this.state.next(this);
  }

  getStatus(): string {
    return this.state.getStatus();
  }
}

const trafficLight = new TrafficLight();
console.log(trafficLight.getStatus()); // Red light. Stop!

trafficLight.next();
console.log(trafficLight.getStatus()); // Green light. Go!

trafficLight.next();
console.log(trafficLight.getStatus()); // Yellow light. Slow down!

trafficLight.next();
console.log(trafficLight.getStatus()); // Red light. Stop!
