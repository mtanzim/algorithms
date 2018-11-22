import Graph from "./Graph";
import DFPaths from "./DepthFirstPaths";

function createGraph() : Graph {
  let graph = new Graph(7);
  graph.addEdge(0, 2);
  graph.addEdge(1, 2);
  graph.addEdge(1, 3);
  graph.addEdge(1, 4);
  graph.addEdge(2, 3);
  graph.addEdge(0, 4);
  graph.addEdge(3, 4);
  graph.addEdge(5, 2);
  return graph;
}

function driver() {
  let graph = createGraph();
  graph.repInString();
  let paths = new DFPaths(graph, 0);
  paths.repInString();

}

driver();