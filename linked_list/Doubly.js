class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.front = new Node(null, null, null);
    this.rear = new Node(null, null, null);
    this.size = 0;
  }

  insertFront(val) {
    let inNode = new Node(val, null, null);

    if (this.size === 0) {
      this.front = this.rear = inNode;
    } else {
      inNode.next = this.front;
      this.front.prev = inNode;

      this.front = inNode;
    }
    this.size++;
  }

  insert(val, index) {
    if (index > this.size) {
      return "IndexOutOfRange";
    } else {
      if (index === 0) {
        this.insertFront(val);
      } else {
        let i = 0;

        let holder = this.front;

        while (i < index - 1) {
          holder = holder.next;

          i++;
        }

        let NewNode = new Node(val, holder.next, holder);

        holder.next = NewNode;
      }

      this.size++;
    }
  }

  deleteFront() {
    this.front = this.front.next;

    this.size--;
  }

  delete(index) {
    if (index > this.size) {
      return "IndexOutOfRange";
    } else {
      if (index === 0) {
        this.deleteFront();
      } else {
        let i = 0;

        let holder = this.front;

        while (i < index - 1) {
          holder = holder.next;

          i++;
        }

        holder.next.next.prev = holder;

        holder.next = holder.next.next;
      }

      this.size--;
    }
  }

  print() {
    let holder = this.front;

    while (holder) {
      console.log(holder.value);

      holder = holder.next;
    }
  }

  printReverse() {
    let holder = this.rear;

    while (holder !== null) {
      console.log(holder.value);

      holder = holder.prev;
    }
  }

  searchNode(val) {
    let holder = this.front;

    let i = 0;

    while (holder.value !== val) {
      holder = holder.next;

      i++;
    }

    return i;
  }

  printMiddle() {
    let fast = this.front;

    let slow = this.front;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    console.log(slow.value);
  }
}

let a = new LinkedList();

a.insertFront(1);
a.insertFront(2);
a.insertFront(3);
a.insertFront(4);
a.insertFront(10);
a.insert(5, 2);

a.print();

a.printMiddle();

// console.log(a.searchNode(5));
