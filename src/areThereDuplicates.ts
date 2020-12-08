/**
 * Function to check if a sequence of values has any duplicates 
 * Will use frequency counter pattern so the function works with non sorted arrays
 * @param args the sequence of any to be inputted
 * @returns true - there are duplicates
 * 
 *          false - all values unique
 */
export function areThereDuplicates(...args: any[]): boolean {
    let objMap: Map<any, number> = new Map<any, number>();
    for (let arg of args) {
        if (objMap.has(arg)) {
            return true;
        }
        objMap.set(arg, 1)
    }
    return false;
}