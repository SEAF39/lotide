// FUNCTION IMPLEMENTATION
// assertEqual function to compare actual and expected values
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅✅ The following: Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑🛑 The following: Assertion Failed: " + actual + " !== " + expected);
  }
};

// findKeyByValue function to find the key with a certain value in an object
const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// test cases for the findKeyByValue function
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
 // => true

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 
// => true

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "drama"); 
// => false

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '80s Show"), "drama");
 // => false