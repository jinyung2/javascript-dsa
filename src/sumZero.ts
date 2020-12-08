// given a SORTED array, use the two pointer pattern to determine if there is a pair of numbers
//  who's sum is equal to zero.

/**
 * Checks to see if there is a pair of numbers that sum to Zero
 * @param numArr the input array being tested
 * @returns boolean
 */
export const sumZero = (numArr: number[]): boolean => {
    if (numArr.length <= 1) {
        return false;
    }
    let left = 0;
    let right = numArr.length - 1;
    while (left < right) {
        if (numArr[left] + numArr[right] == 0) {
            return true;
        }
        numArr[left] + numArr[right] < 0 ? left++ : right--;
    }
    return false;
}