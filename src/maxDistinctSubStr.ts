/**
 * Finds the max length distinct character substring of a given string
 * @param str string of characters
 * @returns length of the longest distinct substring
 */
export function maxDistinctSubStr(str: string): number {
    let seen: {[key: string]: number} = {};
    let start = 0;
    let end = 0;
    let maxLen = 1;
    if (str.length === 0) {
        return 0;
    }
    while (end < str.length) {
        const curr = str.substr(end, 1);
        if (seen[curr] > -1) {
            start = Math.max(start, seen[curr] + 1);
        }
        maxLen = Math.max(maxLen, end - start + 1);
        seen[curr] = end++;
    }

    return maxLen;
}