const assert = require('chai').assert; // Import the Chai assertion library and set it to the "assert" variable.
const middle = require('../middle'); // Import the "middle" function from a separate module.

describe("middle", () => { // Define a new test suite called "middle".
  it("returns [] when passed [1]", () => { // Define a new test case.
    assert.deepEqual(middle([1]), []); // Use the Chai "assert" function to compare the result of the "middle" function when passed [1] to the expected value, which is an empty array.
  });

  it("returns [] when passed [1, 2]", () => { // Define a new test case.
    assert.deepEqual(middle([1, 2]), []); // Use the Chai "assert" function to compare the result of the "middle" function when passed [1, 2] to the expected value, which is an empty array.
  });

  it('returns [2, 3] when passed [1, 2, 3, 4]', () => { // Define a new test case.
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); // Use the Chai "assert" function to compare the result of the "middle" function when passed [1, 2, 3, 4] to the expected value, which is an array containing the numbers 2 and 3.
  });

  it("returns [2] when passed [1, 2, 3]", () => { // Define a new test case.
    assert.deepEqual(middle([1, 2, 3]), [2]); // Use the Chai "assert" function to compare the result of the "middle" function when passed [1, 2, 3] to the expected value, which is an array containing the number 2.
  });

  it('returns [3] when passed [1, 2, 3, 4, 5]', () => { // Define a new test case.
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); // Use the Chai "assert" function to compare the result of the "middle" function when passed [1, 2, 3, 4, 5] to the expected value, which is an array containing the number 3.
  });

  });
