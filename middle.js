const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  const middleIndex = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  }
  return [array[middleIndex]];
};

// refactoring the code based on Lotide Refactor Example
module.exports = middle;
