// Function to compare two arrays and log a message indicating if the assertion passed or failed
const assertArraysEqual = function(actual, expected) {
  // Call the eqArrays function to compare the arrays
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to compare two arrays
const eqArrays = function(array1, array2) {
  // Check if the length of the arrays is not equal, return false
  if (array1.length !== array2.length) {
    return false;
  }
  // Loop through the elements of the arrays and compare
  for (let i = 0; i < array1.length; i++) {
    // If the elements are not equal, return false
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // If the arrays are equal, return true
  return true;
};

// Function to return an object with the positions of letters in a sentence
const letterPositions = function(sentence) {
  let results = {};
  // Remove spaces from the sentence
  sentence = sentence.split(" ").join("");
  // Loop through the sentence
  for (let i = 0; i < sentence.length; i++) {
    // If the letter already exists in the results object, push the index to the corresponding array
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      // If the letter does not exist in the results object, create a new key-value pair with the letter as the key and the index as the value in an array
      results[sentence[i]] = [i];
    }
  }
  // Return the results object
  return results;
};


//Test Cases
assertArraysEqual(letterPositions("hello").e, [1]);