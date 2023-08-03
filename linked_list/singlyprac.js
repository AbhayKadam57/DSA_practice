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

  insertAtIndex(val, index) {
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

  deletefront() {
    let retVal = this.front.value;
    this.front = this.front.next;
    this.size--;

    return retVal;
  }

  deleteAtIndex(index) {
    if (index > this.size) {
      throw "IndexOutOfRange";
    } else {
      if (index === 0) {
        this.deletefront();
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

  AddAtLast(val) {
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

  DeleteAtLast() {
    let i = 0;

    let holder = this.front;

    while (i < this.size - 2) {
      holder = holder.next;

      i++;
    }

    let retVal = holder.next.value;

    holder.next = holder.next.next;

    this.size--;

    return retVal;
  }

  print() {
    let holder = this.front;

    while (holder.value !== null) {
      console.log(holder.value);

      holder = holder.next;
    }
  }

  Size() {
    return this.size;
  }
}

let FirstList = new LinkedList();

FirstList.insertFront(10);
FirstList.insertFront(20);
FirstList.insertFront(30);
FirstList.insertFront(40);
FirstList.insertFront(50);
FirstList.insertFront(60);
FirstList.insertFront(70);

// FirstList.print();

// console.log(FirstList.DeleteAtLast());

// function MiddleNode() {
//   let middle = Math.floor(FirstList.Size() / 2); //2

//   let i = 0;

//   let holder = FirstList.front;

//   while (i < middle) {
//     holder = holder.next;
//     i++;
//   }

//   return holder.value;
// }

// console.log(MiddleNode(FirstList));

let List = new LinkedList();

List.insertFront(1);
List.insertFront(2);
List.insertFront(2);
List.insertFront(3);
List.insertFront(4);
List.insertFront(4);
List.insertFront(2);
List.insertFront(5);

//[5,2,4,4,3,2,2,1]

function RemoveDeplicate(List) {
  let current = List.front;

  let prvious = null;

  let set = new Set();

  while (current) {
    if (set.has(current.value)) {
      prvious.next = current.next;
    } else {
      set.add(current.value);

      prvious = current;
    }

    current = current.next;
  }

  return List.print();
}

RemoveDeplicate(List);
