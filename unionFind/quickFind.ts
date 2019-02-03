export default class QuickFindEager {
  d: number[] = [];
  size: number = 0;

  constructor(size: number) {
    this.size = size;

    for (let i: number = 0; i < this.size; i++) {
      this.d.push(i);
    }
  }

  isConnected(a: number, b: number): boolean {
    return this.d[a] === this.d[b];
  }

  union(a: number, b: number): void {
    if (a > this.size - 1 || b > this.size - 1 || a < 0 || b < 0 || a === b) {
      throw new Error("Invalid inputs!");
    }
    if (this.isConnected(a, b)) {
      console.log("Already connected!");
      return;
    }

    console.log(`Connecting ${a} and ${b}`);
    // find most recent id of the items
    const aId: number = this.d[a];
    const bId: number = this.d[b];

    // a will the selected item to overwrite
    this.d = this.d.map(
      (item, index): number => {
        if (item === aId || item === bId) {
          return aId;
        } else {
          return item;
        }
      }
    );
  }

  printData(): string {
    return `[${this.d}]`;
  }
}

const main: () => void = () => {
  const quickFind = new QuickFindEager(9);
  console.log(quickFind.printData());
  quickFind.union(0, 8);
  console.log(quickFind.printData());
  quickFind.union(3, 4);
  console.log(quickFind.printData());
  quickFind.union(5, 6);
  console.log(quickFind.printData());
  quickFind.union(0, 6);
  console.log(quickFind.printData());
};

main();
