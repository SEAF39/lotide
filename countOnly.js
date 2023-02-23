// FUNCTION IMPLEMENTATION

// assertEqual function to test the output of the countOnly function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅✅ The following: Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑🛑 The following: Assertion Failed: " + actual + " !== " + expected);
  }
};

// All Items: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// loop over all the items in the array
// check if the item should be counted according to itemsToCount
// if the item is already in the results object, increment its count
// if the item is not in the results object, add it and set its count to 1
// return the results object
  
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// test cases
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
assertEqual(result1["Seaf"], 10);
assertEqual(result1["ROSHI"], 5);