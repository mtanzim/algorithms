import Graph from './Graph';

// s is the source of the search
export default class DepthFirstPaths {
  private marked : boolean [];
  private edgeTo : number [];
  private s: number;
  private graph : Graph;

  constructor(G: Graph, s: number) {
    this.graph = G;
    this.s = s;
    this.edgeTo = [];
    this.marked = [];

    for (let i = 0; i < this.graph.getV() ; i++) {
      // make sure all positions are reset after the graph has been used
      G.adj[i].resetPosition();
      this.edgeTo[i] = null;
      this.marked[i] = false;
    }

    this.dfs(G,s);
  }

  private dfs(G: Graph, v: number) {
    console.log (`marked vertex ${v}`);
    this.marked[v] = true;
    console.log(G.adj[v]);
    // console.log(G.adj[v].next());
    while (G.adj[v].hasNext()) {
      let w = G.adj[v].next();
      if (!this.marked[w]) {
        this.dfs(G, w);
        this.edgeTo[w] = v;
      }      
    }
  }

  repInString(): void {
    console.log(`v\tEdge To\tMarked`);
    for (let i = 0; i < this.graph.getV() ; i++) {
      console.log(`${i}\t${this.edgeTo[i]}\t${this.marked[i]}`);
    }
  }

}