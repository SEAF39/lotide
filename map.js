
// Implement Map - Excersie 
// Module 1 - Week2

// This function takes an array and a callback function as parameters
// It iterates through the array and applies the callback function to each element in the array
// It then pushes the result of each callback function to a new array, `results`
// It returns the `results` array
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// This function takes two arrays as parameters
// It checks if the length of both arrays is equal, if not it returns false
// It then iterates through both arrays and compares each element, if they are not equal it returns false
// If both arrays have equal length and all elements are equal, it returns true

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
    return false;
    }
  }
  return true;
};

// This function takes two parameters, `actual` and `expected`
// It uses eqArrays to compare the two parameters
// If they are equal, it logs a message to the console indicating the test passed
// If they are not equal, it logs a message to the console indicating the test failed
const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect; 
  if (eqArrays(array1, array2))
    console.log(`✅✅✅✅ The following: Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
  else
    console.log(`🛑🛑🛑🛑 The following: Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
};


// Example arrays for testing the map function
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4];
const strings = ["hello", "world", "this", "is", "a", "test"];

// Test 1: Using the map function to return the first letter of each word in the `words` array
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// Test 2: Using the map function to return double of each number in the `numbers` array
const results2 = map(numbers, number => number * 2);
assertArraysEqual(results2, [2, 4, 6, 8]);

// Test 3: Using the map function to return the length of each string in the `strings` array
const results3 = map(strings, string => string.length);
assertArraysEqual(results3, [5, 5, 4, 2, 1, 10]);

