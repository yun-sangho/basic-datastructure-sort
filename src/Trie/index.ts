class TrieNode {
  children: TrieNode[];
  isLeaf: boolean;
  char: string;

  constructor(char: string) {
    this.children = Array(26).fill(null); // for English alphabets
    this.isLeaf = false;
    this.char = char;
  }

  markAsLeaf() {
    this.isLeaf = true;
  }

  unMarkAsLeaf() {
    this.isLeaf = false;
  }
}

export default class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode(null);
  }

  getIndex(char: string): number {
    return char.charCodeAt(0) - "a".charCodeAt(0);
  }

  insert(word: string) {
    if (!word) return;

    word = word.toLowerCase();

    let current = this.root;

    for (let c of word) {
      let index = this.getIndex(c);

      if (!current.children[index]) {
        current.children[index] = new TrieNode(c);
      }

      current = current.children[index];
    }

    current.markAsLeaf();
  }

  search(word: string): boolean {
    if (!word) return false;

    word = word.toLowerCase();

    let current = this.root;

    for (let c of word) {
      let index = this.getIndex(c);

      if (!current.children[index]) {
        return false;
      }

      current = current.children[index];
    }

    // check the word exists as a substring.
    if (current && current.isLeaf) {
      return true;
    }

    return false;
  }

  hasNoChildren(currentNode: TrieNode) {
    for (let node of currentNode.children) {
      if (node) return false;
    }
    return true;
  }

  delete(word: string) {
    if (!this.root || !word) return;

    const deleteHelper = (word: string, currentNode: TrieNode) => {
      if (!currentNode) return false;

      if (!word.length) {
        // if a node does not have children delete a current node
        if (this.hasNoChildren(currentNode)) {
          currentNode = null;
          return true;
        }
        // else do not delete, just unmark as a leaf
        currentNode.unMarkAsLeaf();

        return false;
      }

      const index = this.getIndex(word[0]);
      const childNode = currentNode.children[index];
      const childDeleted = deleteHelper(word.slice(1), childNode);

      if (childDeleted) {
        currentNode.children[index] = null;

        if (currentNode.isLeaf || !this.hasNoChildren(currentNode))
          return false;

        currentNode = null;
        return true;
      }

      return false;
    };

    deleteHelper(word, this.root);
  }
}
