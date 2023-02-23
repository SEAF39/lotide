// Import the 'assert' function from the Chai library
// Import the 'head' function from another file
// Start a test suite for the 'head' function
// Start the first test case
// Use 'assert.strictEqual' to compare the output of 'head([1, 2, 3])' with the expected output of '1'
// Start the second test case
// Use 'assert.strictEqual' to compare the output of 'head(['5'])' with the expected output of ''5''

const assert = require('chai').assert;
const head   = require('../head');
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});
