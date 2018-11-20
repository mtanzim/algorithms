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
    this.adj.forEach ( (a,i) => {
      (a.hasNext()) && console.log(`Vertex ${i}`);
      while (a.hasNext()) {
        console.log(`\t${a.next()}`);
      }
    })
    return JSON.stringify(this.adj, null, 2);
  }

  
}

function driver() {
  let graph = new Graph(10);
  graph.addEdge(1,2);
  graph.addEdge(1,2);
  graph.addEdge(1,3);
  graph.addEdge(1,4);
  graph.addEdge(2,3);
  graph.addEdge(2,4);
  graph.addEdge(3,4);
  graph.addEdge(5,2);
  // console.log(graph.repInString());
  graph.repInString();

}

driver();