import Graph from './Graph';
// import CircQueue = require('../../JSalgorithms/stacksAndQueues/circularQueue');

export default class DepthFirstPaths {
  private distTo: number [];
  private edgeTo: number[];
  private s: number;
  private graph: Graph;
  private debug: boolean;
  private circQ: number [];

  constructor(G: Graph, s: number, debug: boolean = false) {
    this.debug = debug;
    this.graph = G;
    this.s = s;
    this.edgeTo = [];
    this.distTo = [];
    this.circQ = [];
    this.debug = debug;

    for (let i = 0; i < this.graph.getV(); i++) {
      // make sure all positions are reset after the graph has been used
      G.adj[i].resetPosition();
      this.edgeTo[i] = null;
      this.distTo[i] = -1;
    }

    this.bfs(G, s);
  }

  setDebug(debug: boolean): void {
    this.debug = debug;
  }
  
  bfs(G:Graph, s: number) {
    let curDist = 1;
    // let v = 0;
    this.circQ.push(s);
    this.distTo[s] = curDist;

    // console.log(this.circQ);
    // console.log(s);

    while (this.circQ.length > 0) {
      let v = this.circQ.shift();
      if (this.debug) {
        console.log (`Will search for node ${v} which contains ${JSON.stringify(G.adj[v].getArrRep())}`)
        console.log(`Q contains ${JSON.stringify(this.circQ)}`);
      }
      while (G.adj[v].hasNext()) {
        let w = G.adj[v].next();
        if (this.distTo[w] === -1) {
          this.circQ.push(w);
          this.distTo[w] = curDist;
          this.edgeTo[w] = v;
        }
      }
      curDist ++;
    }
  }

  repInString(): void {
    console.log(`v\t\tEdge To\t\tDistance`);
    for (let i = 0; i < this.graph.getV(); i++) {
      console.log(`${i}\t\t${this.edgeTo[i]}\t\t${this.distTo[i]}`);
    }
  }

}