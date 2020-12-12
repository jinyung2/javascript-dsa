/**
 * String search using Simplified Boyer Moore algorithm, uses the following heuristics:
 * Looking glass: Start from end of pattern and work backwards
 * Character jump heuristic: When mismatch happens, if there is a last index of 
 * pattern present then it jumps the amount of times until it matches said index.
 * if there does not exist one, it just jumps over the mismatched character and starts with the next character after.
 * @param str input string to be searched for matching pattern
 * @param pattern the pattern being matched to the str
 */
export function boyerMooreSearch(str: string, pattern: string): number {
    let last: {[key: string]: number} = {};
    let count = 0;
    let i = pattern.length - 1;
    let j = pattern.length - 1;
    for (let k = 0; k < pattern.length; k++) {
        last[pattern[k]] = Math.max(last[pattern[k]] || 0, k);
    }
    while (i <= str.length) {
        let shift = -1;
        if (last[str[i]] > -1) {
            shift = last[str[i]];
        }
        if (pattern[j] === str[i]) {
            if (j === 0) {
                count++; // found match
                i = i + pattern.length - Math.min(j,1 + shift);
                j = pattern.length - 1;
            } else {
                i--;
                j--;
            }
        } else {
            i = i + pattern.length - Math.min(j,1 + shift);
            j = pattern.length - 1;
        }
    }
    return count;
}