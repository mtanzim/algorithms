import Graph from './Graph';

// s is the source of the search
export default class DepthFirstPaths {
  private marked : boolean [];
  private edgeTo : number [];
  private s: number;
  private graph : Graph;
  private debug: boolean;

  constructor(G: Graph, s: number, debug:boolean = false) {
    this.graph = G;
    this.s = s;
    this.edgeTo = [];
    this.marked = [];
    this.debug = debug;

    for (let i = 0; i < this.graph.getV() ; i++) {
      // make sure all positions are reset after the graph has been used
      G.adj[i].resetPosition();
      this.edgeTo[i] = null;
      this.marked[i] = false;
    }

    this.dfs(G,s);
  }

  setDebug(debug:boolean):void {
    this.debug = debug;
  }

  private dfs(G: Graph, v: number) {

    if (this.debug) {
      console.log(`Marking vertex:\t\t\t${v}`);
      console.log(`Connected nodes:\t\t${JSON.stringify(G.adj[v].getArrRep())}`);
      console.log(`Will visit nodes:\t\t${JSON.stringify(G.adj[v].getArrRep().filter(a=> !this.marked[a]))}`);
      console.log();
    }

    this.marked[v] = true;
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