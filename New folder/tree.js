class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class bst {
  constructor() {
    this.root = null;
  }

  addRecNode(node, NewNode) {
    if (NewNode.value < node.value) {
      if (node.left === null) {
        node.left = NewNode;
      } else {
        node.left = this.addRecNode(NewNode, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = NewNode;
      } else {
        node.right = this.addRecNode(NewNode, node.right);
      }
    }
  }

  addNode(val) {
    let inNode = new Node(val);

    if (this.root === null) {
      this.root = inNode;
    } else {
      this.addRecNode(this.root, inNode);
    }
  }

  inorderRec(Node) {
    if (Node !== null) {
      this.inorderRec(Node.left);
      console.log(Node.value);

      this.inorderRec(Node.right);
    }
  }

  inorder() {
    this.inorderRec(this.root);
  }

  postorderRec(Node) {
    if (Node !== null) {
      this.inorderRec(Node.left);

      this.inorderRec(Node.right);
      console.log(Node.value);
    }
  }

  preOrder() {
    this.postorderRec(this.root);
  }

  preorderRec(Node) {
    if (Node !== null) {
      console.log(Node.value);
      this.inorderRec(Node.left);
      this.inorderRec(Node.right);
    }
  }

  postOrder() {
    this.postorderRec(this.root);
  }

  findMinNode(node) {
    if (node.left == null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  containRec(node, val) {
    if (node === null) {
      return false;
    } else if (val < node.left) {
      return this.containRec(node.left, val);
    } else if (val > node.right) {
      return this.containRec(node.right, val);
    } else {
      return true;
    }
  }

  contain(val) {
    return this.containRec(this.root, val);
  }

  removerRec(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.left) {
      node.left = this.removerRec(node.left, key);

      return node;
    } else if (key > node.right) {
      node.right = this.removerRec(node.right, key);

      return node;
    } else {
      if (node.right === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;

        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = this.findMinNode(node.right);

      node.value = aux.value;

      node.right = this.removerRec(node.right, aux.value);

      return node;
    }
  }

  remove(key) {
    this.root = this.removerRec(this.root, key);
  }
}

let a = new bst();

a.addNode(5);
a.addNode(2);
a.addNode(7);

console.log(a);

// a.inorder();
// a.postOrder();
// a.preOrder();

console.log(a.contain(2));
