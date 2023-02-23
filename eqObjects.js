// FUNCTION IMPLEMENTATION

// Compare the actual and expected values, and log a message to the console indicating whether they are equal or not

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅✅ The following: Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑🛑 The following: Assertion Failed: " + actual + " !== " + expected);
  }
};

// Check if the lengths of both arrays are equal
// Loop through each element of both arrays and compare them
// If all elements are equal, return true
    
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Get the keys of both objects
// If the lengths of the keys are not equal, return false
// Loop through each key of the first object
// If the second object does not have the key, return false
// If the value of the key is an array, use eqArrays to compare the arrays
// If the value of the key is not an array, compare the values using ===
// If all checks have passed, return true

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
const bca = { b: "2", c: "3", a: "1" };
assertEqual(eqObjects(abc, bca), false); // => false

