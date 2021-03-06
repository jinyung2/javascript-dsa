"use strict";
// Given two arrays, check to make sure that there is the same frequency
//  of numbers in the first array as there are numbers^2 in the second array
//  ie. [1,2,3,3] -> [9, 1, 4, 9] true
//      [1,4,4] -> [1,1, 16] false
//  Your solution MUST have the following complexities:
//  Time: O(N)
function sameFrequency(arr1, arr2) {
    // create objects or maps for each of the arrays
    let arr1Map = {};
    let arr2Map = {};
    for (let num of arr1) {
        arr1Map[num] = arr1Map[num] + 1 || 1;
    }
    for (let num of arr2) {
        arr2Map[num] = arr2Map[num] + 1 || 1;
    }
    // check if the value from each key in  first object corresponds to value of second key^2 object
    for (let key of arr1) {
        if (!(((key) ** 2) in arr2Map)) {
            return false;
        }
        if (arr1Map[key] !== arr2Map[(key) ** 2]) {
            return false;
        }
    }
    // if it matches all of them return true, else false
    return true;
}
console.log(sameFrequency([1, 2, 3], [1, 4, 9]));
// Solution is O(n) since it utilizes two objects. Retrieval from the objects is constant time.
// the n times happens 3 times, twice when both objects are initialized and one more when looping through first array of numbers
// program also checks for early termination condition and performs accurate type checking
