import UnionFind from "./UnionFind";

export default class QuickFindEager extends UnionFind {
  constructor(size: number) {
    super(size);
  }

  isConnected(a: number, b: number): boolean {
    return this.id[a] === this.id[b];
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
    const aId: number = this.id[a];
    const bId: number = this.id[b];

    // a will the selected item to overwrite
    this.id = this.id.map(
      (item, index): number => {
        if (item === aId || item === bId) {
          return aId;
        } else {
          return item;
        }
      }
    );
  }
}


