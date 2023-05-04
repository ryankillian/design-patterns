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

// // Temperature interface in Celsius
// interface Temperature {
//   getCelsius(): number;
// }

// // Legacy TemperatureFahrenheit class
// class TemperatureFahrenheit {
//   constructor(public fahrenheit: number) {}

//   public getFahrenheit(): number {
//     return this.fahrenheit;
//   }
// }

// // Adapter class to adapt TemperatureFahrenheit to the Temperature interface
// class TemperatureFahrenheitAdapter implements Temperature {
//   constructor(private temperatureFahrenheit: TemperatureFahrenheit) {}

//   public getCelsius(): number {
//     return ((this.temperatureFahrenheit.getFahrenheit() - 32) * 5) / 9;
//   }
// }

// function printTemperatureInCelsius(temperature: Temperature) {
//   console.log(`Temperature in Celsius: ${temperature.getCelsius().toFixed(2)}`);
// }

// const legacyTemperature = new TemperatureFahrenheit(100);
// const adaptedTemperature = new TemperatureFahrenheitAdapter(legacyTemperature);

// printTemperatureInCelsius(adaptedTemperature); // Output: Temperature in Celsius: 37.78
