// Flyweight class
class Tea {
  constructor(public flavour: string) {}
}

// Flyweight Factory
class TeaFactory {
  private teaMap: Map<string, Tea> = new Map();

  public getTea(flavour: string): Tea {
    if (!this.teaMap.has(flavour)) {
      this.teaMap.set(flavour, new Tea(flavour));
      console.log(`Brewing up some ${flavour}`);
    }
    return this.teaMap.get(flavour)!;
  }
}

class TeaOrder {
  constructor(private tea: Tea, private table: number) {}

  serve(): void {
    console.log(
      `Serving tea flavor ${this.tea.flavour} to table ${this.table}`
    );
  }
}

class TeaShop {
  private orders: TeaOrder[] = [];

  constructor(private teaFactory: TeaFactory) {}

  public takeOrder(flavour: string, table: number) {
    const tea = this.teaFactory.getTea(flavour);
    this.orders.push(new TeaOrder(tea, table));
  }

  public serve(): void {
    this.orders.forEach((order) => order.serve());
  }
}

function main() {
  const teaFactory = new TeaFactory();
  const teaShop = new TeaShop(teaFactory);

  teaShop.takeOrder("earl grey", 1);
  teaShop.takeOrder("green tea", 2);
  teaShop.takeOrder("chai tea", 3);
  teaShop.takeOrder("earl grey", 4);
  teaShop.takeOrder("chai tea", 5);

  teaShop.serve();
}
main();
