const merge = <T>(left: T[], right: T[]): T[] => {
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


export const mergeSort = <T>(collection: T[]): T[] => {
  if (collection.length <= 1) {
    return collection;
  }

  const middle = Math.floor(collection.length / 2);

  const left = collection.slice(0, middle);
  const right = collection.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};
