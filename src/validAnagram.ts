// function should check if the two strings are valid anagrams of each other
// must contain same # of characters from each string
// constraints: str1 and str2 are valid strings with only letters

export function validAnagram(str1: string, str2: string): boolean {
    // trivial case, length is different
    if (str1.length !== str2.length) {
        return false;
    }
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // convert both strings into an object with lower case letters
    let obj1: {[key: string]: number} = {};
    let obj2: {[key: string]: number} = {};
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
        } else {
            // if it doesnt enter conditional, then they both have c
            return false;
        }
        
    }
    return true;
}   

// console.log(validAnagram('cate','eatc'));