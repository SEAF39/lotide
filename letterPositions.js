// FUNCTION IMPLEMENTATION
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
const letterPositions = function(sentence) {
  let results = {};
  sentence = sentence.split("");
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i]== " "){
      continue;
    }
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
