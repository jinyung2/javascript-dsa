/**
 * Implementation of insertion sort
 * @param arr array to be sorted
 * @returns sorted array
 */
export function insertionSort(arr: any[]): any[] {
    let result: any[] = [...arr];
    for (let i = 1; i < result.length; i++) {
        let j = i;
        let curr = result[i];
        while (j > 0) {
            if (curr < result[j - 1]) {
                result[j] = result[j - 1];
                j--;
            } else {
                break;
            }
        }
        result[j] = curr;
    }
    return result;
}