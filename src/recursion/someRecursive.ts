/**
 * Recursively checks for at least one true condition for value into callback
 * @param arr input array of numbers
 * @param func callback function the values in the array are inputted into
 */
export function someRecursive(arr: number[], func: Function): boolean {
    if (arr.length === 0) {
        return false;
    }
    if (func(arr[0])) {
        return true;
    }
    return someRecursive(arr.slice(1), func);
}