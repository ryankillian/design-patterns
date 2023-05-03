interface Door {
  getHeight(): number;
  getWidth(): number;
}
class WoodenDoor implements Door {
  constructor(public width: number, public height: number) {
    this.width = width;
    this.height = height;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
}

const DoorFactory = {
  makeDoor(width: number, height: number) {
    return new WoodenDoor(width, height);
  },
};

let door = DoorFactory.makeDoor(10, 100);
console.log(door.height);
