const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌ Assertion Failed: " + actual + " !== " + expected);
  }
};

const countLetters = function(sentence) {
  // create an empty object to store the counts of each letter
  const letterCounts = {};

  // loop through each letter in the sentence
  for (const letter of sentence) {
    // if the letter is not a space, add it to the letterCounts object
    if (letter !== ' ') {
      // if the letter is already a key in the object, increment its value
      if (letterCounts[letter]) {
        letterCounts[letter] += 1;
      } else {
        // if the letter is not already a key in the object, add it with a value of 1
        letterCounts[letter] = 1;
      }
    }
  }

  // return the letterCounts object
  return letterCounts;
};

// test the function with a few test cases
console.log(countLetters("hello"));
console.log(countLetters("lighthouse in the house"));
