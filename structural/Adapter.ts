interface Lion {
  roar(): void;
}

class AfricanLion implements Lion {
  public roar() {
    console.log("african roar");
  }
}

class AsianLion implements Lion {
  public roar() {
    console.log("asian roar");
  }
}

class Hunter {
  public hunt(lion: Lion) {
    console.log("hunting");
    lion.roar();
  }
}

class WildDog {
  public bark() {
    console.log("barking");
  }
}

class WildDogAdapter implements Lion {
  constructor(public dog: WildDog) {}
  public roar() {
    this.dog.bark();
  }
}

const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);
const lion = new AfricanLion();

const hunter = new Hunter();
hunter.hunt(wildDogAdapter);
hunter.hunt(lion);
