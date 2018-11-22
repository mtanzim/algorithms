import Iterable from "../helper/Iterable";
import Bag from "../helper/Bag";

export default class Graph {
  
  readonly adj: Bag<number> [];
  private V: number;

  constructor(V: number) {
    this.V = V;
    this.adj = [];

    for (let i = 0; i < V; i ++) {
      this.adj[i] = new Bag();
    }

  }

  addEdge(v:number, w: number): void {
    this.adj[v].add(w);
    this.adj[w].add(v);
  }

  getV():number {
    return this.V;
  }
  
  repInString() : string {

    const printVertexInfo = (a:Iterable<number>) => {
      let str = '';
      while (a.hasNext()) {
        str += a.next() + ' ' ;
      }
      return str;
    }

    this.adj.forEach ( (a,i) => {
      (a.hasNext()) && console.log(`Vertex ${i}: ${printVertexInfo(a)}`)
    });

    console.log();

    return JSON.stringify(this.adj, null, 2);
  }
  
}