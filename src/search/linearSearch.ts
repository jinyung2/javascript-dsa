/**
 * Simple linear search that looks for an element.
 * Performs search in O(n)
 * @param arr input array being search
 * @param e element being searched for
 * @returns index where e is found, or -1 if not found
 */
export function linearSearch(arr: any[], e: any): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === e) {
            return i;
        }
    }
    return -1;
}