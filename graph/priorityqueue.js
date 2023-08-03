class Node {
  constructor(node, priority) {
    this.node = node;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    const inNode = new Node(value, priority);

    let contain = false;

    let i = 0;

    while (i < this.queue.length && !contain) {
      if (this.queue[i].priority > inNode.priority) {
        this.queue.splice(i, 0, inNode);
        contain = true;
      }

      i++;
    }

    if (!contain) {
      this.queue.push(inNode);
    }

    // this.queue.push(inNode);

    // this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift();
  }

  print() {
    console.log(this.queue);
  }
}

let a = new PriorityQueue();

a.enqueue(0, 500);
a.enqueue(1, 200);
a.enqueue(2, 50);
a.enqueue(3, 100);
a.enqueue(4, 600);

a.print();
