/**
 * Function that implements the power operator in math using recursion
 * @param base the base number being multiplied
 * @param exponent the # of times the base number is multiplied
 * @returns the base to the exponent power
 */
export function power(base: number, exponent: number): number {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}