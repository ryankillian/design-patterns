/*

The Proxy design pattern is useful when you want to control access to an object, add extra functionality, or optimize performance by delaying object creation or retrieval. Here are some common examples of the Proxy pattern:

Virtual Proxy: A virtual proxy is used to create a lightweight placeholder for an object that might be expensive to create or load. The proxy creates the actual object only when it is needed, which can save memory and improve performance.
Example: A large image gallery where high-resolution images are loaded only when the user clicks on the thumbnail. The virtual proxy acts as a placeholder for the full-size image, loading it only when necessary.

Remote Proxy: A remote proxy acts as a local representation of an object that exists in a different address space, such as a remote server. The remote proxy can handle communication and data marshalling between the local and remote systems.
Example: A client application accessing a remote database. The remote proxy manages the connection and communication with the database, providing a local interface for the client to interact with.

Protection Proxy: A protection proxy is used to control access to an object based on certain conditions or permissions. This can be useful for implementing security, authentication, or authorization mechanisms.
Example: A document management system where users have different access levels. The protection proxy checks the user's permissions before granting access to the document or performing certain actions, such as editing or deleting.

Caching Proxy: A caching proxy stores the results of expensive operations or frequently accessed resources, reducing the need for repeated computations or data retrieval. This can improve performance, reduce latency, and lower the load on the underlying system.
Example: A web proxy that caches web pages or API responses to serve them quickly to multiple clients, reducing the load on the web server and improving response times.

These examples demonstrate various use cases where the Proxy design pattern can be applied to control access, optimize performance, or add extra functionality to objects while maintaining a consistent interface.

*/

interface BankAccount {
  deposit(amount: number): void;
  withdraw(amount: number): boolean;
  getBalance(): number;
}

class RealBankAccount implements BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): boolean {
    if (amount <= this.balance) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  getBalance(): number {
    return this.balance;
  }
}

interface BankAccountProxyInterface {
  deposit(amount: number): void;
  withdraw(amount: number, password: string): boolean;
  getBalance(password: string): number;
}

class BankAccountProxy implements BankAccountProxyInterface {
  private realBankAccount: RealBankAccount = new RealBankAccount();
  constructor(private password: string) {}

  private authenticate(inputPassword: string): boolean {
    return inputPassword === this.password;
  }

  deposit(amount: number) {
    this.realBankAccount.deposit(amount);
  }

  withdraw(amount: number, inputPassword: string) {
    if (this.authenticate(inputPassword)) {
      return this.realBankAccount.withdraw(amount);
    }
    console.log("Authentication failed. Withdrawal denied.");
    return false;
  }
  getBalance(inputPassword: string): number {
    if (this.authenticate(inputPassword)) {
      return this.realBankAccount.getBalance();
    }
    console.log("Authentication failed. Balance check denied.");
    return -1;
  }
}

function main() {
  const password = "secret";
  const proxy: BankAccountProxyInterface = new BankAccountProxy(password);

  proxy.deposit(500);
  console.log(proxy.withdraw(100, "wrong_password")); // Authentication failed. Withdrawal denied. => false
  console.log(proxy.getBalance("wrong_password")); // Authentication failed. Balance check denied. => -1

  console.log(proxy.withdraw(100, password)); // => true
  console.log(proxy.getBalance(password)); // => 400
}

main();
