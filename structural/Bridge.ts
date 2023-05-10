/*


The Bridge pattern is useful when you want to separate the abstraction from its implementation so that both can evolve independently. Here are some examples of the Bridge design pattern:

Cross-platform UI framework: A UI framework that can work on multiple platforms (like Windows, macOS, Linux) can use the Bridge pattern to separate the platform-independent UI components from the platform-specific implementation.

Communication protocols: In a system that supports multiple communication protocols (e.g., HTTP, FTP, WebSocket), the Bridge pattern can be used to separate the abstraction of communication from the specific implementation of each protocol.

Drawing/Graphics library: A graphics library supporting different rendering engines (e.g., OpenGL, DirectX, Vulkan) can use the Bridge pattern to provide a consistent API for clients while allowing the use of different rendering engines.

File formats: A software that supports multiple file formats (e.g., CSV, XML, JSON) can use the Bridge pattern to separate the file processing logic from the specific implementation of each file format.

Database drivers: In a database management system that supports multiple database engines (e.g., MySQL, PostgreSQL, SQLite), the Bridge pattern can be used to separate the generic database operations from the specific implementation of each database engine.

*/

interface WebPage {
  getContent(): void;
}

class About implements WebPage {
  constructor(public theme: Theme) {}

  public getContent() {
    console.log(`About in ${this.theme.getColor()}`);
  }
}

class Blog implements WebPage {
  constructor(public theme: Theme) {}
  public getContent() {
    console.log(`Blog in ${this.theme.getColor()}`);
  }
}

interface Theme {
  getColor(): string;
}

class DarkTheme implements Theme {
  public getColor() {
    return "Dark Theme";
  }
}

class LightTheme implements Theme {
  public getColor() {
    return "Light Theme";
  }
}

const darkTheme = new DarkTheme();
const about = new About(darkTheme);
about.getContent();

const lightTheme = new LightTheme();
let blog = new Blog(lightTheme);
blog.getContent();
blog = new Blog(darkTheme);
blog.getContent();

// // Implementor
// interface DrawingAPI {
//   drawCircle(x: number, y: number, radius: number): void;
// }

// // Concrete Implementors
// class DrawingAPI1 implements DrawingAPI {
//   public drawCircle(x: number, y: number, radius: number): void {
//     console.log(`DrawingAPI1: Drawing circle at (${x}, ${y}) with radius ${radius}`);
//   }
// }

// class DrawingAPI2 implements DrawingAPI {
//   public drawCircle(x: number, y: number, radius: number): void {
//     console.log(`DrawingAPI2: Drawing circle at (${x}, ${y}) with radius ${radius}`);
//   }
// }

// // Abstraction
// abstract class Shape {
//   constructor(protected drawingAPI: DrawingAPI) {}

//   public abstract draw(): void;
//   public abstract resizeByPercentage(pct: number): void;
// }

// // Refined Abstraction
// class CircleShape extends Shape {
//   constructor(private x: number, private y: number, private radius: number, drawingAPI: DrawingAPI) {
//     super(drawingAPI);
//   }

//   public draw(): void {
//     this.drawingAPI.drawCircle(this.x, this.y, this.radius);
//   }

//   public resizeByPercentage(pct: number): void {
//     this.radius *= pct;
//   }
// }

// function main() {
//   const shapes: Shape[] = [
//     new CircleShape(1, 2, 3, new DrawingAPI1()),
//     new CircleShape(5, 7, 11, new DrawingAPI2()),
//   ];

//   for (const shape of shapes) {
//     shape.resizeByPercentage(2.5);
//     shape.draw();
//   }
// }

// main();

/*

// Implementor
interface Renderer {
  renderCircle(radius: number): void;
}

// Concrete Implementor A
class CanvasRenderer implements Renderer {
  renderCircle(radius: number): void {
    console.log(`Canvas: Drawing a circle with radius ${radius}`);
  }
}

// Concrete Implementor B
class SVGRenderer implements Renderer {
  renderCircle(radius: number): void {
    console.log(`SVG: Drawing a circle with radius ${radius}`);
  }
}

// Abstraction
abstract class Shape {
  constructor(protected renderer: Renderer) {}

  abstract draw(): void;
}

// Refined Abstraction
class Circle extends Shape {
  constructor(renderer: Renderer, private radius: number) {
    super(renderer);
  }

  draw(): void {
    this.renderer.renderCircle(this.radius);
  }
}

// Usage
const canvasRenderer = new CanvasRenderer();
const svgRenderer = new SVGRenderer();

const canvasCircle = new Circle(canvasRenderer, 5);
const svgCircle = new Circle(svgRenderer, 10);

canvasCircle.draw(); // Canvas: Drawing a circle with radius 5
svgCircle.draw(); // SVG: Drawing a circle with radius 10


*/
