// Implement findKey Lotide Challenge
// Module 1 - week2

const findKey = function(obj, callback) {
  // loop over the keys of the object
  for (let key in obj) {
    // if the callback returns a truthy value when passed the value of the current key
    if (callback(obj[key])) {
      // return the key
      return key;
    }
  }
  // if no key is found, return undefined
  return undefined;
};

// Test cases using assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(obj, x => x.stars === 2), "noma");
assertEqual(findKey(obj, x => x.stars === 3), "Akaleri");
assertEqual(findKey(obj, x => x.stars === 5), undefined);
