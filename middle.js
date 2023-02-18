//refactoring the code based on Lotide Refactor Example - AssertEqual imported. 
const assertArraysEqual = require('./assertEqual.js');


/* we going to read the assertEqual.js file from the previous exercise AssertEqual function.

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("The arrays are equal.");
  } else {
    console.log("The arrays are not equal.");
  }
};
*/
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

assertArraysEqual(middle([1, 2, 3, 4]), [22, 33]);
// Output: The arrays are  not equal.

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [9, 12]);
// Output: The arrays are  not equal.

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [7, 9]);
// Output: The arrays are  not equal.

// refactoring the code based on Lotide Refactor Example
module.exports = middle;
