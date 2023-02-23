const assert = require('chai').assert;
// TEST CODE
describe("#assertArraysEqual", () => {
  it("should returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.deepEqual([1, 2, 3], [1, 2, 3]);
  });

  it("should returns 'true' for ([1, 2, 4, 3], [1, 2, 4, 3])", () => {
    assert.deepEqual([1, 2, 4, 3], [1, 2, 4, 3]); 
  });

});