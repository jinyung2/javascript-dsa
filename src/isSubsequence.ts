/**
 * Function checks to see if the first string is a subsequence of the second string
 * @param str1 string to check if its a subsequence str2
 * @param str2 string being if it contains str1 as a subsequence
 * @returns 
 * true - str1 is subsequence of str2
 * 
 * false - str1 is not subsequence of str2
 */
export function isSubsequence(str1: string, str2: string): boolean {
    let i = 0;
    const strArr1 = str1.split('');
    const strArr2 = str2.split('');
    for (let j = 0; j < strArr2.length; j++) {
        if (strArr2[j] == strArr1[i]) {
            i++;
            if (i == str1.length) {
                return true;
            }
        }
    }
    return false;
}