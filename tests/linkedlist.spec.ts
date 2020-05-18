import LinkedList from "../src/LinkedList";
import { expect } from "chai";
import "mocha";


const values = [4, 9, 5, 2, 12, 10, 14];
let linkedlist: LinkedList<number>;

describe("Bianry search tree", () => {
  beforeEach(() => {
    linkedlist = new LinkedList();

    for (let v of values) {
      linkedlist.insertAtTail(v);
    }
  });

  describe("insert and search", () => {
    it("has all values", () => {
      for (let v of values) {
        const result = linkedlist.search(v);
        expect(result).to.true;
      }
    });
  });

  describe("delete", () => {
    it("does not have a deleted value", () => {
      for (let v of values) {
        expect(linkedlist.search(v)).to.true;

        linkedlist.delete(v);
        expect(linkedlist.search(v)).to.false;
      }
    });
  });
});
