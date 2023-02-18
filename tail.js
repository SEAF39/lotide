
/*
This test case checks the elements in the returned array from the tail function and makes sure they match the expected values. The first assertEqual statement checks that the length of the result array is equal to 2, as it should contain two elements. The second and third assertEqual statements check that the first and second elements of the result array respectively match the expected values of "Lighthouse" and "Labs".




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌ Assertion Failed: " + actual + " !== " + expected);
  }
};

const tail = function(array) {
  return array.slice(1);
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

*/

//refactoring the code based on Lotide Refactor Example - AssertEqual imported. 
const assertEqual = require('./assertEqual.js');


/* we going to read previous exercise AssertEqual function.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌ Assertion Failed: " + actual + " !== " + expected);
  }
};
*/

const tail = function(array) {
  return array.slice(1);
};

// Test Case: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Check an array with only one element
const singleElementArray = ["Yo"];
assertEqual(tail(singleElementArray).length, 0);

// Test Case: Check an empty array
assertEqual(tail([]).length, 0);


// refactoring the code based on Lotide Refactor Example
module.exports = tail;
