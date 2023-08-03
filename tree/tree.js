class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  addRec(node, Newnode) {
    if (Newnode.value < node.value) {
      if (node.left === null) {
        node.left = Newnode;
      } else {
        this.addRec(Newnode, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = Newnode;
      } else {
        this.addRec(Newnode, node.right);
      }
    }
  }

  add(value) {
    let inNode = new Node(value);

    if (this.root === null) {
      this.root = inNode;
    } else {
      this.addRec(this.root, inNode);
    }
  }

  inOrderRec(node) {
    if (node !== null) {
      this.inOrderRec(node.left);

      console.log(node.value);
      this.inOrderRec(node.right);
    }
  }

  inOrder() {
    this.inOrderRec(this.root);
  }

  containRec(node, value) {
    if (node === null) {
      return false;
    } else if (value < node.value) {
      return this.containRec(node.left, value);
    } else if (value > node.value) {
      return this.containRec(node.right, value);
    } else {
      return true;
    }
  }

  contain(value) {
    return this.containRec(this.root, value);
  }

  print() {
    console.log(this.root);
  }
  findMinNode(node) {
    if (node.left == null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  removeRec(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.value) {
      node.left = this.removeRec(node.left, key);

      return node;
    } else if (key > node.value) {
      node.right = this.removeRec(node.right, key);

      return node;
    } else {
      if (node.left === null && node.right === null) {
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

      console.log(node);

      let aux = this.findMinNode(node.right);

      node.value = aux.value;

      node.right = this.removeRec(node.right, aux.value);

      return node;
    }
  }

  remove(value) {
    this.root = this.removeRec(this.root, value);
  }

  preOrderRec(node) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderRec(node.left);
      this.preOrderRec(node.right);
    }
  }

  preOrder() {
    this.preOrderRec(this.root);
  }

  postOrderRec(node) {
    if (node !== null) {
      this.postOrderRec(node.left);
      this.postOrderRec(node.right);
      console.log(node.value);
    }
  }

  postOrder() {
    this.postOrderRec(this.root);
  }
}

let a = new Bst();

a.add(5);
a.add(2);
a.add(7);
a.add(4);
a.add(3);

// a.remove(20);
// a.remove(10);

// console.log(a);

// a.inOrder();
function height(node) {
  if (node == null) {
    return -1;
  } else {
    let lNode = height(node.left);
    let RNode = height(node.right);

    if (lNode > RNode) {
      return lNode + 1;
    } else {
      return RNode + 1;
    }
  }
}

// console.log(height(a.root));

a.inOrder();

console.log("------");

a.preOrder();

console.log("----");

a.postOrder();
