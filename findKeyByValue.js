// assertEqual function to compare actual and expected values
const assertEqual = function(actual, expected) {
  // check if actual and expected are equal
  if (actual === expected) {
    // log success message if equal
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // log error message if not equal
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKeyByValue function to find the key with a certain value in an object
const findKeyByValue = function(obj, value) {
  // get the keys of the object using Object.keys
  let keys = Object.keys(obj);

  // loop over the keys
  for (const key of keys) {
    // check if the value of the key matches the input value
    if (obj[key] === value) {
      // return the key if found
      return key;
    }
  }
  // return undefined if not found
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// test cases for the findKeyByValue function
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
