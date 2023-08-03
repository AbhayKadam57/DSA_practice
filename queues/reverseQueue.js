class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(val) {
    this.data.push(val);
  }

  isEmpty() {
    return this.data.length === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data.shift();
  }

  Size() {
    return this.data.length;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data[0];
  }
}

// const Input = ["apple", "banana", "cherry", "dates"];

// function reverseArray(arr) {
//   let a = new Queue();

//   let result = [];

//   for (let i = Input.length - 1; i >= 0; i--) {
//     a.enqueue(Input[i]);
//   }

//   while (!a.isEmpty()) {
//     result.push(a.dequeue());
//   }

//   return {
//     Input: arr,
//     Output: result,
//   };
// }

// console.log(reverseArray(Input));

const Input = ["p", "o", "t"];

function queueIsPalindrome(queue) {
  let a = new Queue();

  for (let i = queue.length - 1; i >= 0; i--) {
    a.enqueue(queue[i]);
  }

  let index = 0;

  while (!a.isEmpty()) {
    if (queue[index] !== a.dequeue()) {
      return false;
    }
    index++;
  }

  return true;
}

console.log(queueIsPalindrome(Input));

// Hotpotato

//Sujata,Lalit,Abhay,Shital,Aditi

function HotPotato(queue, num) {
  while (queue.Size() > 1) {
    // Pass the potato num times
    for (let i = 0; i < num; i++) {
      // Dequeue the person holding the potato and enqueue them again
      queue.enqueue(queue.dequeue());
    }
    // Dequeue the person holding the potato after num passes
    queue.dequeue();
  }
  // Return the name of the last person remaining in the queue
  return queue.front();
}
const myQueue = new Queue();

myQueue.enqueue("Alice");
myQueue.enqueue("Bob");
myQueue.enqueue("Charlie");
myQueue.enqueue("David");
myQueue.enqueue("Eve");

console.log(HotPotato(myQueue, 3));
