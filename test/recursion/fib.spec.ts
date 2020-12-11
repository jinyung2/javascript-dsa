import {expect} from 'chai';
import { fib } from '../../src/recursion/fib';

describe('Fibonacci sequence', () => {
    it('should return correct value for nth term', () => {
        expect(fib(4)).to.equal(3);
        expect(fib(10)).to.equal(55);
        expect(fib(35)).to.equal(9227465);
    }),
    it('should handle the 0 or 1 input', () => {
        expect(fib(0)).to.equal(0);
        expect(fib(1)).to.equal(1);
    })
})