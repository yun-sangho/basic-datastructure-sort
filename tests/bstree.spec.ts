import BSTree from "../src/BSTree";
import { expect } from "chai";
import "mocha";

const rootValue = 8;
const values = [4, 9, 5, 2, 12, 10, 14];
let bst;

describe("Bianry search tree", () => {
  beforeEach(() => {
    bst = new BSTree(rootValue);

    for (let v of values) {
      bst.insert(v);
    }
  });

  describe("insert and search", () => {
    it("has root", () => {
      expect(bst.root).not.null;
      expect(bst.root.val).to.equal(rootValue);
    });

    it("has all values", () => {
      for (let v of values) {
        const result = bst.search(v);
        expect(result.val).to.equal(v);
      }
    });
  });

  describe("delete", () => {
    it("does not have a deleted value", () => {
      for (let v of values) {
        expect(bst.search(v).val).to.equal(v);

        bst.delete(v);
        expect(bst.search(v)).to.null;
      }
    });
  });
});
