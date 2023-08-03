class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = new Node(null, null);
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val, this.top);

    this.top = newNode;
    this.size++;
  }
  pop() {
    if (this.size > 0) {
      let retVal = this.top.value;

      this.top = this.top.next;

      this.size--;

      return retVal;
    }
  }

  peek() {
    if (this.size > 0) {
      return this.top.value;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let currentTop = this.top;

    while (currentTop.value !== null) {
      console.log(currentTop.value);

      currentTop = currentTop.next;
    }
  }

  Size() {
    return this.size;
  }
}

const input = [2, 6, 11, 56, 4];

console.log(`-----Next Greatest Number-----`);

function NextGreatest(arr) {
  let a = new Stack();

  if (arr.length === 0) {
    throw new Error("empty array");
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    a.push(arr[i]);
  }

  let length = a.Size();
  let Greatest = a.pop();

  for (let i = 0; i < length; i++) {
    let Check = a.pop();

    if (Check > Greatest) {
      console.log(`${Greatest} ---> ${Check}`);

      Greatest = Check;
    } else {
      console.log(`${Greatest} ---> -1`);

      Greatest = Check;
    }
  }
}

NextGreatest(input);

console.log(`-----Search number-------`);

function search(arr, val) {
  let a = new Stack();

  if (arr.length <= 0) {
    return -1;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    a.push(arr[i]);
  }

  let found = false;

  let i = 0;

  while (!a.isEmpty() && found === false) {
    if (a.pop() === val) {
      found = true;
      return i;
    } else {
      i++;
    }
  }

  return -1;
}

console.log(search(input, 56));

console.log(`-----Reverse Stack-------`);

function ReverseStack(arr) {
  let a = new Stack();

  for (let i = arr.length - 1; i >= 0; i--) {
    a.push(arr[i]);
  }

  a.print();

  let r = new Stack();

  while (!a.isEmpty()) {
    r.push(a.pop());
  }
  r.print();
}

ReverseStack(input);

//----->"(test)"---->true
//----->"(test"---->false

function CheckString(str) {
  let StrArr = str.split("");

  let a = new Stack();

  let openingBracket = 0;

  let CloseBracket = 0;

  for (let i = 0; i < StrArr.length; i++) {
    if (StrArr[i] === "(") {
      a.push(StrArr[i]);
      openingBracket++;
    } else if (StrArr[i] === ")") {
      a.push(StrArr[i]);
      CloseBracket++;
    }
  }

  if (openingBracket === 1 && CloseBracket === 1 && a.Size() === 2) {
    return true;
  }

  return false;
}

console.log(CheckString("(test)"));
