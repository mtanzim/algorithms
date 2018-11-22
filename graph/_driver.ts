import Graph from "./Graph";
import DFPaths from "./DepthFirstPaths";

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
  let paths = new DFPaths(graph, 0, true);
  // paths.setDebug(true);
  paths.repInString();

}

driver();