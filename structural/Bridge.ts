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
