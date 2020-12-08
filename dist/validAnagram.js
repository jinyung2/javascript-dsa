"use strict";
// function should check if the two strings are valid anagrams of each other
// must contain same # of characters from each string
// constraints: str1 and str2 are valid strings with only letters
Object.defineProperty(exports, "__esModule", { value: true });
exports.validAnagram = void 0;
function validAnagram(str1, str2) {
    // trivial case, length is different
    if (str1.length !== str2.length) {
        return false;
    }
    // convert both strings into an object with lower case letters
    let obj1 = {};
    let obj2 = {};
    for (let c of str1) {
        obj1[c] = obj1.hasOwnProperty(c) ? ++obj1[c] : 1;
    }
    for (let c of str2) {
        obj2[c] = obj2.hasOwnProperty(c) ? ++obj2[c] : 1;
    }
    for (let c of str1) {
        // check that the map contains it
        if (obj1.hasOwnProperty(c) && obj2.hasOwnProperty(c)) {
            if (obj1[c] !== obj2[c]) {
                return false;
            }
        }
        else {
            // if it doesnt enter conditional, then they both have c
            return false;
        }
    }
    return true;
}
exports.validAnagram = validAnagram;
