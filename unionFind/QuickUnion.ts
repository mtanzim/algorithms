import UnionFind from "./UnionFind";

export default class QuickFindEager extends UnionFind {
  constructor(size: number) {
    super(size);
  }

  private root(i: number): number {
    while (i !== this.id[i]) i = this.id[i];
    return i;
  }

  isConnected(a: number, b: number) {
    return this.root(a) === this.root(b);
  }
  union(a: number, b: number): void {
    console.log(`Connecting ${a} and ${b}`);
    const i: number = this.root(a);
    const j: number = this.root(b);
    this.id[i] = j;
  }
}
