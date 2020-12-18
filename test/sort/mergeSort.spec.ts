import { expect } from 'chai';
import { mergeSort, merge } from '../../src/sort/mergeSort';

describe('Merge Sort', () => {
    it('should merge two sorted arrays correctly', () => {
        expect(merge([1,3,5],[2,4])).to.eql([1,2,3,4,5]);
        expect(merge([1,3,5,7,8],[2,4,4,6])).to.eql([1,2,3,4,4,5,6,7,8]);
    });
    it('should sort numerical arrays correctly', () => {
        expect(mergeSort([3,2,5,6,1,2])).to.eql([1,2,2,3,5,6]);
        expect(mergeSort([-1,0,-2,-4,5,2])).to.eql([-4,-2,-1,0,2,5]);
        expect(mergeSort([0,0,0,0,0])).to.eql([0,0,0,0,0]);
    });
    it('should words in lexicographical order', () => {
        expect(mergeSort(['hi', 'HI', 'hello', 'whatsup', 'ayyylmao'])).to.eql(["HI", "ayyylmao", "hello", "hi", "whatsup"]);
    })
})