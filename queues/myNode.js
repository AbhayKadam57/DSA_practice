class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = new Node(null, null);
    this.rear = new Node(null, null);
    this.Length = 0;
  }

  enqueue(val) {
    const NewNode = new Node(val, null);

    if (this.Length === 0) {
      this.front = this.rear = NewNode;
    } else {
      this.rear.next = NewNode;
      this.rear = NewNode;
    }

    this.Length++;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }

    let retVal = this.front.value;

    this.front = this.front.next;

    if (!this.front) {
      this.rear = null;
    }

    this.Length--;
    return retVal;
  }

  Size() {
    return this.Length;
  }

  peek() {
    return this.front.value;
  }

  print() {
    let handleNext = this.front;

    while (handleNext) {
      console.log(handleNext.value);

      handleNext = handleNext.next;
    }
  }
}

let a = new Queue();

a.enqueue(10);
a.enqueue(20);
a.enqueue(30);
a.enqueue(40);

a.dequeue();
a.dequeue();
a.dequeue();
a.dequeue();

a.print();

// console.log(a.Size());

function ConverBinary(num) {
  let a = new Queue();

  let originalNumber = num;

  let Dividend = num;

  let Quotient = 1;

  while (Quotient > 0) {
    Quotient = Math.floor(Dividend / 2);

    let Remainder = Dividend - Quotient * 2;

    Dividend = Quotient;

    a.enqueue(Remainder);
  }

  let Result = [];

  while (a.Size() > 0) {
    Result.push(a.dequeue());
  }

  return {
    "Decimal Number": originalNumber,
    "Binary Number": parseInt(Result.reverse().join("")),
  };
}

console.table(ConverBinary(10));
