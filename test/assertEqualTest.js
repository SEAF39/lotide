const assert = require('chai').assert;
// TEST CODE
describe("#assertEqual", () => {
  it("should returns true for Lighthouse Labs Bootcamp", () => {
    assert.strictEqual("Lighthouse Labs Bootcamp", "Lighthouse Labs Bootcamp");
  });

  it("should returns true for (1, 1)", () => {
    assert.strictEqual(1, 1);
  });

});