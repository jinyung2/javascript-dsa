/**
 * Function tests if there exists a pair whose avg is the same as the given array
 * @param arr sorted array of integers
 * @param avg given avg
 * @returns true - there exists a pair
 * 
 * false - there does not exist a pair
 */
export function averagePair(arr: number[], avg: number): boolean {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        const currAvg = (arr[i] + arr[j])/2;
        if (currAvg === avg) {
            return true;
        }
        currAvg > avg ? j--: i++;
    }
    return false;
}