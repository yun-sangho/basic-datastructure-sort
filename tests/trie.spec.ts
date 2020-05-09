import Trie from "../src/Trie";
import { expect } from "chai";
import "mocha";

const words = [
  "the",
  "a",
  "there",
  "answer",
  "any",
  "by",
  "bye",
  "their",
  "abc",
];

let trie: Trie;

describe("Trie", () => {
  beforeEach(() => {
    trie = new Trie();

    for (let word of words) {
      trie.insert(word);
    }
  });

  describe("search", () => {
    it("should have all words in the list.", () => {
      for (let word of words) {
        expect(trie.search(word)).to.true;
      }
    });
  });

  describe("delete", () => {
    it("should not have a deleted word.", () => {
      for (let word of words) {
        expect(trie.search(word)).to.true;
        trie.delete(word);
        expect(trie.search(word)).to.false;
      }
    });
  });
});
