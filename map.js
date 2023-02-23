// This function takes an array and a callback function as parameters
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// This function takes two arrays as parameters
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

