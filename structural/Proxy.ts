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

/*

The Proxy design pattern is a structural design pattern that involves a set of objects that represent another object called the "subject." The proxy objects act as an intermediary between a client and the subject, controlling or enhancing the access to the subject. The proxy pattern is useful when direct access to the subject is impractical or undesirable for various reasons, such as performance, security, or complexity.

There are several types of proxies, including:

Virtual Proxy: This type of proxy delays the creation or loading of an expensive resource until it is actually needed. This is useful when working with large objects that consume a lot of memory or take a long time to load.

Remote Proxy: This proxy provides a local representation of a remote object. It allows communication between objects residing in different address spaces, such as across a network or the internet.

Protective Proxy: This proxy controls access to a sensitive object by performing authentication or authorization checks before allowing access to the subject.

Smart Reference Proxy: This proxy can add additional functionality or behavior to an object, such as reference counting, caching, or logging, without affecting the subject's core functionality.

The Proxy pattern involves the following components:

Subject: This is an interface that defines the common interface for the RealSubject and the Proxy classes.
RealSubject: This is the actual object that the Proxy represents and that the client wants to interact with.
Proxy: This class implements the Subject interface and maintains a reference to the RealSubject. It can control access to the RealSubject or add additional behavior as needed.
The client interacts with the Proxy object, which, in turn, forwards calls to the RealSubject as necessary. The client may not even be aware that it's interacting with a proxy instead of the actual object.

*/

// Subject Interface
interface BankAccount {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  getBalance(): number;
}

// RealSubject
class RealBankAccount implements BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

// Proxy
class BankAccountProxy implements BankAccount {
  private realBankAccount: RealBankAccount = new RealBankAccount();

  constructor(private pin: string, private enteredPin: string) {}

  private isAuthenticated(): boolean {
    return this.pin === this.enteredPin;
  }

  deposit(amount: number): void {
    if (this.isAuthenticated()) {
      this.realBankAccount.deposit(amount);
    } else {
      console.log("Invalid PIN. Access denied.");
    }
  }

  withdraw(amount: number): void {
    if (this.isAuthenticated()) {
      this.realBankAccount.withdraw(amount);
    } else {
      console.log("Invalid PIN. Access denied.");
    }
  }

  getBalance(): number {
    if (this.isAuthenticated()) {
      return this.realBankAccount.getBalance();
    } else {
      console.log("Invalid PIN. Access denied.");
      return 0;
    }
  }
}

// Client code
const pin = "1234";
const account = new BankAccountProxy(pin, "1111");

account.deposit(100); // Invalid PIN. Access denied.
account.withdraw(50); // Invalid PIN. Access denied.
console.log(account.getBalance()); // Invalid PIN. Access denied. 0

const correctPinAccount = new BankAccountProxy(pin, pin);
correctPinAccount.deposit(100); // Deposit successful
correctPinAccount.withdraw(50); // Withdrawal successful
console.log(correctPinAccount.getBalance()); // 50

/*
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

*/
