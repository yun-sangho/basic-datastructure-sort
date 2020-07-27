const merge = (left = [], right = []) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  return [...result, ...left, ...right];
};

// 1, 2, 3 || 2, 4, 8
const mergeSort = (collection = []) => {
  if (collection.length <= 1) {
    return collection;
  }

  const middle = Math.floor(collection.length / 2);

  const left = collection.slice(0, middle);
  const right = collection.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([1, 3, 2, 4, 8, 2]));
console.log(mergeSort([1, 10, 6, 9, 8, 2]));
