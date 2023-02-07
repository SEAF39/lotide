
// Implement takeUntil Lotide Challenge
// Module 1 - Week2

// Helper function to compare two arrays for equality
const eqArrays = function(array1, array2) {
  // Check if the lengths of both arrays are not equal
  if (array1.length !== array2.length) {
    return false;
  }
  // Loop through both arrays and compare each element
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // Return true if both arrays are equal
  return true;
};

// Function to check if two arrays are equal and log the result
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// The main function to implement takeUntil
const takeUntil = function(array, callback) {
  // Initialize an empty array to store the result
  let result = [];
  // Loop through the given array
  for (let element of array) {
    // If the callback returns a falsy value, add the element to the result array
    if (!callback(element)) {
      result.push(element);
    } else {
      // If the callback returns a truthy value, break the loop
      break;
    }
  }
  // Return the result array
  return result;
};

// Test Cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
