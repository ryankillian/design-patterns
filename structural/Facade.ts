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

// Facade pattern provides a simplified interface to a complex subsystem.
