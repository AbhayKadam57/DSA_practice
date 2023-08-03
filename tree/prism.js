class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addEdgeHelper(node, adj, weight) {
    if (this.adjList.has(node)) {
      var currSet = this.adjList.get(node);
      currSet.add({ adj, weight });
      //   this.adjList.set(node, currSet);
    } else {
      this.adjList.set(node, new Set([{ adj, weight }]));
    }
  }

  addEdge(node, adj, weight) {
    this.addEdgeHelper(node, adj, weight);

    if (adj != node) {
      this.addEdgeHelper(adj, node, weight);
    }
  }

  getEdges(node) {
    return this.adjList.get(node);
  }

  print() {
    console.log(this.adjList);
  }
}

let a = new Graph();

a.addEdge(1, 2);
a.addEdge(2, 3);
a.addEdge(3, 1);

function dfs(start, target, visited = new Set()) {
  console.log("Visiting Node " + start);

  if (start === target) {
    console.log("Found the target");

    return start;
  }

  visited.add(start);

  var adjNode = Array.from(a.getEdges(start));

  for (var i = 0; i < adjNode.length; i++) {
    if (!visited.has(adjNode[i].adj)) {
      var result = dfs(adjNode[i].adj, target, visited);

      if (result != null) {
        return result;
      }
    }
  }

  console.log(
    "Went through all children of " + start + ", returning to it's parent"
  );

  return null;
}
console.log(dfs(1, 3));

function bfs(start, target) {
  let queue = [start];

  let visited = new Set();

  while (queue.length > 0) {
    let current = queue.shift();

    if (current === target) {
      console.log("Found the goal");

      return current;
    }

    let adj = Array.from(a.getEdges(current));

    for (let i = 0; i < adj.length; i++) {
      if (!visited.has(adj[i].adj)) {
        queue.push(adj[i].adj);

        visited.add(adj[i].adj);
      }
    }

    console.log("Went through all children of " + current);
  }

  console.log("Could not find target");
  return null;
}

console.log(bfs(1, 3));
