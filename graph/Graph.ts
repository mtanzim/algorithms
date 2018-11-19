import Iterable from "../helper/Iterable";
import Bag from "../helper/Bag";

export default class Graph {
  
  private adj: Bag<number> [];
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

/*   getE():number {
    return ;
  } */

  repInString() : string {
    return JSON.stringify(this.adj, null, 2);
  }

  
}

function driver() {
  let graph = new Graph(5);
  graph.addEdge(1,2);
  graph.addEdge(1,3);
  console.log(graph.repInString());

}

// driver();