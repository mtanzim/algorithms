export default abstract class UnionFind {
  id: number[] = [];
  size: number = 0;

  constructor(size: number) {
    this.size = size;
    for (let i: number = 0; i < this.size; i++) {
      this.id.push(i);
    }
  }

  abstract isConnected(a: number, b: number): boolean;
  abstract union(a: number, b: number): void;
  
  toStr(): string {
    return `[${this.id}]`;
  }
}
