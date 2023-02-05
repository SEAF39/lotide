const eqObjects = function(object1, object2) {
  // Get the keys of both objects and check if the length is equal
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  // Loop through each key and check if the value is equal in both objects
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

const eqArrays = function(array1, array2) {
  // Check if the length of both arrays is equal
  if (array1.length !== array2.length) {
    return false;
  }
  // Loop through each element and check if it is equal in both arrays
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // Import the `inspect` function from the `util` library
  const inspect = require('util').inspect;
  
  // Check if the objects are equal using the `eqObjects` function
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '1' };
const object3 = { a: '1', b: 2, c: '3' };
const object4 = { a: '1', b: 2 };

assertObjectsEqual(object1, object2);
// Output:
// ✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }

assertObjectsEqual(object1, object3);
// Output:
// 🛑🛑🛑 Assertion Failed: { a: '1', b: 2 } !== { a: '1', b: 2, c: '3' }

assertObjectsEqual(object1, object4);
// Output:
// ✅✅✅ Assertion Passed: { a: '1', b: 2 } === { a: '1', b: 2 }
