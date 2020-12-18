/**
 * Selection sort implementation
 * @param arr array to be sorted
 * @returns sorted array
 */
export function selectionSort(arr: any[]): any[] {
    let result = [...arr];
    let i = 0;
    while (i < result.length) {
        let minIndex = i;
        for (let j = i; j < result.length; j++) {
            if (result[minIndex] > result[j]) {
                minIndex = j;
            }
        }
        [result[i], result[minIndex]] = [result[minIndex], result[i]];
        i++;
    }
    return result;
}