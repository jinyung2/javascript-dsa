export function fib(n: number): number {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

export function fibDP(n: number, memo: number[]): number {
    if (memo[n] !== undefined) {
        return memo[n];
    }
    if (n <= 2) {
        return 1;
    }
    const result = fibDP(n-1, memo) + fibDP(n-2, memo);
    memo[n] = result;
    return result;
}

export function fibHelperDP(n: number): number {
    let memo: number[] = [];
    const innerFunc = (n: number): number => {
        if (memo[n] !== undefined) {
            return memo[n];
        }
        if (n <= 2) {
            return 1;
        }
        const result = innerFunc(n-1) + innerFunc(n-2);
        memo[n] = result;
        return result;
    };
    return innerFunc(n);
}