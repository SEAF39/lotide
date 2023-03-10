
// Create a new array to store the elements not present in itemsToRemove      
const without = function(source, itemsToRemove) {
  let newArray = [];  
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

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

// Check if the length of the arrays are equal
const assertArraysEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }  
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
