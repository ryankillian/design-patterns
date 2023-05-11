/*

The Singleton pattern is a creational design pattern that restricts the instantiation of a class to a single instance. This is useful when exactly one object is needed to coordinate actions across the system.

The Singleton pattern is designed to provide a way to ensure a class has just a single instance while ensuring that the instance is easily accessible. Typically, this involves creating a class with a method that creates a new instance of the class if none exist. If an instance already exists, it simply returns a reference to that object. To make sure the object cannot be instantiated any other way, the constructor is made either private or protected.

Here are some scenarios where Singleton might be applicable:

Logging: If you create a logger that writes logs to a file, you might want to have only one instance writing to that file to prevent race conditions.
Database connections: Establishing a database connection is typically time-consuming. So, you want to avoid opening a connection every time a query is made. A singleton database connector class can solve this issue.
File manager: An operating system with a file manager should not need multiple instances of the file manager.
Configuration settings: If you have an application with an initial configuration file, a singleton object could read this file only once (at startup) and then provide the configuration settings to the rest of the application.
Remember, overuse of Singleton is considered an anti-pattern. It can lead to problems in parallel execution, testing, and coupling, among other things. It should be used carefully and sparingly.

*/

/*

In this example, we have a Singleton class with a private constructor to prevent the class from being directly instantiated from outside the class. The getInstance static method creates a new instance if it doesn't exist and returns the instance. The incrementInstance method increases the count of instances and logs it. Even though we call Singleton.getInstance() twice, it returns the same instance (as shown by the final console.log), which demonstrates the Singleton pattern.

This is a simple example but it shows the principle. The Singleton pattern is often used for things like database connections, loggers or any other resource where you want to control the access and limit it to a single instance running through your codebase.

*/

class Singleton {
  private static instance: Singleton;
  private numberOfInstances: number = 0;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public incrementInstance(): void {
    this.numberOfInstances++;
    console.log(`Number of instances: ${this.numberOfInstances}`);
  }
}

// Usage
const singleton1 = Singleton.getInstance();
singleton1.incrementInstance(); // Number of instances: 1

const singleton2 = Singleton.getInstance();
singleton2.incrementInstance(); // Number of instances: 2

console.log(singleton1 === singleton2); // true

/*

class Singleton {
  private constructor() {}
  public static instance: Singleton;

  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

function main() {
  let instance1 = Singleton.getInstance();
  let instance2 = Singleton.getInstance();
  console.log(instance1 === instance2);
}

main();

*/
// // dbConnection.ts
// export class Database {
//   private static isConnected: boolean = false;

//   public static connect(): void {
//     if (!Database.isConnected) {
//       console.log("Connecting to the database...");
//       Database.isConnected = true;
//     } else {
//       console.log("Reusing existing database connection.");
//     }
//   }
// }

// // main.ts
// import { Database } from "./dbConnection";

// function main() {
//   // Connect to the database for the first time
//   Database.connect(); // Output: Connecting to the database...

//   // Reuse the existing connection
//   Database.connect(); // Output: Reusing existing database connection.
// }

// main();
