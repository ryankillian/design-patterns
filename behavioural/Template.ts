/*

The Template Method design pattern is useful in situations where a general algorithm or process consists of a series of steps, and some of these steps need to be customized or overridden depending on the specific implementation. Here are a few examples:

Cooking Recipe:
Different types of dishes follow a general cooking process, such as preparing ingredients, cooking, and garnishing. However, the specific actions in each step may vary depending on the recipe. A base Recipe class can define the overall cooking process and provide customizable methods for subclasses to implement specific actions for each type of dish.

Data Exporters:
Suppose you need to export data from a system into different formats, like CSV, XML, or JSON. A base DataExporter class can define the overall process: fetching data, converting the data, and saving the data to a file. Subclasses for each format (CSV, XML, JSON) can provide specific implementations for the data conversion step.

Document Generators:
When generating documents, such as reports or invoices, you might have a common structure and styling but varying content. A DocumentGenerator base class can define the overall process: creating the document, adding a header, adding content, adding a footer, and saving the document. Subclasses can provide specific implementations for adding content, while the base class can handle the common aspects like header, footer, and saving.

Online payment processing:
An online payment system might support multiple payment gateways like PayPal, Stripe, or Google Pay. A base PaymentProcessor class can define the overall process: validating payment details, processing the payment, and handling the payment response. Subclasses for each payment gateway can provide specific implementations for processing the payment and handling the response, while the base class can handle common tasks like validating payment details.

*/

abstract class Recipe {
  // Template method
  cookDish(): void {
    this.prepareIngredients();
    this.cook();
    this.garnish();
  }

  // Abstract methods that subclasses will implement
  abstract prepareIngredients(): void;
  abstract cook(): void;
  abstract garnish(): void;
}

class PastaRecipe extends Recipe {
  prepareIngredients(): void {
    console.log("Boil water and add pasta.");
  }

  cook(): void {
    console.log("Cook the pasta until it's al dente.");
  }

  garnish(): void {
    console.log("Sprinkle with Parmesan cheese and parsley.");
  }
}

class StirFryRecipe extends Recipe {
  prepareIngredients(): void {
    console.log("Chop vegetables and slice meat.");
  }

  cook(): void {
    console.log("Stir-fry vegetables and meat in a wok.");
  }

  garnish(): void {
    console.log("Sprinkle with sesame seeds and green onions.");
  }
}

const pasta = new PastaRecipe();
pasta.cookDish();
// Output:
// Boil water and add pasta.
// Cook the pasta until it's al dente.
// Sprinkle with Parmesan cheese and parsley.

const stirFry = new StirFryRecipe();
stirFry.cookDish();
// Output:
// Chop vegetables and slice meat.
// Stir-fry vegetables and meat in a wok.
// Sprinkle with sesame seeds and green onions.
