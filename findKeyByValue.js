// Define an assertEqual function that compares if two values are equal
// and logs the result to the console
const assertEqual = function(actual, expected) {
  // If the values are equal
  if (actual === expected) {
    // Log a message indicating the test passed
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // Log a message indicating the test failed
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Define a findKeyByValue function that takes an object and a value as input
const findKeyByValue = function(obj, value) {
  // Loop over all the keys of the object
  for (let key of Object.keys(obj)) {
    // If the value of the current key in the object matches the input value
    if (obj[key] === value) {
      // Return the current key
      return key;
    }
  }
  // If no key with the matching value is found, return undefined
  return undefined;
};

// Define an example object
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// Test the findKeyByValue function using the assertEqual function
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
