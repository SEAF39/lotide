// Import the 'assert' function from the Chai library
const assert = require('chai').assert;

// Import the 'head' function from another file
const head   = require('../head');

// Start a test suite for the 'head' function
describe("#head", () => {
  // Start the first test case
  it("returns 1 for [1, 2, 3]", () => {
    // Use 'assert.strictEqual' to compare the output of 'head([1, 2, 3])' with the expected output of '1'
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  // Start the second test case
  it("returns '5' for ['5']", () => {
    // Use 'assert.strictEqual' to compare the output of 'head(['5'])' with the expected output of ''5''
    assert.strictEqual(head(['5']), '5');
  });
});
