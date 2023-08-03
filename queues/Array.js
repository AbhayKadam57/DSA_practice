class Queues {
  constructor() {
    this.Queues = [];
  }

  enqueue(val) {
    this.Queues.push(val);
  }

  dequeue() {
    if (this.size() > 0) {
      return this.Queues.shift();
    } else {
      return "Queue is Empty";
    }
  }

  size() {
    return this.Queues.length;
  }

  peek() {
    if (this.size > 0) {
      return this.Queues[0];
    } else {
      return "Queue is empty";
    }
  }

  print() {
    if (this.size() > 0) {
      return this.Queues;
    } else {
      return "Queue is empty";
    }
  }
}

// const a = new Queues();

// a.enqueue(1);
// a.enqueue(2);
// a.enqueue(3);

// a.print();

// a.dequeue();
// a.dequeue();

// a.print();

//convert to numver to binary

//num =10 --->10/2=5=>R=0 --->

function ConvertToBinary(num) {
  let a = new Queues();

  let divisor = num;

  let quotient = 1;

  while (quotient > 0) {
    quotient = Math.floor(divisor / 2);

    Remainder = divisor - quotient * 2;

    a.enqueue(Remainder);

    divisor = quotient;
  }

  return {
    "Decimal number": num,
    "Binary number": parseInt(a.print().reverse().join("")),
  };
}

console.table(ConvertToBinary(10));
