// FUNCTION IMPLEMENTATION

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


// Function to compare two arrays and log a message indicating if the assertion passed or failed

const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect; 
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅✅ The following arrays are equal: ${inspect(array1)} + "===" + ${inspect(array2)}`);
  } else {
    console.log(`🛑🛑🛑🛑 The following arrays are not equal: ${inspect(array1)} + "!==" + ${inspect(array2)}`);
  }
};



// Function to return an object with the positions of letters in a sentence
// Remove spaces from the sentence
// Loop through the sentence
// If the letter already exists in the results object, push the index to the corresponding array
// If the letter does not exist in the results object, create a new key-value pair with the letter as the key and the index as the value in an array
// Return the results object


const letterPositions = function(sentence) {
  let results = {};
  sentence = sentence.split(" ").join("");  
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};


//Test Cases
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").e, [2]);