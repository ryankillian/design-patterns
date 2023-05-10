/*

Facade pattern provides a simplified interface to a complex subsystem.

The Facade GoF pattern is useful when you want to provide a simplified, unified interface to a complex subsystem or a set of related classes. It can help to reduce complexity, improve readability, and promote loose coupling between the client and the subsystem.

Here are some examples of the Facade GoF design pattern usage:

API Wrappers: Facade can be used to create a simple interface for interacting with complex APIs, such as those provided by external services or libraries. The facade simplifies the API, hides the complexity, and maps the client's requirements to the underlying API calls.

Subsystems: In a large software system with multiple subsystems, the Facade pattern can be used to create a unified interface for each subsystem. This allows clients to interact with the subsystems more easily, without needing to know about their internal details.

GUI Frameworks: GUI frameworks often have many complex components and interactions. A Facade pattern can be used to create a simplified interface for common tasks, making it easier for developers to create and manage user interfaces.

*/

// Complex subsystem classes

class Amplifier {
  on() {
    return "Amplifier is turned on\n";
  }

  setVolume(volume: number) {
    return `Amplifier volume is set to ${volume}\n`;
  }
}

class DvdPlayer {
  on() {
    return "DVD Player is turned on\n";
  }

  play(movie: string) {
    return `DVD Player is playing "${movie}"\n`;
  }
}

class Projector {
  on() {
    return "Projector is turned on\n";
  }

  setInput(input: string) {
    return `Projector input is set to ${input}\n`;
  }
}

// Facade class
class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private dvdPlayer: DvdPlayer,
    private projector: Projector
  ) {}

  watchMovie(movie: string) {
    return (
      this.amplifier.on() +
      this.amplifier.setVolume(10) +
      this.dvdPlayer.on() +
      this.dvdPlayer.play(movie) +
      this.projector.on() +
      this.projector.setInput("DVD")
    );
  }
}

// Usage
const amplifier = new Amplifier();
const dvdPlayer = new DvdPlayer();
const projector = new Projector();
const homeTheater = new HomeTheaterFacade(amplifier, dvdPlayer, projector);

console.log(homeTheater.watchMovie("Star Wars: A New Hope"));
/* Output:
Amplifier is turned on
Amplifier volume is set to 10
DVD Player is turned on
DVD Player is playing "Star Wars: A New Hope"
Projector is turned on
Projector input is set to DVD
*/

/*
class Computer {
  public makeSound() {
    console.log("Hum!");
  }
  public showLoadingScreen() {
    console.log("Loading...");
  }
  public bam() {
    console.log("Ready!");
  }
  public closeEverything() {
    console.log("Close!");
  }
  public blackScreen() {
    console.log("who turned out the lights?");
  }
  public pullCurrent() {
    console.log("Zzzz");
  }
}

class ComputeFacade {
  constructor(public computer: Computer) {}
  public turnOn() {
    this.computer.makeSound();
    this.computer.showLoadingScreen();
    this.computer.bam();
  }
  public turnOff() {
    this.computer.closeEverything();
    this.computer.blackScreen();
    this.computer.pullCurrent();
  }
}

function main() {
  const computer = new Computer();
  const facade = new ComputeFacade(computer);
  facade.turnOn();
}

main();

*/

/*

// Complex subsystem classes
class SubsystemA {
  operationA1() {
    return 'Subsystem A, Method A1\n';
  }

  operationA2() {
    return 'Subsystem A, Method A2\n';
  }
}

class SubsystemB {
  operationB1() {
    return 'Subsystem B, Method B1\n';
  }

  operationB2() {
    return 'Subsystem B, Method B2\n';
  }
}

// Facade class
class Facade {
  constructor(private subsystemA: SubsystemA, private subsystemB: SubsystemB) {}

  performOperationX() {
    return this.subsystemA.operationA1() + this.subsystemB.operationB1();
  }

  performOperationY() {
    return this.subsystemA.operationA2() + this.subsystemB.operationB2();
  }
}

// Usage
const subsystemA = new SubsystemA();
const subsystemB = new SubsystemB();
const facade = new Facade(subsystemA, subsystemB);

console.log(facade.performOperationX()); // Output: "Subsystem A, Method A1\nSubsystem B, Method B1\n"
console.log(facade.performOperationY()); // Output: "Subsystem A, Method A2\nSubsystem B, Method B2\n"


*/
