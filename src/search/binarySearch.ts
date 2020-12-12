/**
 * Performs binary search on a sorted array
 * @param arr sorted array of numbers
 * @param e element being searched for
 */
export function binarySearch(arr: number[], e: number): number {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        const mid = Math.floor((j + i)/ 2);
        if (e == arr[mid]) {
            return mid;
        } else if ( e < arr[mid]) {
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }
    return -1;
}