/**
 * Classic bubble sort implementation with the swapping
 * @param arr array to be sorted, can be numbers or strings
 * @returns sorted array
 */
export function bubbleSort(arr: any[]): any[] {
  let result: any[] = [...arr]; // copy of array
  for (let j = result.length - 1; j > 0; j--) {
    let sorted = true;
    for (let i = 0; i < j; i++) {
      if (result[i] > result[i + 1]) {
        sorted = false;
        [result[i], result[i + 1]] = [result[i + 1], result[i]]; // neat little ES2015 swapping!
        // traditional swap
        // let temp = arr[i];
        // arr[i] = arr[i+1];
        // arr[i+1] = temp;
      }
    }
    if (sorted) {
      break;
    }
  }
  return result;
}
