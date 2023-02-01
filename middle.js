const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("The arrays are equal.");
  } else {
    console.log("The arrays are not equal.");
  }
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }

  const middleIndex = Math.floor(array.length / 2);

  if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  }

  return [array[middleIndex]];
};

// Test cases
assertArraysEqual(middle([1]), []);
// Output: The arrays are equal.

assertArraysEqual(middle([1, 2]), []);
// Output: The arrays are equal.

assertArraysEqual(middle([1, 2, 3]), [2]);
// Output: The arrays are equal.

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// Output: The arrays are equal.

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// Output: The arrays are equal.

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// Output: The arrays are equal.
