const insertion = (collection = [], n = collection.length) => {
  if (n <= 1) {
    return;
  }

  insertion(collection, n - 1);

  let value = collection[n - 1];
  let startIndex = n - 2;

  while (startIndex >= 0 && value < collection[startIndex]) {
    // push one index back
    collection[startIndex + 1] = collection[startIndex];

    startIndex--;
  }

  // insert value into right position
  collection[startIndex + 1] = value;

  return collection;
};

console.log(insertion([1, 3, 2, 9, 5, 7, 4]));
