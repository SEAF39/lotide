const eqArrays = require('./eqArrays');


const assertArraysEqual = function(array1, array2) {
  const inspect = require('util').inspect; 
  if (eqArrays(array1, array2))
    console.log(`✅✅✅✅ The following: Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`);
  else
    console.log(`🛑🛑🛑🛑 The following: Assertion Failed: ${inspect(array1)} !== ${inspect(array2)}`);
};
module.exports = assertArraysEqual;

