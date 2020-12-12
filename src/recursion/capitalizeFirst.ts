export function capitalizeFirst(arr: string[]): string[] {
    let result = [];
    if (arr.length === 0) { 
        return [];
    }
    result.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    return result.concat(capitalizeFirst(arr.slice(1)));
}