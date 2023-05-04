/*

Here are some examples of the Chain of Responsibility pattern:

Logging systems:
In logging systems, log messages may need to pass through different loggers that process messages at different levels of severity (e.g., error, warning, info, debug). Each logger in the chain can decide whether to handle the message or pass it along to the next logger in the chain.

Authentication and authorization:
In a system that requires multiple levels of authentication and authorization, you can create a chain of authentication handlers. Each handler in the chain checks for specific criteria, such as username and password, token validation, or role-based access control. If a handler cannot authenticate the user, it passes the request to the next handler in the chain.

Customer support:
In a customer support system, a chain of support staff can handle customer inquiries. If a support staff member cannot handle a request, they escalate it to the next level of support staff in the chain.

Request processing in web applications:
In web applications, requests can go through a chain of middleware handlers, where each handler is responsible for a specific task such as request validation, authentication, logging, caching, or compression. Each middleware can either process the request and pass it to the next middleware in the chain or terminate the chain if an error occurs.

Input validation:
In a form validation system, you can create a chain of validators to check different aspects of the user input, such as format, length, or data type. If a validator encounters invalid data, it can either stop the chain or pass the input to the next validator in the chain.

These examples demonstrate how the Chain of Responsibility pattern can be used in various scenarios to decouple the sender of a request from the receiver, allowing multiple objects to handle the request and enabling greater flexibility and maintainability in the system design.

*/

// Handler Interface
interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

// Abstract Handler
abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

// Concrete Handler 1
class ConcreteHandler1 extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "Request1") {
      return `ConcreteHandler1: Handling ${request}`;
    }
    return super.handle(request);
  }
}

// Concrete Handler 2
class ConcreteHandler2 extends AbstractHandler {
  handle(request: string): string | null {
    if (request === "Request2") {
      return `ConcreteHandler2: Handling ${request}`;
    }
    return super.handle(request);
  }
}

// Client code
function clientCode(handler: Handler) {
  const requests = ["Request1", "Request2", "Request3"];

  for (const request of requests) {
    console.log(`Client: Who wants to handle ${request}?`);

    const result = handler.handle(request);

    if (result) {
      console.log(`  ${result}`);
    } else {
      console.log(`  ${request} was not handled.`);
    }
  }
}

const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();

handler1.setNext(handler2);

clientCode(handler1);

// Handler Interface
interface PizzaHandler {
  setNext(handler: PizzaHandler): PizzaHandler;
  preparePizza(pizza: string): string | null;
}

// Abstract Handler
abstract class AbstractPizzaHandler implements PizzaHandler {
  private nextHandler: PizzaHandler | null = null;

  setNext(handler: PizzaHandler): PizzaHandler {
    this.nextHandler = handler;
    return handler;
  }

  preparePizza(pizza: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.preparePizza(pizza);
    }
    return null;
  }
}

// Concrete Handler 1: Dough Maker
class DoughMaker extends AbstractPizzaHandler {
  preparePizza(pizza: string): string | null {
    console.log("DoughMaker: Preparing the dough");
    return super.preparePizza(pizza);
  }
}

// Concrete Handler 2: Sauce Maker
class SauceMaker extends AbstractPizzaHandler {
  preparePizza(pizza: string): string | null {
    console.log("SauceMaker: Adding the sauce");
    return super.preparePizza(pizza);
  }
}

// Concrete Handler 3: Toppings Adder
class ToppingsAdder extends AbstractPizzaHandler {
  preparePizza(pizza: string): string | null {
    console.log(`ToppingsAdder: Adding toppings for ${pizza}`);
    return super.preparePizza(pizza);
  }
}

// Client code
function makePizza(handler: PizzaHandler, pizza: string) {
  console.log(`\nPreparing ${pizza}:`);
  handler.preparePizza(pizza);
}

const doughMaker = new DoughMaker();
const sauceMaker = new SauceMaker();
const toppingsAdder = new ToppingsAdder();

doughMaker.setNext(sauceMaker).setNext(toppingsAdder);

makePizza(doughMaker, "Margherita");
makePizza(doughMaker, "Pepperoni");
