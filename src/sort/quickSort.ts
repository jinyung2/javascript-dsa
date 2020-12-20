export function quickSort(arr: any[], left: number = 0, right:number = arr.length - 1): any[] {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left 
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

export function pivot(arr: any[], start=0, end=arr.length+1): number {
    let pivot = arr[start];
    let pivotIndex = start;
    for (let i = pivotIndex + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    return pivotIndex;
}