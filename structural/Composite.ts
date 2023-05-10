/*

Some good examples of the Composite design pattern include:

File system: A file system is organized in a hierarchical structure with directories and files. Directories can contain other directories and files, while files represent the leaf nodes. You can use the Composite pattern to represent and manipulate the file system.

Graphical user interface (GUI) components: GUI components, such as containers and individual elements, can be organized using the Composite pattern. Containers can hold other containers or individual elements, while individual elements represent leaf nodes.

Organizational structure: You can use the Composite pattern to represent and manipulate organizational structures, such as departments and employees. Departments can contain other departments or employees, while employees represent leaf nodes.

HTML or XML DOM: The Composite pattern can be used to represent and manipulate the HTML or XML Document Object Model (DOM). Elements in the DOM can have child elements, while leaf nodes represent the end of the nesting structure.

Decision-making tree: In a decision-making tree, you have nodes representing decisions or actions, and each node can have multiple child nodes. The Composite pattern can be used to represent and manipulate such a tree structure.

The Composite design pattern is useful in several ways:

Simplifies client code: The Composite pattern allows clients to treat individual objects and compositions of objects uniformly. Clients can interact with both individual objects (leaf nodes) and composite objects (containers) through a common interface, which simplifies the client code.

Easier manipulation of complex structures: The Composite pattern allows you to build and manage complex, hierarchical structures more easily. By encapsulating the relationships and behavior within the composite and component objects, you can add, remove, or modify elements without having to modify the client code.

Reusability and flexibility: The Composite pattern promotes reusability and flexibility by separating the responsibilities of individual objects and their compositions. You can change or extend the structure without affecting the client code.

Consistent behavior across objects: Since all the components (both composite and leaf) implement the same interface, the behavior of the components remains consistent across the structure. This consistency makes it easier to understand and maintain the code.

Easier to add new components: The Composite pattern makes it easy to add new types of components to the system. You can introduce new components by implementing the same interface as the existing components, without the need to modify the client code or the overall structure.


In this example, we define an Employee interface as the Component, with the getSalary method. The Developer and Designer classes serve as Leaves and implement the Employee interface. Both classes have a salary property and a getSalary method that returns their salary.

The Team class acts as the Composite and also implements the Employee interface. It contains an array of Employee objects and has add, remove, and getSalary methods. The getSalary method in the Team class calculates the total salary of all employees in the team.

In the main function, we create two teams (teamA and teamB) and add developers and designers to the teams. We then create an organization, which is also a Team, and add the teams to the organization. Finally, we calculate and print the total salary of the organization.

By using the Composite pattern, we can treat individual employees and groups of employees uniformly, making it easy to calculate the total salary of the organization.



// Component
interface Employee {
  getSalary(): number;
}

// Leaf
class Developer implements Employee {
  constructor(private salary: number) {}

  public getSalary(): number {
    return this.salary;
  }
}

// Leaf
class Designer implements Employee {
  constructor(private salary: number) {}

  public getSalary(): number {
    return this.salary;
  }
}

// Composite
class Team implements Employee {
  private employees: Employee[] = [];

  public add(employee: Employee): void {
    this.employees.push(employee);
  }

  public remove(employee: Employee): void {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  public getSalary(): number {
    return this.employees.reduce(
      (total, employee) => total + employee.getSalary(),
      0
    );
  }
}

function main() {
  const developer1 = new Developer(4000);
  const developer2 = new Developer(5000);
  const designer1 = new Designer(4500);

  const teamA = new Team();
  teamA.add(developer1);
  teamA.add(designer1);

  const teamB = new Team();
  teamB.add(developer2);

  const organization = new Team();
  organization.add(teamA);
  organization.add(teamB);

  console.log(`Total salary: ${organization.getSalary()}`); // Output: Total salary: 13500
}

main();

*/

interface FileSystemComponent {
  show(): string;
}

class MyFile implements FileSystemComponent {
  constructor(private name: string) {}

  show(): string {
    return this.name;
  }
}

class Directory implements FileSystemComponent {
  private children: FileSystemComponent[] = [];

  constructor(private name: string) {}

  add(child: FileSystemComponent): void {
    this.children.push(child);
  }

  show(): string {
    const childrenInfo = this.children.map((child) => child.show()).join(", ");
    return `${this.name}: [${childrenInfo}]`;
  }
}

// Usage
const root = new Directory("root");
const documents = new Directory("documents");
const pictures = new Directory("pictures");

const file1 = new MyFile("file1.txt");
const file2 = new MyFile("file2.txt");
const file3 = new MyFile("file3.jpg");

documents.add(file1);
documents.add(file2);
pictures.add(file3);

root.add(documents);
root.add(pictures);

console.log(root.show());
console.log(documents.show());
