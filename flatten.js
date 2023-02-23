// Flatten an array that may contain nested arrays
// Use reduce() to loop through the input array and concatenate all its elements into a new array
// Check if the current element is an object
// If it is, call flatten() recursively on it
// If not, simply concatenate it to the accumulator

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



