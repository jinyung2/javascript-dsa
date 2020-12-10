export function factorial(n: number): number {
    if (n < 0) {
        throw new Error('Must be non-negative input');
    }
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n-1);
}