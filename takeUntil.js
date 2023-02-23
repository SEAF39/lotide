
// Implement takeUntil Lotide Challenge
// Module 1 - Week2

// The main function to implement takeUntil
// Initialize an empty array to store the result
// Loop through the given array
// If the callback returns a falsy value, add the element to the result array
// If the callback returns a truthy value, break the loop
// Return the result array


const takeUntil = function(array, callback) {
  let result = [];
  for (let element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      break;
    }
  }
  return result;
};

// Check if the lengths of the arrays are not equal, return false
// Iterate through each element in the arrays
// Check if both elements are arrays and if eqArrays returns false
// Check if the elements are not arrays and if they are not equal
// Return true if all elements match

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length  !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i]) && (eqArrays(arrayOne[i], arrayTwo[i]) === false)) {
      return false;
    }
    if (!(Array.isArray(arrayOne[i])) && arrayOne[i] !== arrayTwo[i]){
      return false;
    }
  }
  return true 
};


// Function to check if two arrays are equal and log the result

// Function to compare two arrays and log a message indicating if the assertion passed or failed

const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect; 
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅✅ The following: Assertion Passed: ${inspect(array1)} + "===" + ${inspect(array2)}`);
  } else {
    console.log(`🛑🛑🛑🛑 The following: Assertion Failed:  ${inspect(array1)} + "!==" + ${inspect(array2)}`);
  }
};

// Test Cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

const data3 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results3 = takeUntil(data3, x => x === ',');
assertArraysEqual(results3, ["I've", "been", "too", "Hollywood"]);
