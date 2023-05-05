/*

The Observer pattern is quite common and can be found in a variety of contexts. Here are a few examples:

GUI Interactions: In many graphical user interfaces, when a button gets clicked, it notifies its listeners about the event, which react accordingly. The button is the subject, and the listeners are the observers.

Chat Rooms: In a chat room application, when a person sends a message, all members of the chat room receive the message. The chat room is the subject, and the members are the observers.

Model-View-Controller (MVC) Architecture: The Observer pattern is often used in the MVC architectural pattern, where the model is the subject, and the views are observers. When data in the model changes, the views are notified to update themselves.

News Publishing: When a news agency publishes a new article, all the subscribers to that agency receive the news article. The news agency is the subject, and the subscribers are the observers.

Stock Market: A stock market can notify observers (e.g., brokers) when a particular stock's price changes.

Weather Station: A weather station can send updates to various display devices (temperature display, humidity display, etc.) when the weather data changes.

Event Management in JavaScript: Many JavaScript frameworks and libraries use the Observer pattern for event handling. For example, in Node.js, we use the EventEmitter class to emit events and bind event handlers (observers).

Reactive Programming: Libraries such as RxJS (Reactive Extensions for JavaScript) are built around the Observer pattern, and allow data to be observed and reacted to as streams.

Remember, the primary goal of the Observer pattern is to define a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.

*/

class JobPost {
  constructor(public title: string) {}
}

class JobSeeker {
  constructor(private name: string) {}

  notify(jobPost: JobPost) {
    console.log(
      this.name,
      "has been notified of a new posting :",
      jobPost.title
    );
  }
}

class JobBoard {
  private subscribers: JobSeeker[] = [];

  addJobSeeker(jobSeeker: JobSeeker) {
    this.subscribers.push(jobSeeker);
  }
  addJob(jobPost: JobPost) {
    this.subscribers.forEach((jobSeeker) => jobSeeker.notify(jobPost));
  }
}

let john = new JobSeeker("John");
let jane = new JobSeeker("Jane");
let board = new JobBoard();
board.addJobSeeker(john);
board.addJobSeeker(jane);
board.addJob(new JobPost("postman"));
