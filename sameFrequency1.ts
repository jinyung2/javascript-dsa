// Write a function called sameFrequency. Given two positive integers,
//  find out if the two numbers have the same frequency of digits.
//  Your solution MUST have the following complexities:
//  Time: O(N)

function sameFrequency(arr1: number[], arr2: number[]): boolean {
    // create objects or maps for each of the arrays
    let arr1Map: {[key: number]: number} = {};
    let arr2Map: {[key: number]: number} = {};
    for (let num of arr1) {
        arr1Map[num] = arr1Map[num] + 1 || 1;
    }
    for (let num of arr2) {
        arr2Map[num] = arr2Map[num] + 1 || 1;
    }
    // check if the value from each key in  first object corresponds to value of second key^2 object
    for (let key of arr1) {
        if (!(((key) ** 2 ) in arr2Map)) {
            return false;
        }
        if (arr1Map[key] !== arr2Map[(key) ** 2]) {
            return false;
        }
    }
    // if it matches all of them return true, else false
    
    return true;
}

console.log(sameFrequency([1,2,3],[1,4,9]));

// Solution is O(n) since it utilizes two objects. Retrieval from the objects is constant time.
// the n times happens 3 times, twice when both objects are initialized and one more when looping through first array of numbers
// program also checks for early termination condition and performs accurate type checking