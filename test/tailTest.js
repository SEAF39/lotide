// Import the assert function from the Chai library
const assert = require('chai').assert;

// Import the tail function from the tail module
const tail = require('../tail');

// Start describing the behavior of the tail function using a "describe" block
describe("tail", () => {

  // Start defining a test case using an "it" block
  it('returns 2 when we pass["Hello", "Lighthouse", "Labs"] into tail and look at the length', () => {
    // Define an array of words
    const words = ["Hello", "Lighthouse", "Labs"];
    // Call the tail function with the words array and assign the result to a variable
    const result = tail(words);
    // Use the assert function to check that the length of the result array is 2
    assert.strictEqual(result.length, 2);
  });

  // Define another test case
  it('returns "Lighthouse" when we pass["Hello", "Lighthouse", "Labs"] into tail and look at the first element in the returned array', () => {
    // Define an array of words
    const words = ["Hello", "Lighthouse", "Labs"];
    // Call the tail function with the words array and assign the result to a variable
    const result = tail(words);
    // Use the assert function to check that the first element of the result array is "Lighthouse"
    assert.strictEqual(result[0], "Lighthouse");
  });

  // Define yet another test case
  it('returns "Labs" when we pass["Hello", "Lighthouse", "Labs"] into tail and look at the second element in the returned array', () => {
    // Define an array of words
    const words = ["Hello", "Lighthouse", "Labs"];
    // Call the tail function with the words array and assign the result to a variable
    const result = tail(words);
    // Use the assert function to check that the second element of the result array is "Labs"
    assert.strictEqual(result[1], "Labs");
  });
});
