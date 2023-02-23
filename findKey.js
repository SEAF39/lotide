// FUNCTION IMPLEMENTATION

// Compare the actual and expected values, and log a message to the console indicating whether they are equal or not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅✅ The following: Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑🛑 The following: Assertion Failed: " + actual + " !== " + expected);
  }
};

// loop over the keys of the object
// if the callback returns a truthy value when passed the value of the current key
const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};


const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

// TEST CASES

assertEqual(findKey(obj, x => x.stars === 2), "noma"); // => true
assertEqual(findKey(obj, x => x.stars === 3), "Akaleri"); // => true
assertEqual(findKey(obj, x => x.stars === 5), undefined); // => true

assertEqual(findKey(obj, x => x.stars === 3), "Alex"); // => false
assertEqual(findKey(obj, x => x.stars === 3), "SEAF"); // => false
assertEqual(findKey(obj, x => x.stars === 3), "SOSO"); // => false