// Graph class representing the weighted graph
class Graph {
  constructor() {
    this.nodes = new Map();
    //   console.log(this.nodes)
  }

  addNode(name) {
    this.nodes.set(name, new Map());
    console.log(this.nodes);
  }

  addEdge(source, destination, weight) {
    this.nodes.get(source).set(destination, weight);
    this.nodes.get(destination).set(source, weight);

    console.log(this.nodes);
  }

  getShortestPath(startNode) {
    const distances = new Map();
    const visited = new Set();
    const previous = new Map();
    const queue = new PriorityQueue();

    // Initialize distances and previous nodes
    this.nodes.forEach((value, node) => {
      distances.set(node, Infinity);
      previous.set(node, null);
    });

    distances.set(startNode, 0);
    queue.enqueue(startNode, 0);

    while (!queue.isEmpty()) {
      const current = queue.dequeue().element;

      if (visited.has(current)) {
        continue;
      }

      visited.add(current);

      const neighbors = this.nodes.get(current);
      for (let [neighbor, weight] of neighbors.entries()) {
        const distance = distances.get(current) + weight;

        if (distance < distances.get(neighbor)) {
          distances.set(neighbor, distance);
          previous.set(neighbor, current); //A-C-D-E
          queue.enqueue(neighbor, distance);
        }
      }
    }

    //   console.log({distances, previous})

    return { distances, previous };
  }

  getPathToDestination(destination, previous) {
    const path = [];
    let current = destination;

    while (current !== null) {
      path.unshift(current);
      current = previous.get(current);
    }

    return path;
  }
}

// Priority Queue class for Dijkstra's algorithm
class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    const item = { element, priority };
    console.log(item);
    let added = false;

    for (let i = 0; i < this.elements.length; i++) {
      if (item.priority < this.elements[i].priority) {
        this.elements.splice(i, 0, item);
        added = true;
        break;
      }
    }

    if (!added) {
      this.elements.push(item);
    }
  }

  dequeue() {
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

// Example usage
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");

graph.addEdge("A", "B", 7);
graph.addEdge("A", "C", 1);
graph.addEdge("B", "D", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 4);
graph.addEdge("C", "E", 6);
graph.addEdge("C", "F", 5);
graph.addEdge("D", "E", 1);
graph.addEdge("E", "F", 2);

const startNode = "A";
const { distances, previous } = graph.getShortestPath(startNode);

graph.nodes.forEach((_, node) => {
  const path = graph.getPathToDestination(node, previous);
  const distance = distances.get(node);
  console.log(`Shortest path from ${startNode} to ${node}:`);
  console.log("Path:", path.join(" -> "));
  console.log("Distance:", distance);
  console.log("--------------------");
});
