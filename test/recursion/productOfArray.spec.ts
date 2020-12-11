import { expect } from 'chai';
import { productOfArray } from '../../src/recursion/productOfArray';

describe('computes product of all numbers in array', () => {
    it('should return the correct product', () => {
        expect(productOfArray([1,2,3,4,5])).to.equal(120);
        expect(productOfArray([1,2,3,0,5])).to.equal(0);
    });
    it('should work with negatives', () => {
        expect(productOfArray([1,2,-3, 4,5])).to.equal(-120);
        expect(productOfArray([-1, -1])).to.equal(1);
    });
    it('should return 0 with empty array', () => {
        expect(productOfArray([])).to.equal(0);
    })
})