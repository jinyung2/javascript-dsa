import { expect } from 'chai';
import { maxSumSubArray } from '../src/maxSumSubArray';

describe('Max Sum of Sub Array', () => {
    it('should return null', () => {
        expect(maxSumSubArray([], 2)).to.be.null;
    }),
    it('should return 11', () => {
        expect(maxSumSubArray([1,2,3,4,5,6], 2)).to.equal(11);
        expect(maxSumSubArray([1,2,3,4,8,5,6], 2)).to.equal(13);
    }),
    it('should work with negatives', () => {
        expect(maxSumSubArray([-1,-2,-3,-4], 2)).to.equal(-3);
    })
})