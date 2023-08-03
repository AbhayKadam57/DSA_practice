class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    if (this.stack.length > 0) {
      return this.stack.pop([this.stack.length - 1]);
    }
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  peek() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    } else {
      return "";
    }
  }

  print() {
    console.log(this.stack);
  }
}

function serach(arr, val) {
  let a = new Stack();

  for (let i = 0; i < arr.length; i++) {
    a.push(arr[i]);
  }

  let index = a.size() - 1;

  let found = false;

  while (!a.isEmpty() && found === false) {
    if (a.pop() === val) {
      return index;
    }

    index--;
  }

  return -1;
}

function GreatestVal(arr) {
  let a = new Stack();

  for (let i = arr.length - 1; i >= 0; i--) {
    a.push(arr[i]);
  }

  let Greatest = a.pop();

  let length = a.size();

  for (let i = 0; i <= length; i++) {
    let curr = a.pop();

    if (curr > Greatest) {
      console.log(`${Greatest} ---> ${curr}`);

      Greatest = curr;
    } else {
      console.log(`${Greatest} ---> ${-1}`);

      Greatest = curr;
    }
  }
}

let inputArr = [2, 6, 11, 56, 4];

console.log(serach(inputArr, 6));

GreatestVal(inputArr);

const input = document.querySelector("input");

const Undo = document.getElementById("undo");

const Redo = document.getElementById("redo");

const UndoStack = new Stack();

const RedoStack = new Stack();

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    UndoStack.push(Number(input.value));

    console.log(UndoStack);
  }
});

Undo.addEventListener("click", () => {
  if (UndoStack.size() > 0) {
    let undoVal = UndoStack.pop();
    RedoStack.push(undoVal);
    input.value = UndoStack.peek();
  }

  console.log(UndoStack);
});

Redo.addEventListener("click", () => {
  if (RedoStack.size() > 0) {
    let RedoVal = RedoStack.pop();

    UndoStack.push(RedoVal);

    input.value = UndoStack.peek();
  }

  console.log(RedoStack);
});
