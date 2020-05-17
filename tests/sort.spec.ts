import { mergeSort } from '../src/Sort/merge'
import { expect } from "chai";
import "mocha";

describe('Sort', () => {
  let unsorted = Array(100).fill(null);

  beforeEach(() => {
    unsorted = unsorted.map(() => {
      return Math.floor((Math.random() * 100) + 1)
    })
  })

  describe('Merge sort', () => {
    it("sorts an array correctly", () => {
      const sorted = [...unsorted].sort((a, b) => a - b)
      expect(mergeSort(unsorted)).to.eql(sorted)
    })
  })
})
