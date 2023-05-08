/*


The Strategy design pattern is useful when you want to define a family of algorithms, encapsulate each one, and make them interchangeable. It allows you to select the algorithm you need at runtime, depending on the context or requirements.

Here are some examples of the Strategy design pattern:

Sorting algorithms: You can implement different sorting algorithms (e.g., QuickSort, MergeSort, BubbleSort) as separate strategy classes. This allows you to easily switch between algorithms at runtime depending on the size, type, and distribution of data.

Payment methods: In an e-commerce application, you might have different payment methods, such as credit card, PayPal, or bank transfer. Each payment method can be implemented as a separate strategy, allowing the system to choose the appropriate one at runtime depending on the user's selection.

Compression algorithms: When working with file compression, you can have multiple compression algorithms (e.g., ZIP, RAR, 7z) encapsulated as separate strategies. This allows you to easily switch between algorithms depending on the requirements, file type, or user preferences.

Image processing filters: In an image processing application, you can implement different filters (e.g., blur, sharpen, grayscale) as separate strategies. This allows you to apply the appropriate filter at runtime based on user input or specific conditions.

Travel routing algorithms: In a navigation application, you can have different routing algorithms (e.g., shortest path, fastest route, scenic route) implemented as separate strategies. This allows the system to choose the appropriate routing algorithm at runtime depending on user preferences or external factors such as traffic conditions.

*/

// Strategy
interface TravelStrategy {
  travel(): void;
}

// Concrete Strategies
class CarStrategy implements TravelStrategy {
  travel() {
    console.log("Traveling by car");
  }
}

class BikeStrategy implements TravelStrategy {
  travel() {
    console.log("Traveling by bike");
  }
}

class WalkStrategy implements TravelStrategy {
  travel() {
    console.log("Traveling by walking");
  }
}

class Traveler {
  constructor(private strategy: TravelStrategy) {}

  setTravelStrategy(strategy: TravelStrategy) {
    this.strategy = strategy;
  }

  travel() {
    this.strategy.travel();
  }
}

const traveler = new Traveler(new CarStrategy());
traveler.travel(); // Traveling by car

traveler.setTravelStrategy(new BikeStrategy());
traveler.travel(); // Traveling by bike

traveler.setTravelStrategy(new WalkStrategy());
traveler.travel(); // Traveling by walking
