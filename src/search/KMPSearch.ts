/**
 * String pattern matching using the Knutt-Morris-Pratt algorithm
 * @param str input string to be searched through
 * @param pattern pattern being matched to str
 */
export function KMPSearch(str: string, pattern: string): number {
    let fail: number[] = KMPFailure(pattern);
    let count = 0;
    let i = 0;
    let j = 0;
    while (i < str.length) {
        if (pattern[j] === str[i]) {
            i++;
            j++;
            if (j === pattern.length) {
                count++; // match
                j = fail[j-1];
                // return i - pattern.length + 1; // match
            }
        } else if (j > 0) {
            j = fail[j-1]; // failure function use here
        } else {
            // if j is 0, increment i and search next
            i++;
        }
    }
    return count;
}

function KMPFailure(pattern: string): number[] {
    const failFunc: number[] = [0];
    let j = 1;
    let i = 0;
    while (j < pattern.length) {
        if (pattern[j] === pattern[i]) {
            failFunc[j] = i + 1;
            i++;
            j++;
        } else if (i > 0) {
            i = failFunc[i-1];
        } else {
            failFunc[j++] = 0;
        }
    }
    return failFunc;
}