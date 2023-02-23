
// create a new array to store the elements not present in itemsToRemove
// loop through the source array
// check if the current element is not present in itemsToRemove
// return the newArray
// if it's not, add it to the newArray
      
const without = function(source, itemsToRemove) {
  let newArray = [];  
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
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

// check if the length of the arrays are equal
// loop through the arrays to check if each element is equal
// if the arrays are equal, print success message
    
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
