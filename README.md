# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @seaf39/lotide`

**Require it:**

`const _ = require('@seaf39/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual(array1, array2): compares two arrays and prints out a message based on whether the arrays are the same or different.
* assertEqual(actual, expected): compares two values and prints out a message based on whether the assertion passed or failed.
* assertObjectsEqual(object1, object2): compares two objects and prints out a message based on whether the asserted objects are the same or not.
* countLetters(sentence): takes in a string and returns a count of each of the letters in the string.
* countOnly(allItems, itemsToCount): takes an array and an object then returns an object filled with counts of everything that the input object listed.
* eqArrays(array1, array2): takes in two arrays, compares them and prints true or false based on a match.
* eqObjects(object1, object2): takes in two objects and returns true or false based on a perfect match.
* findKey(object, callback): takes in an object and a callback function, then scans the object and return the first key in the object for which the callback function returns a truthy value. If no key is found, then returns undefined.
* findKeyByValue(Object, value): takes in an object and a value, then scans the object and returns the first key which contains the given value. If no key with the given value is found, then returns undefined.
* head(array): returns the first element from the array.
* letterPositions(sentence): takes a string, returns an object with each letter in the string and its index position.
* map(array, callback): takes in an array to map and a callback function. the map function returns a new array based on the result of the callback function. 
* middle(array): takes an array and returns the center value(s) of the array.
* tail(array): takes an array and returns every element except the first element into a new array.
* takeUntil(array, callback): takes an array and a callback function, it will return a slice of the original array with elements taken from the beginning and will keep going until the callback function returns a truthy value.
* without(source, itemsToRemove): takes a source array and an itemToRemove array, then returns a new array with elements not found in itemToRemove array.