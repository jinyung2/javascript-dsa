/**
 * function to flatten an array with nested arrays.
 * Note: This solution is from the instructor of the Udemy course
 * @param arr input array with potentially nested arrays
 */
export function flatten(arr: any[]): any[] {
    let result: any[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result =  result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}