export class TreeNode {
  value: any;
  left: TreeNode;
  right: TreeNode;

  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  root: TreeNode;

  constructor() {
    this.root = null;
  }

  insert(value: any) {
    let newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current?.left === undefined) {
            current.left = newNode;
            return this; // return the tree
          } else {
            current = current.left;
          }
        } else if (value > current?.value) {
          if (current?.right === undefined) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value: any): TreeNode | undefined {
    if (this.root === null) return undefined;
    let current = this.root;
    let found = false;
    while (!found && current) {
        if (value === current.value) {
            found = true;
        } else if (value < current.value) {
            current = current.left;

        } else {
            current = current.right;
        }
    }
    return current;
  }
}
