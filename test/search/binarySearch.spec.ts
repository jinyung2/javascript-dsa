import { expect } from 'chai';
import { binarySearch } from '../../src/search/binarySearch';

describe('Binary Search', () => {
    it('should return the correct index', () => {
        expect(binarySearch([1,2,3,4,5],1)).to.equal(0);
        expect(binarySearch([1,2,3,4,5,6],3)).to.equal(2);
        expect(binarySearch([1,2,3,4,5,6,7,8],8)).to.equal(7);
    });
    it('should return -1 when not found', () => {
        expect(binarySearch([1,2,3,4,5], 6)).to.equal(-1);
    })
})