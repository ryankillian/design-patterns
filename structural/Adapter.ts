/*

The Adapter design pattern is used when you want to allow two incompatible interfaces to work together. It acts as a wrapper that translates or adapts the interface of one class to the interface expected by another class. Here are a few examples:

Legacy code integration: When integrating legacy code or third-party libraries into your application, you may find that their interfaces don't match with the rest of your code. The Adapter pattern can be used to create a consistent interface, allowing seamless integration.

Different data formats: Imagine that your application needs to work with different data formats, such as JSON, XML, and CSV. You can create an adapter for each format to convert the data into a common format expected by your application.

API wrappers: When working with external APIs, the data returned may not match the format your application is expecting. An adapter can be used to modify the data structure or method names, making it easier to work with the API.

Adapting to different devices: In some cases, you may need to adapt your application to different devices, such as smartphones, tablets, and desktop computers. The Adapter pattern can be used to create device-specific interfaces that translate device-specific input/output to a format your application can understand.

Object-oriented adapters: When working with object-oriented programming languages, the Adapter pattern can be useful for adapting the interface of a class to match the expected interface of another class. This can be particularly helpful when working with third-party libraries or legacy code that cannot be modified directly.

*/

/*

In this example, MP3Player implements the MediaPlayer interface, which represents the target interface for our application. We have an incompatible AdvancedMediaPlayer interface, which the MP4Player class implements. We create an adapter class MP4PlayerAdapter that implements the MediaPlayer interface and translates the play() method call to the playMP4() method of the MP4Player class.

The client code can now use the MP4PlayerAdapter to play MP4 files using the same interface as for MP3 files, without changing the existing code.

*/

// Target interface
interface MediaPlayer {
  play(): void;
}

// Existing class implementing the target interface
class MP3Player implements MediaPlayer {
  play(): void {
    console.log("Playing MP3 file...");
  }
}

// Adaptee interface (incompatible with MediaPlayer)
interface AdvancedMediaPlayer {
  playMP4(): void;
}

// Adaptee class
class MP4Player implements AdvancedMediaPlayer {
  playMP4(): void {
    console.log("Playing MP4 file...");
  }
}

// Adapter class
class MP4PlayerAdapter implements MediaPlayer {
  private mp4Player: AdvancedMediaPlayer;

  constructor(mp4Player: AdvancedMediaPlayer) {
    this.mp4Player = mp4Player;
  }

  play(): void {
    this.mp4Player.playMP4();
  }
}

// Client code
const mp3Player: MediaPlayer = new MP3Player();
const mp4PlayerAdapter: MediaPlayer = new MP4PlayerAdapter(new MP4Player());

mp3Player.play(); // Output: Playing MP3 file...
mp4PlayerAdapter.play(); // Output: Playing MP4 file...

/*
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

*/

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
