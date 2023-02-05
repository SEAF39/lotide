
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  // loop over all the items in the array
  for (const item of allItems) {
    // check if the item should be counted according to itemsToCount
    if (itemsToCount[item]) {
      // if the item is already in the results object, increment its count
      if (results[item]) {
        results[item] += 1;
      } else {
        // if the item is not in the results object, add it and set its count to 1
        results[item] = 1;
      }
    }
  }

  // return the results object
  return results;
};

// assertEqual function to test the output of the countOnly function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌ Assertion Failed: " + actual + " !== " + expected);
  }
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
