
// FUNCTION IMPLEMENTATION

// Check if the lengths of the arrays are not equal, return false
// Iterate through each element in the arrays
// Check if both elements are arrays and if eqArrays returns false
// Check if the elements are not arrays and if they are not equal
// Return true if all elements match

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length  !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i]) && (eqArrays(arrayOne[i], arrayTwo[i]) === false)) {
      return false;
    }
    if (!(Array.isArray(arrayOne[i])) && arrayOne[i] !== arrayTwo[i]){
      return false;
    }
  }
  return true 
};

// refactoring the code based on Lotide Refactor Example
module.exports = eqArrays;