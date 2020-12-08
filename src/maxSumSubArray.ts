/**
 * returns the max sum of a sub array of length num, from inputted array
 * @param arr input array of numbers
 * @param num the length of the sub array being summed
 */
export function maxSumSubArray(arr: number[], num: number): number | null {
    let max = -Infinity;
    // edge case, where length of array is shorter than # of items being summed
    if (num > arr.length) {
        return null;
    }
    // sum the first num values
    let tempSum = arr.slice(0, num).reduce((total, curr) => total + curr, 0);
    max = tempSum;
    // perform the sliding window, subtract prev and add next
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        max = Math.max(max, tempSum);
    }
    
    return max;
}