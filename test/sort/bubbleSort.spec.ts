import { expect } from 'chai';
import { bubbleSort } from '../../src/sort/bubbleSort';

describe('Bubble Sort', () => {
    it('should sort numerical arrays correctly', () => {
        expect(bubbleSort([3,2,5,6,1,2])).to.eql([1,2,2,3,5,6]);
        expect(bubbleSort([-1,0,-2,-4,5,2])).to.eql([-4,-2,-1,0,2,5]);
        expect(bubbleSort([0,0,0,0,0])).to.eql([0,0,0,0,0]);
    });
    it('should words in lexicographical order', () => {
        expect(bubbleSort(['hi', 'HI', 'hello', 'whatsup', 'ayyylmao'])).to.eql(["HI", "ayyylmao", "hello", "hi", "whatsup"]);
    })
})