
/* 

defines two functions: head and assertEqual.

The head function takes an array as input and returns the first element of the array (i.e. the element at index 0).

The assertEqual function takes two inputs: actual and expected. It compares actual and expected using the strict equality operator (===). If they are equal, it logs a success message using a template literal string. If they are not equal, it logs a failure message using a template literal string.

Finally, two test cases are run to test the head function using the assertEqual function. The first test case checks if head([5,6,7]) returns 5, and the second test case checks if head(["Hello", "Lighthouse", "Labs"]) returns "Hello". Both tests pass and the output confirms this.


/*
const head = function(array) {
  return array[0];
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌ Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
*/



/*

The code defines two functions: head and assertEqual.

The head function takes an array as input and returns the first element of the array (i.e. the element at index 0), unless the array is empty, in which case it returns undefined.

The assertEqual function takes two inputs: actual and expected. It compares actual and expected using the strict equality operator (===). If they are equal, it logs a success message using a template literal string. If they are not equal, it logs a failure message using a template literal string.

Finally, four test cases are run to test the head function using the assertEqual function. The first two test cases check if head([5,6,7]) returns 5, and head(["Hello", "Lighthouse", "Labs"]) returns "Hello", respectively. The third test case checks if head([5]) returns 5. The fourth test case checks if head([]) returns undefined. All tests pass and the output confirms this.

*/

//refactoring the code based on Lotide Refactor Example - AssertEqual imported. 
const assertEqual = require('./assertEqual.js');


const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

/* we going to read the head.js function from the previous exercise AssertEqual function.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

*/
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head([110,120,150,160]), 11);
assertEqual(head([110,200,300]), 110);
assertEqual(head([110,200,300]), 400);

// refactoring the code based on Lotide Refactor Example
module.exports = head;