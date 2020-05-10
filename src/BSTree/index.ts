class BSTreeNode<T> {
  val: T;
  leftChild: BSTreeNode<T>;
  rightChild: BSTreeNode<T>;

  constructor(value: T) {
    this.val = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

export default class BSTree<T> {
  root: BSTreeNode<T>;

  constructor(rootValue: T) {
    this.root = new BSTreeNode(rootValue);
  }

  findMinValue(node: BSTreeNode<T>): T {
    if (node) {
      while (node.leftChild) {
        node = node.leftChild;
      }

      return node.val;
    }
  }

  insert(value: T) {
    const traverse = (currentNode: BSTreeNode<T>, value: T): BSTreeNode<T> => {
      if (!currentNode) {
        currentNode = new BSTreeNode(value);
        return currentNode;
      }

      if (currentNode.val > value) {
        currentNode.leftChild = traverse(currentNode.leftChild, value);
        return currentNode;
      }

      currentNode.rightChild = traverse(currentNode.rightChild, value);
      return currentNode;
    };

    traverse(this.root, value);
  }

  search(value: T): BSTreeNode<T> {
    const traverse = (currentNode: BSTreeNode<T>, value: T): BSTreeNode<T> => {
      if (!currentNode) {
        return null;
      }

      if (currentNode.val === value) {
        return currentNode;
      }

      if (currentNode.val > value) {
        return traverse(currentNode.leftChild, value);
      }

      return traverse(currentNode.rightChild, value);
    };

    return traverse(this.root, value);
  }

  delete(target: T) {
    const traverse = (currentNode: BSTreeNode<T>, target: T): BSTreeNode<T> => {
      if (!currentNode) {
        return currentNode;
      }

      if (target < currentNode.val) {
        currentNode.leftChild = traverse(currentNode.leftChild, target);
        return currentNode;
      }

      if (target > currentNode.val) {
        currentNode.rightChild = traverse(currentNode.rightChild, target);
        return currentNode;
      }

      // if a node's value is equal to the value
      // case 1. a node has two children
      if (currentNode.leftChild && currentNode.rightChild) {
        // swap the target value with a smallest node in the rightchild.
        currentNode.val = this.findMinValue(currentNode.rightChild);

        currentNode.rightChild = traverse(
          currentNode.rightChild,
          currentNode.val
        );

        return currentNode;
      }
      // case 2. a node has only one child.
      currentNode = currentNode.leftChild || currentNode.rightChild;
      return currentNode;
    };

    this.root = traverse(this.root, target);
  }
}
