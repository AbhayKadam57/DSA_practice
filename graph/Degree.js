class Graphnodes {
  constructor() {
    this.adjList = new Map();
  }

  addEdgeHelper(node, adj, weight) {
    if (this.adjList.has(node)) {
      let currSet = this.adjList.get(node);
      currSet.add({ adj, weight });
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

  getNode(node) {
    return this.adjList.get(node);
  }

  getAllNodes() {
    return Array.from(this.adjList.keys());
  }

  print() {
    console.log(this.adjList);
  }
}

let a = new Graphnodes();

a.addEdge(0, 1, 10);
a.addEdge(0, 2, 20);
a.addEdge(1, 2, 30);
a.addEdge(0, 5, 50);

a.print();

// console.log(a.getNode(1));

// console.log(a.getAllNodes());

// function degree(g) {
//   let nodes = g.getAllNodes();

//   let degree = new Map();

//   console.log(nodes[0]);

//   for (let i = 0; i < nodes.length; i++) {
//     let adj = g.adjList.get(nodes[i]);

//     console.log(adj);
//   }
// }

// degree(a);

function degree(g) {
  let nodes = g.getAllNodes();

  let degree = new Map();

  for (let i = 0; i < nodes.length; i++) {
    let adj = g.adjList.get(nodes[i]);

    for (let [key, value] of adj.entries()) {
      if (degree.get(key.adj)) {
        degree.set(key.adj, degree.get(key.adj) + 1);
      } else {
        degree.set(key.adj, 1);
      }
    }
  }

  console.log(degree);
}

degree(a);
