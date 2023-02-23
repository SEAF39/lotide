// Import the assert function from the Chai library
// Import the tail function from the tail module
// Start describing the behavior of the tail function using a "describe" block
// Start defining a test case using an "it" block
// Define an array of words
// Call the tail function with the words array and assign the result to a variable
// Use the assert function to check that the length of the result array is 2

const assert = require('chai').assert;
const tail = require('../tail');

describe("tail", () => {

  it('returns 2 when we pass["Hello", "Lighthouse", "Labs"] into tail and look at the length', () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result.length, 2);
  });
  it('returns "Lighthouse" when we pass["Hello", "Lighthouse", "Labs"] into tail and look at the first element in the returned array', () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result[0], "Lighthouse");
  });
  it('returns "Labs" when we pass["Hello", "Lighthouse", "Labs"] into tail and look at the second element in the returned array', () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result[1], "Labs");
  });
});
