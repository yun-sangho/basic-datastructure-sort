// 1. get pivot
// 2. iterate the array rearanging elements
/**
 * smaller left, bigger right
 *
 * 3. sort left and right partition
 */

const quickSort = (collection = [], left = 0, right = 0) => {
  if (collection.length <= 1) {
    return collection;
  }

  const index = partitioning(collection, left, right);

  if (left < index - 1) {
    quickSort(collection, left, index - 1);
  }

  if (right > index + 1) {
    quickSort(collection, index, right);
  }

  return collection;
};

const partitioning = (collection = [], left = 0, right = 0) => {
  const pivot = collection[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (collection[i] < pivot) {
      i++;
    }

    while (collection[j] > pivot) {
      j--;
    }

    if (i <= j) {
      [collection[i], collection[j]] = [collection[j], collection[i]];
      i++;
      j--;
    }

    
  }

  return i;
};
