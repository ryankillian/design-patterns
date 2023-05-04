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

/*

In this example, we define a CarService interface as the Component, with getDescription and getCost methods. The BasicCarService class acts as the Concrete Component and implements the CarService interface.

We create a CarServiceDecorator abstract class as the Decorator, which also implements the CarService interface. The CarServiceDecorator has a constructor that takes a CarService object and stores it as a protected property.

We then define Concrete Decorators (OilChange, TireRotation, and EngineTuning) that extend the CarServiceDecorator class. Each Concrete Decorator overrides the getDescription and getCost methods to add their own behavior and cost to the base CarService.

In the main function, we create a basic car service and add additional services (oil change, tire rotation, and engine tuning) using the Decorator pattern. This allows us to add or remove services dynamically and calculate the total cost of the car service.

By using the Decorator pattern, we can extend the functionality of objects without modifying their structure, and we can easily combine different services as needed.
*/
