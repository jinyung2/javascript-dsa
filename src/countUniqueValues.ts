/**
 * Returns the number of unique numbers in an array
 * @param arr the input number array being counted for unique values 
 */
export function countUniqueValues(arr: number[]): number {
    // i, j are two pointers starting at the beginning of arr
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] !== arr[j]) {
            // increment i and replace the value with the value from j
            arr[++i] = arr[j];
        }
        j++;
    }

    return i + 1;
}