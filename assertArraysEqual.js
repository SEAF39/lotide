const eqArrays = function(arr1, arr2) {
  // Check if the length of the two arrays is equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  // Loop through each element of the arrays
  for (let i = 0; i < arr1.length; i++) {
    // Check if the elements are arrays, and if so, call the eqArrays function again for nested arrays
    if (Array.isArray(arr1[i]) && !eqArrays(arr1[i], arr2[i])) {
      return false;
    }
    // Check if the elements are not arrays and if they are not equal
    if (!Array.isArray(arr1[i]) && arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // Return true if all elements are equal
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  // Check if the two arrays are equal using the eqArrays function
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Arrays are equal: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Arrays are not equal: [${arr1}] !== [${arr2}]`);
  }
};

// Call the function to test
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]);
