/**
 * Finds the minimum length of a contiguous sub array that is greater than or equal to the sum
 * @param arr array of positive integers
 * @param sum the positive sum that is being tested on array
 * @returns number representing the minimum length
 */
export function minSubArrayLen(arr: number[], sum: number): number {
    let minLen = Infinity;
    let total = 0;
    let i = 0;
    let j = 0;
    while (i < arr.length) {
        if (total < sum && j < arr.length) {
            total += arr[j++];
        } else if (total >= sum) {
            minLen = Math.min(minLen, j - i);
            total -= arr[i];
        } else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}