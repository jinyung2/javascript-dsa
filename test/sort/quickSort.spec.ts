import { expect } from 'chai';
import { quickSort, pivot } from '../../src/sort/quickSort';

describe('Quick Sort', () => {
    it('should return the correct pivot', () => {
        expect(pivot([3,4,5,6,2,6,13,2,6,8])).to.equal(2);
        expect(pivot([7,4,5,6,2,6,13,2,6,8])).to.equal(7);
    });
    it('should sort numerical arrays correctly', () => {
        expect(quickSort([3,2,5,6,1,2])).to.eql([1,2,2,3,5,6]);
        expect(quickSort([-1,0,-2,-4,5,2])).to.eql([-4,-2,-1,0,2,5]);
        expect(quickSort([0,0,0,0,0])).to.eql([0,0,0,0,0]);
    });
    it('should words in lexicographical order', () => {
        expect(quickSort(['hi', 'HI', 'hello', 'whatsup', 'ayyylmao'])).to.eql(["HI", "ayyylmao", "hello", "hi", "whatsup"]);
    })
})