const assertArraysEqual = function(actual, expected) {
  // check if the length of the arrays are equal
  if (actual.length !== expected.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  
  // loop through the arrays to check if each element is equal
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
  }
  
  // if the arrays are equal, print success message
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const without = function(source, itemsToRemove) {
  // create a new array to store the elements not present in itemsToRemove
  let newArray = [];
  
  // loop through the source array
  for (let i = 0; i < source.length; i++) {
    // check if the current element is not present in itemsToRemove
    if (!itemsToRemove.includes(source[i])) {
      // if it's not, add it to the newArray
      newArray.push(source[i]);
    }
  }
  
  // return the newArray
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
