/**
 * 
 * @param str 
 * @param index 
 */
export function reverse(str: string, index: number = 0): string {
    if (index > Math.ceil(str.length/2) - 1) {
        return str;
    }
    const temp = str[index];
    let strTemp = str.split('');
    strTemp[index] = str[str.length - 1 - index];
    strTemp[str.length - 1 - index] = temp; 
    return reverse(strTemp.join(''), index + 1);
}

// asdf len = 4
//      len / 2 - 1 = 1
// 0123

// asdfg len = 5
//       len / 2 - 1 = 2
// 01234