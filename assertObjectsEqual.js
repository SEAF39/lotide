// Function IMPLEMENTATION

// Define a function that takes two objects as arguments
// require the 'inspect' function from the 'util' module and assign it to a variable
// if the objects are equal, log a success message with the actual and expected objects
// if the objects are not equal, log a failure message with the actual and expected objects
    
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log("✅✅✅✅ The following: Assertion Passed: " + inspect(actual) + " === " + inspect(expected));
  } else {
    console.log("🛑🛑🛑🛑 The following: Assertion Failed: " + inspect(actual) + " !== " + inspect(expected));
  }
};

// Check if the length of both arrays is equal
// Loop through each element and check if it is equal in both arrays
  
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


// Get the keys of both objects and check if the length is equal
// Loop through each key and check if the value is equal in both objects

const eqObjects = function(object1, object2) {
  
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
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

const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '1' };
const object3 = { a: '1', b: 2, c: '3' };
const object4 = { a: '1', b: 2 };

// Output:
// ✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }

// Output:
// 🛑🛑🛑 Assertion Failed: { a: '1', b: 2 } !== { a: '1', b: 2, c: '3' }

// Output:
// ✅✅✅ Assertion Passed: { a: '1', b: 2 } === { a: '1', b: 2 }

assertObjectsEqual(object1, object2);
assertObjectsEqual(object1, object3);
assertObjectsEqual(object1, object4);
