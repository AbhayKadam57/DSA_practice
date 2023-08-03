class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

function hotPotato(queue, num) {
  while (queue.size() > 1) {
    for (let i = 2; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }

  console.log(queue);
  return queue.front();
}

const myQueue = new Queue();
myQueue.enqueue("Alice");
myQueue.enqueue("Bob");
myQueue.enqueue("Charlie");
myQueue.enqueue("David");
myQueue.enqueue("Eve");

const winner = hotPotato(myQueue, 1);
console.log(winner); // Output: "Charlie"
