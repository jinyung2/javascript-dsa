
/**
 * 
 * @param arr array being sorted via radix sort (non comparison based)
 */
export function radixSort(arr: any[]): any[] {
    let maxDigitCount = mostDigits(arr);
    for (let i = 0; i < maxDigitCount; i++) {
        let buckets: any[] = Array.from({length: 10}, () => []);
        for (let e of arr) {
            buckets[getDigitMath(e, i)].push(e);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

/**
 * returns the number of digits of the biggest number in array
 * @param arr array with numbers
 * @param digitCount helper function that counts number of digits
 */
export function mostDigits(arr: number[], dCount: Function = digitCount): number {
    let maxNumDigits = 0;
    for (let num of arr) {
        maxNumDigits = Math.max(maxNumDigits, digitCount(num));
    }
    return maxNumDigits;
}

/**
 * Outputs the # of digits in a number
 * @param num number being inputted
 */
export function digitCount(num: number) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}

/**
 * returns the digit at the specified place value (right to left starting from index 0)
 * @param num inputted number
 * @param place place we are searching in number
 * @param base the base being divided (decimal, octal, binary, etc...)
 */
export function getDigit(num: number, place: number, base: number = 10): number {
    // if place exceeds highest place, return 0
    if (place > num.toString().length) {
        return 0;
    } 
    let counter = 0;
    while (num > 0 && counter <= place) {
        let digit = num % base;
        if (counter === place) {
            return digit;
        }
        num = Math.floor(num/base);
        counter++;
    }
    return 0;
}

/**
 * returns the digit at specified place value recursively (right to left starting index 0)
 * @param num inputted number
 * @param place place we are searching in number
 * @param base the based being divided(decimal, octal, binary, etc...)
 */
export function getDigitRecursive(num: number, place: number, base: number = 10): number {
    if (num <= 0) {
        return 0;
    }
    let digit = num % base;
    if (place === 0) {
        return digit;
    }
    return getDigitRecursive(Math.floor(num/base), place - 1, base);
}

/**
 * returns the digit at specified place value mathematically formulated (right to left starting index 0)
 * constant time due to mathematical computation
 * @param num inputted number
 * @param place place we are searching in number
 * @param base the based being divided(decimal, octal, binary, etc...)
 */
export function getDigitMath(num: number, place: number, base: number = 10): number {
    return Math.floor(Math.abs(num) / Math.pow(base, place) % base);
}