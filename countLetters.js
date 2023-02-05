// Define a function to compare actual and expected values
const assertEqual = function(actual, expected) {
  // Check if the actual value is equal to the expected value
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Define the function countLetters to count the number of each letter in a sentence
const countLetters = function(sentence) {
  // Convert the sentence to lowercase to ignore case sensitivity
  sentence = sentence.toLowerCase();
  // Initialize an empty object to store the letter counts
  const letterCounts = {};
  // Loop through each letter in the sentence
  for (const letter of sentence) {
    // Check if the letter is a space
    if (letter !== " ") {
      // If the letter is not a space, add it to the letterCounts object or increment its count
      if (letterCounts[letter]) {
        letterCounts[letter] += 1;
      } else {
        letterCounts[letter] = 1;
      }
    }
  }
  // Return the letterCounts object
  return letterCounts;
};

// Test the function countLetters with an example sentence
const result = countLetters("lighthouse in the house");
// Use the assertEqual function to compare the result with the expected output
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);
assertEqual(result["o"], 2);
assertEqual(result["u"], 2);
assertEqual(result["s"], 2);
assertEqual(result["e"], 3);
