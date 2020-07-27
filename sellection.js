```
find smallest value in a collection, select it and move to the start position
```;
const sellectionSort = (collection) => {
  const itter = (collection, start = 0) => {
    if (start >= collection.length) {
      return;
    }

    let smallestIndex = start;

    for (let i = start; i < collection.length; i++) {
      if (collection[smallestIndex] > collection[i]) {
        smallestIndex = i;
      }
    }

    swap(collection, start, smallestIndex);

    itter(collection, start + 1);
  };

  itter(collection);

  return collection;
};

const swap = (collection, a, b) => {
  [collection[a], collection[b]] = [collection[b], collection[a]];
  return collection;
};

const checkCollection = (result, expected) => {
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== expected[i]) {
      throw new Error(
        `${result} is not same as expected collection ${expected}`
      );
    }
  }

  return true;
};

checkCollection(sellectionSort([1, 3, 2]), [1, 3, 2].sort());
