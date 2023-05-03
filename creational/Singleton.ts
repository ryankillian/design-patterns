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
