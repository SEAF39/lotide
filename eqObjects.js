const eqArrays = function(array1, array2) {
  // Check if the lengths of both arrays are equal
  if (array1.length !== array2.length) {
    return false;
  }
  // Loop through each element of both arrays and compare them
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // If all elements are equal, return true
  return true;
};

const assertEqual = function(actual, expected) {
  // Compare the actual and expected values, and log a message to the console indicating whether they are equal or not
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  // Get the keys of both objects
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // If the lengths of the keys are not equal, return false
  if (keys1.length !== keys2.length) {
    return false;
  }
  // Loop through each key of the first object
  for (const key of keys1) {
    // If the second object does not have the key, return false
    if (!keys2.includes(key)) {
      return false;
    }
    // If the value of the key is an array, use eqArrays to compare the arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // If the value of the key is not an array, compare the values using ===
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  // If all checks have passed, return true
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
