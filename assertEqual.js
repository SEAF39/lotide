
// here i am improving assertEqual function using the + operator to concatenate values together for console.log, it would look like this:

// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌ Assertion Failed: " + actual + " !== " + expected);
  }
};

// test cases
assertEqual("hello", "hello");
assertEqual("Seaf","Seaf1");

// refactoring the code based on Lotide Refactor Example
module.exports = assertEqual;
