import { expect } from 'chai';
import { radixSort } from '../../src/sort/radixSort';

describe('Radix Sort', () => {
    it('should sort numerical arrays correctly', () => {
        expect(radixSort([3,2,5,6,1,2])).to.eql([1,2,2,3,5,6]);
        expect(radixSort([-1,0,-2,-4,5,2])).to.eql([-4,-2,-1,0,2,5]);
        expect(radixSort([0,0,0,0,0])).to.eql([0,0,0,0,0]);
    });
    it('should words in lexicographical order', () => {
        expect(radixSort(['hi', 'HI', 'hello', 'whatsup', 'ayyylmao'])).to.eql(["HI", "ayyylmao", "hello", "hi", "whatsup"]);
    })
})