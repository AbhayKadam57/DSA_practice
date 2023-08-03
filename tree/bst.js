class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class bst {
  constructor() {
    this.root = null;
  }

  AddNodeRecursive(Node, node) {
    if (node.value < Node.value) {
      if (Node.left === null) {
        Node.left = node;
      } else {
        this.AddNodeRecursive(Node.left, node);
      }
    } else if (node.value > Node.value) {
      if (Node.right === null) {
        Node.right = node;
      } else {
        this.AddNodeRecursive(Node.right, node);
      }
    }
  }

  AddNode(val) {
    const InNode = new Node(val);

    if (this.root === null) {
      this.root = InNode;
    } else {
      this.AddNodeRecursive(this.root, InNode);
    }
  }

  inorderRec(node) {
    if (node !== null) {
      this.inorderRec(node.left);
      console.log(node.value);
      this.inorderRec(node.right);
    }
  }

  inorder() {
    this.inorderRec(this.root);
  }

  sumRec(node, sum) {
    if (node !== null) {
      sum += node.value;
      sum = this.sumRec(node.left, sum);
      sum = this.sumRec(node.right, sum);
    }

    return sum;
  }

  sum() {
    const total = this.sumRec(this.root, 0);
    console.log(total);
  }
}

let a = new bst();

a.AddNode(10);
a.AddNode(5);
a.AddNode(4);
a.AddNode(15);
a.AddNode(12);
a.AddNode(1);
a.AddNode(6);
a.AddNode(13);
a.AddNode(100);
a.AddNode(66);
a.sum();
