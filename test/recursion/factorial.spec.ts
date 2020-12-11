import { expect } from 'chai';
import {factorial} from '../../src/recursion/factorial';

describe('Factorials', () => {
    it('should return the correct factorial values', () => {
        expect(factorial(5)).to.equal(120);
        expect((factorial(10))).to.equal(3628800);
    });
    it('should return 1 when inputting 0', () => {
        expect(factorial(0)).to.equal(1);
    });
    it('should throw error when inputting negative', () => {
        expect(factorial.bind(factorial, -3)).to.throw();
        expect(() => factorial(-3)).to.throw();
    })
})