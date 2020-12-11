/**
 * Function to see if string is a palindrome
 * @param str string to be checked if palindrome
 */
export function isPalindrome(str: string): boolean {
    if (str.length === 0) {
        return false;
    }
    let index = 0;

    const inner = (str: string): boolean => {
        if (index > Math.ceil(str.length/2) - 1) {
            return true;
        }
        if (str[index] !== str[str.length - 1 - index]) {
            return false;
        }
        index++;
        return inner(str);
    }

    return inner(str);
}