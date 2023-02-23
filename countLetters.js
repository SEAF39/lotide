// FUNCTION IMPLEMENTATION

// Define a function to compare actual and expected values
// Check if the actual value is equal to the expected value

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅ The following: Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑🛑 The following: Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Define the function countLetters to count the number of each letter in a sentence
// Convert the sentence to lowercase to ignore case sensitivity
// Initialize an empty object to store the letter counts
// Loop through each letter in the sentence
// Check if the letter is a space
// If the letter is not a space, add it to the letterCounts object or increment its count
// Return the letterCounts object
        
const countLetters = function(sentence) {
  sentence = sentence.toLowerCase();
  const letterCounts = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (letterCounts[letter]) {
        letterCounts[letter] += 1;
      } else {
        letterCounts[letter] = 1;
      }
    }
  }
  return letterCounts;
};

// Test the function countLetters with an example sentence
// Use the assertEqual function to compare the result with the expected output

const result = countLetters("lighthouse in the house");
console.log(result);
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);
assertEqual(result["o"], 2);
assertEqual(result["u"], 2);
assertEqual(result["s"], 2);
assertEqual(result["e"], 3);
assertEqual(result["x"], 5);
