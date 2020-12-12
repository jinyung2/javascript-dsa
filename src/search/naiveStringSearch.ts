/**
 * Finds pattern match within string using a naive/brute force approach
 * @param str string being searched for pattern
 * @param pattern the pattern string being matched to str
 * @returns integer for frequency of match
 */
export function naiveStringSearch(str: string, pattern: string): number {
    let count = 0;
    if (str.length === 0) {
        return 0;
    }
    for (let i = 0; i < str.length - pattern.length + 1; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (str[i + j] !== pattern[j]) {
                break;
            } 
            if (j === pattern.length - 1) {
                count++;
            }
        }
    }
    return count;
}
