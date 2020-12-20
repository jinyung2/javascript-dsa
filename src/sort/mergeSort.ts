/**
 * Utilizes the merge sort recursive algorithm to sort an array
 * @param arr array to be sorted
 * @returns sorted array
 */
export function mergeSort(arr: any[]): any[] {
    if (arr.length <= 1) return arr;
    return merge(mergeSort(arr.slice(0, Math.floor(arr.length/2))), mergeSort(arr.slice(Math.floor(arr.length/2))));
}

export function merge(A: any[], B: any[]) {
    let result: any[] = [];
    let a = 0;
    let b = 0;
    while (a < A.length && b < B.length) {
        if (A[a] < B[b]) {
            result.push(A[a++]);
        } else if (A[a] > B[b]) {
            result.push(B[b++]);
        } else {
            result.push(A[a++]);
            result.push(B[b++]);
        }
    }
    if (a !== A.length) {
        result.push(...A.slice(a));
    } 
    if (b !== B.length) {
        result.push(...B.slice(b));
    }
    return result;
}