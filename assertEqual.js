
// here i am improving assertEqual function using the + operator to concatenate values together for console.log, it would look like this:

// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ The following: Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌ The following: Assertion Failed: " + actual + " !== " + expected);
  }
};

// refactoring the code based on Lotide Refactor Example
module.exports = assertEqual;
