/*

The Decorator GoF pattern is useful in scenarios where you need to dynamically add or modify behavior of an object without affecting other instances of the same class or without modifying the class itself. This pattern is particularly helpful when you want to extend an object's functionality in a flexible and modular way.

Some good examples of the Decorator pattern usage are:

GUI components: You can use the Decorator pattern to add or modify functionality of graphical user interface components, such as adding scrollbars, borders, or tooltips to elements without modifying their base classes.

Input/output streams: In some programming languages, the Decorator pattern is used to wrap I/O streams, allowing you to add functionality like buffering, compression, or encryption to an existing stream without modifying the underlying stream class.

Caching and logging: The Decorator pattern can be used to add caching or logging functionality to an existing class, such as an API client or data access layer, without modifying the class or affecting other instances of it.

Authentication and authorization: You can use the Decorator pattern to add authentication and authorization checks to existing classes, such as web services or API endpoints, without modifying their base classes or affecting other instances.

Adding new features to legacy code: If you have a legacy system where modifying the base class can be risky, you can use the Decorator pattern to add new features to existing classes without directly modifying their code.

*/

interface Calculator {
  add(a: number, b: number): number;
}

class SimpleCalculator implements Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

class LoggingCalculatorDecorator implements Calculator {
  constructor(private calculator: Calculator) {}

  add(a: number, b: number): number {
    console.log(`Adding ${a} and ${b}`);
    const result = this.calculator.add(a, b);
    console.log(`Result: ${result}`);
    return result;
  }
}

const simpleCalculator = new SimpleCalculator();
const loggingCalculator = new LoggingCalculatorDecorator(simpleCalculator);

const result = loggingCalculator.add(5, 3); // Output: "Adding 5 and 3", "Result: 8"

/*
//Component
interface CarService {
  getDescription(): string;
  getCost(): number;
}

//Concrete Component
class BasicCarService implements CarService {
  public getDescription() {
    return "Basic car service";
  }
  public getCost() {
    return 10;
  }
}

//Decorator
abstract class CarServiceDecorator implements CarService {
  constructor(protected carService: CarService) {}
  abstract getDescription(): string;
  abstract getCost(): number;
}

//Concrete Decorator
class OilChange extends CarServiceDecorator {
  public getDescription(): string {
    return this.carService.getDescription() + ", Oil Change";
  }
  public getCost(): number {
    return this.carService.getCost() + 3;
  }
}

//Concrete Decorator
class EngineTuning extends CarServiceDecorator {
  public getDescription(): string {
    return this.carService.getDescription() + ", Engine tuning";
  }
  public getCost(): number {
    return this.carService.getCost() + 4;
  }
}

function main() {
  const basicService = new BasicCarService();
  console.log(basicService.getDescription());
  console.log(`Cost: ${basicService.getCost()}`);

  const oilChange = new OilChange(basicService);
  console.log(oilChange.getDescription());
  console.log(`Cost: ${oilChange.getCost()}`);

  const fullService = new EngineTuning(new OilChange(new BasicCarService()));
  console.log(fullService.getDescription());
  console.log(`Cost: ${fullService.getCost()}`);
}

main();

*/
/*

In this example, we define a CarService interface as the Component, with getDescription and getCost methods. The BasicCarService class acts as the Concrete Component and implements the CarService interface.

We create a CarServiceDecorator abstract class as the Decorator, which also implements the CarService interface. The CarServiceDecorator has a constructor that takes a CarService object and stores it as a protected property.

We then define Concrete Decorators (OilChange, TireRotation, and EngineTuning) that extend the CarServiceDecorator class. Each Concrete Decorator overrides the getDescription and getCost methods to add their own behavior and cost to the base CarService.

In the main function, we create a basic car service and add additional services (oil change, tire rotation, and engine tuning) using the Decorator pattern. This allows us to add or remove services dynamically and calculate the total cost of the car service.

By using the Decorator pattern, we can extend the functionality of objects without modifying their structure, and we can easily combine different services as needed.
*/
