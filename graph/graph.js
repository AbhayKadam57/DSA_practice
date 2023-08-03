// class Graph {
//   constructor() {
//     this.adjList = new Map();
//   }

//   addEdgeHelper(node, adj, weight) {
//     if (this.adjList.has(node)) {
//       let currSet = this.adjList.get(node);

//       currSet.add({ adj, weight });

//       this.adjList.set(node, currSet);
//     } else {
//       this.adjList.set(node, new Set([{ adj, weight }]));
//     }
//   }

//   addEdge(node, adj, weight) {
//     this.addEdgeHelper(node, adj, weight);

//     if (adj != node) {
//       this.addEdgeHelper(adj, node, weight);
//     }
//   }

//   getEdge(node) {
//     return this.adjList.get(node);
//   }
// }

// let a = new Graph();

// a.addEdge(0, 1, 10);
// a.addEdge(0, 2, 0);
// a.addEdge(1, 2, 0);

// console.log(a);

let c = {
  x: 1,
};

let d = {
  x: 1,
};

console.log(c == d);
