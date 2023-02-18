

//refactoring the code based on Lotide Refactor Example - AssertEqual imported. 
const assertEqual = require('./assertEqual.js');


/*  we going to read the head.js function from the previous exercise AssertEqual function.

const assertEqual = function(actual, expected) {
  // Check if the actual value matches the expected value
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

*/

const eqArrays = function(arrayOne, arrayTwo) {
  // Check if the lengths of the arrays are not equal, return false
  if (arrayOne.length  !== arrayTwo.length) {
    return false;
  }

  // Iterate through each element in the arrays
  for (let i = 0; i < arrayOne.length; i++) {
    // Check if both elements are arrays and if eqArrays returns false
    if (Array.isArray(arrayOne[i]) && (eqArrays(arrayOne[i], arrayTwo[i]) === false)) {
      return false;
    }

    // Check if the elements are not arrays and if they are not equal
    if (!(Array.isArray(arrayOne[i])) && arrayOne[i] !== arrayTwo[i]){
      return false;
    }

  }
  // Return true if all elements match
  return true 
};

// Test Cases
eqArrays([1, 2, 3], [1, 2, 3]) // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)

eqArrays([1, 2, 3], [3, 2, 1]) // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)

eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)


// refactoring the code based on Lotide Refactor Example
module.exports = assertEqual;