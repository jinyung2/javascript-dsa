/**
 * Sums up values up to n inclusive recursively
 * @param n value to be summed up to
 */
export function recursiveRange(n: number): number {
    if (n === 0) {
        return 0;
    }
    return n + recursiveRange(n-1);
}