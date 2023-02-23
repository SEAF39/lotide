const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

// TEST CODE
describe("#eqArrays", () => {
  it("should returns true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it('should returns false for ([1, 2, 3], [1, "2", 3])', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, "2", 3]), false); 
  });
});