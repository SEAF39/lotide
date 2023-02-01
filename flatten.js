// Flatten an array that may contain nested arrays
function flatten(arr) {
  // Use reduce() to loop through the input array and concatenate all its elements into a new array
  return arr.reduce((acc, curr) => {
    // Check if the current element is an object
    // If it is, call flatten() recursively on it
    // If not, simply concatenate it to the accumulator
    return acc.concat(typeof curr === 'object' ? flatten(curr) : curr);
  }, []);
}

// Check if two arrays are equal
function eqArrays(array1, array2) {
  // Check if the lengths of the arrays are equal
  if (array1.length !== array2.length) {
    return false;
  }

  // Loop through each element of the arrays and compare them
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  // If all elements are equal, return true
  return true;
}

// Test if two arrays are equal and log the result
function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("The arrays are equal.");
  } else {
    console.log("The arrays are not equal.");
  }
}

// Test the flatten() function
const arr = [1, 2, [3, 4], 5, [6]];
const flattened = flatten(arr);
console.log(flattened);
// Output: [1, 2, 3, 4, 5, 6]

// Test the eqArrays() and assertArraysEqual() functions
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [3, 2, 1];
assertArraysEqual(array1, array2);
// Output: The arrays are equal.
assertArraysEqual(array1, array3);
// Output: The arrays are not equal.

// Additional test cases
const nestedArr = [1, [2, [3, 4], 5], 6];
const expected = [1, 2, 3, 4, 5, 6];
assertArraysEqual(flatten(nestedArr), expected);
// Output: The arrays are equal.

const singleArr = [1];
assertArraysEqual(flatten(singleArr), singleArr);
// Output: The arrays are equal.

const emptyArr = [];
assertArraysEqual(flatten(emptyArr), emptyArr);
// Output: The arrays are equal.
