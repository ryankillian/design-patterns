/*

In this example, we define an Employee interface as the Component, with the getSalary method. The Developer and Designer classes serve as Leaves and implement the Employee interface. Both classes have a salary property and a getSalary method that returns their salary.

The Team class acts as the Composite and also implements the Employee interface. It contains an array of Employee objects and has add, remove, and getSalary methods. The getSalary method in the Team class calculates the total salary of all employees in the team.

In the main function, we create two teams (teamA and teamB) and add developers and designers to the teams. We then create an organization, which is also a Team, and add the teams to the organization. Finally, we calculate and print the total salary of the organization.

By using the Composite pattern, we can treat individual employees and groups of employees uniformly, making it easy to calculate the total salary of the organization.

*/

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
