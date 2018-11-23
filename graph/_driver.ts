import Graph from "./Graph";
import DFPaths from "./DepthFirstPaths";
import BFSPaths from "./BreadthFirstPaths";

function createGraph() : Graph {
  let graph = new Graph(7);
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(0, 6);
  graph.addEdge(0, 5);
  graph.addEdge(5, 3);
  graph.addEdge(5, 4);
  graph.addEdge(3, 4);
  graph.addEdge(4, 6);
  return graph;
}

function driver() {
  let graph = createGraph();
  graph.repInString();
  let paths = new DFPaths(graph, 0, false);
  paths.setDebug(true);
  paths.repInString();
  console.log();
  let bfsPaths = new BFSPaths(graph, 0, false);
  bfsPaths.repInString(); 

}

driver();