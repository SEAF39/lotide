// FUNCTION IMPLEMENTATION

// Compare the actual and expected values, and log a message to the console indicating whether they are equal or not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅✅ The following: Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑🛑 The following: Assertion Failed: " + actual + " !== " + expected);
  }
};

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

