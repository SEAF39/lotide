// Import the Chai assertion library and set it to the "assert" variable.
// Import the "middle" function from a separate module.
// Define a new test suite called "middle".
// Define a new test case.
// Use the Chai "assert" function to compare the result of the "middle" function when passed [1] to the expected value, which is an empty array.

const assert = require('chai').assert; 
const middle = require('../middle'); 

describe("middle", () => { 
  it("returns [] when passed [1]", () => { 
    assert.deepEqual(middle([1]), []); 
  });
  it("returns [] when passed [1, 2]", () => { 
  });
  it('returns [2, 3] when passed [1, 2, 3, 4]', () => { 
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
  it("returns [2] when passed [1, 2, 3]", () => { 
  });
  it('returns [3] when passed [1, 2, 3, 4, 5]', () => { 
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });
  });
