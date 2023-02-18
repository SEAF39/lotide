/*

// FUNCTION IMPLEMENTATION
const sum = function(a, b) { 
  return a + b;
}

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!



// FUNCTION IMPLEMENTATION
const sumBuggy = function(a, b) { 
  return a * b;
}

// TEST CODE
console.assert(sumBuggy(1, 2) === 3); // fails, because bug! The expected output should be 3 but it returns 2 instead. This is because the function is multiplying a and b instead of adding them.





// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
  


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST more code with Emojis
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 3);
assertEqual(2, 2);
assertEqual(4, 4);
assertEqual(10, 1);
assertEqual(-1, 1);

*/

/*Test at least the following scenarios:

Comparing identical strings
Comparing non-identical strings
Comparing identical numbers
Comparing non-identical numbers
*/


/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("hello", "hello");
assertEqual("hello", "world");
assertEqual(5, 5);
assertEqual(5, 10);

*/

// here i am improving assertEqual function using the + operator to concatenate values together for console.log, it would look like this:


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌ Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("hello", "hello");
assertEqual("hello", "world");
assertEqual("Seaf","ROSHI");
assertEqual(5, 5);
assertEqual(5, 10);
assertEqual(120, 120);
assertEqual("Seaf","Seaf");

// refactoring the code based on Lotide Refactor Example
module.exports = assertEqual;
