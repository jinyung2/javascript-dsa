import { expect } from 'chai';
import { flatten } from '../../src/recursion/flatten';

describe('Flatten nested arrays', () => {
    it('should correct flatten nested arrays', () => {
        expect(flatten([1, 2, 3, [4, 5]])).to.eql([1, 2, 3, 4, 5]);
        expect(flatten([1, [2, [3, 4], [[5]]]])).to.eql([1, 2, 3, 4, 5]);
        expect(flatten([[1],[2],[3]])).to.eql([1, 2, 3]);
        expect(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])).to.eql([1, 2, 3]);
    });
    it('should return an empty array for empty array input', () => {
        expect(flatten([])).to.eql([]);
    })
})