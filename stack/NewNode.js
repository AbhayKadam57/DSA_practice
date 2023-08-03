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
      let retvalue = this.top.value;

      this.top = this.top.next;

      return retvalue;
    }
  }

  peek() {
    if (this.size > 0) {
      return this.top.value;
    } else {
      return "";
    }
  }

  print() {
    let handleTop = this.top;

    while (handleTop.value !== null) {
      console.log(handleTop.value);

      handleTop = handleTop.next;
    }
  }
}

const input = document.createElement("input");

const Undo = document.getElementById("undo");
const Redo = document.getElementById("redo");

let UndoStack = new Stack();

let RedoStack = new Stack();

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && input.value !== "") {
    UndoStack.push(input.value);
  }
});

Undo.addEventListener("click", () => {
  let undoValue = UndoStack.pop();

  RedoStack.push(undoValue);

  input.value = UndoStack.peek();
});

Redo.addEventListener("click", () => {
  let RedoValue = RedoStack.peek();

  UndoStack.push(RedoValue);

  input.value = UndoStack.peek();
});
