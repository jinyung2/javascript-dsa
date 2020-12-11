export function someRecursive(arr: number[], func: Function): boolean {
    if (arr.length === 0) {
        return false;
    }
    if (func(arr[0])) {
        return true;
    }
    return someRecursive(arr.slice(1), func);
}