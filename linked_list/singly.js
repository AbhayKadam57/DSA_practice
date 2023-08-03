class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.front = new Node(null, null);
    this.size = 0;
  }

  insertFront(val) {
    const inNode = new Node(val, this.front);

    this.front = inNode;
    this.size++;
  }

  print() {
    let holder = this.front;

    while (holder.next !== null) {
      console.log(holder.value);

      holder = holder.next;
    }
  }

  insertAtRandom(index, val) {
    if (index > this.size) {
      throw "IndexOutOfRange";
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

        const inNode = new Node(val, holder.next);

        holder.next = inNode;
        this.size++;
      }
    }
  }

  deleteFront() {
    this.front = this.front.next;
    this.size--;
  }

  deleteAtIndex(index) {
    if (index > this.size) {
      throw "IndexOutOfRange";
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

        holder.next = holder.next.next;

        this.size--;
      }
    }
  }

  RemoveValue(val) {
    if (val === this.front.value) {
      this.deleteFront();
    } else {
      let i = 0;
      let holder = this.front;

      while (holder.value !== val) {
        holder = holder.next;

        i++;
      }

      this.deleteAtIndex(i, val);
    }
  }

  addAtLast(val) {
    if (this.size === 0) {
      this.insertFront(val);
    } else {
      let i = 0;

      let holder = this.front;
      while (i < this.size - 1) {
        holder = holder.next;
        i++;
      }

      const inNode = new Node(val, holder.next);

      holder.next = inNode;

      this.size++;
    }
  }

  Size() {
    return this.size;
  }
}

let a = new LinkedList();

// a.insertFront(1);
// a.insertFront(5);
// a.insertFront(2);
// a.insertFront(7);
// a.insertFront(3);
// a.insertFront(9);

a.addAtLast(1);
a.addAtLast(5);
a.addAtLast(2);
a.addAtLast(7);
a.addAtLast(3);
a.addAtLast(9);
a.addAtLast(13);
a.addAtLast(2);
a.addAtLast(25);
a.addAtLast(100);
a.addAtLast(1);
a.addAtLast(200);
a.addAtLast(4);

function removeGreaterThan(limit) {
  let i = 0;

  let holder = a.front;

  let length = a.Size();

  while (i < length) {
    if (holder.value >= limit) {
      a.RemoveValue(holder.value);
    }

    holder = holder.next;

    i++;
  }

  return a.print();
}

removeGreaterThan(5);
