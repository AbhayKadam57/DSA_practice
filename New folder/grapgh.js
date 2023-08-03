class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addEdgeHelper(node, adj, weight) {
    if (this.adjList.has(node)) {
      let currNode = this.adjList.get(node);

      currNode.add({ adj, weight });
    } else {
      this.adjList.set(node, new Set([{ adj, weight }]));
    }
  }

  addEdge(node, adj, weight) {
    this.addEdgeHelper(node, adj, weight);

    if (adj !== node) {
      this.addEdgeHelper(adj, node, weight);
    }
  }

  getEdges(node) {
    return this.adjList.get(node);
  }

  getAllNodes() {
    return Array.from(this.adjList.keys());
  }
}

let g = new Graph();

g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(3, 1);
g.addEdge(1, 6);

// console.log(g);

// console.log(g.getEdges(1));

// function degree(g) {
//   let nodes = g.getAllNodes();

//   let degree = new Map();

//   console.log(nodes);

//   for (let i = 0; i < nodes.length; i++) {
//     let adj = g.adjList.get(nodes[i]);

//     for (let [key, value] of adj.entries()) {
//       if (degree.has(key.adj)) {
//         degree.set(key.adj, degree.get(key.adj) + 1);
//       } else {
//         degree.set(key.adj, 1);
//       }
//     }
//   }

//   return degree;
// }

// console.log(degree(g));

// function dfs(start, end, visited = new Set()) {
//   console.log(`search is started at ${start}`);

//   if (start === end) {
//     console.log("Goal is found");

//     return start;
//   }

//   visited.add(start);
//   let adjNode = Array.from(g.getEdges(start));

//   for (let i = 0; i < adjNode.length; i++) {
//     if (!visited.has(adjNode[i].adj)) {
//       let result = dfs(adjNode[i].adj, end, visited);

//       if (result !== null) {
//         return result;
//       }
//     }
//   }
//   console.log(
//     "Went through all children of " + start + ", returning to it's parent"
//   );

//   return null;
// }

// console.log(dfs(1, 6));

function bfs(start, end) {
  console.log(`serach stareted at ${start}`);
  let queue = [start];

  let visited = new Set();

  while (queue.length > 0) {
    let current = queue.shift();

    if (current === end) {
      console.log("found the goal");

      return current;
    }

    let adjNode = Array.from(g.getEdges(start));

    for (let i = 0; i < adjNode.length; i++) {
      if (!visited.has(adjNode[i].adj)) {
        queue.push(adjNode[i].adj);

        visited.add(adjNode[i].adj);
      }
    }
  }

  console.log("search all node of parent");

  return null;
}

console.log(bfs(1, 3));
// function dfs(start, end) {
//   console.log(`search started at ${start}`);

//   if (start === end) {
//     console.log("Goal is found");

//     return start;
//   }

//   let visited = new Set();
//   visited.add(start);

//   let stack = [start];

//   while (stack.length > 0) {
//     let current = stack.pop();

//     let adjNode = Array.from(g.getEdges(current));

//     for (let i = 0; i < adjNode.length; i++) {
//       if (!visited.has(adjNode[i].adj)) {
//         stack.push(adjNode[i].adj);

//         visited.add(adjNode[i].adj);

//         if (adjNode[i].adj === end) {
//           console.log("Goal is found");

//           return adjNode[i].adj;
//         }
//       }
//     }

//     console.log(
//       "Went through all children of " + current + ", returning to its parent"
//     );
//   }

//   console.log("Searched all nodes but goal not found");

//   return null;
// }

// console.log(dfs(1, 6));
