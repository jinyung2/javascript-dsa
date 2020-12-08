/**
 * Takes into two integers and returns true if the frequency of digits is the same
 * @param n first number input
 * @param m second number input
 * @returns boolean
 */
export function sameFrequency2(n: number, m: number): boolean {
    // parse through each digit and create a map/obj
    // key is a number representing the digit, value is the freq of digit
    let nObj: {[key: number]: number} = {};
    let mObj: {[key: number]: number} = {};

    let num = n;
    while (num > 0) {
        const val = num % 10; // extracts the right most digit
        num = Math.floor(num / 10); // performs integer division
        nObj[val] = ++nObj[val] || 1;
    }
    num = m;
    while (num > 0) {
        const val = num % 10; // extracts the right most digit
        num = Math.floor(num / 10); // performs integer division
        mObj[val] = ++mObj[val] || 1;
    }

    for (let key in mObj) {
        if (nObj[key] !== mObj[key]) {
            return false;
        }
    }

    return true;
}