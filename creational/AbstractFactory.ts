interface Door {
  getDescription(): void;
}

class WoodenDoor implements Door {
  getDescription() {
    console.log("Wooden Door");
  }
}

class IronDoor implements Door {
  getDescription() {
    console.log("Iron Door");
  }
}

interface DoorFittingExpert {
  getDescription(): void;
}

class Carpenter implements DoorFittingExpert {
  getDescription() {
    console.log("I fit wooden doors");
  }
}

class Welder implements DoorFittingExpert {
  getDescription() {
    console.log("I fit iron doors");
  }
}

interface DoorFactory {
  makeDoor(): Door;
  makeFitter(): DoorFittingExpert;
}

class WoodenDoorFactory implements DoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }
  makeFitter() {
    return new Carpenter();
  }
}

class IronDoorFactory implements DoorFactory {
  makeDoor() {
    return new IronDoor();
  }
  makeFitter() {
    return new Welder();
  }
}

const woodenFactory = new WoodenDoorFactory();
let door = woodenFactory.makeDoor();
door.getDescription();
let fitter = woodenFactory.makeFitter();
fitter.getDescription();

const ironFactory = new IronDoorFactory();
door = ironFactory.makeDoor();
door.getDescription();
fitter = ironFactory.makeFitter();
fitter.getDescription();
