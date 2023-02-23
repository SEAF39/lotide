// Flatten an array that may contain nested arrays
function flatten(arr) {
    return arr.reduce((acc, curr) => {
    return acc.concat(typeof curr === 'object' ? flatten(curr) : curr);
  }, []);
};

// Test the flatten() function
const arr = [1, 2, [3, 4], 5, [6]];
const flattened = flatten(arr);

// Output: [1, 2, 3, 4, 5, 6]
// Output: ["hello", "world", "at", "lighthouse", "lab"]

console.log(flattened);
console.log(flatten(["hello", "world", ["at","lighthouse","lab"]]));



