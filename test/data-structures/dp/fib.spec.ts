import {expect} from 'chai';
import { fib, fibDP, fibHelperDP } from '../../../src/data-structures/dp/fib';

describe('Fibonacci Sequence', () => {
    it('should return correct value for fib sequence', () => {
        expect(fib(5)).to.equal(5);
        expect(fibDP(5,[])).to.equal(5);
        expect(fibHelperDP(5)).to.equal(5);
    });
})