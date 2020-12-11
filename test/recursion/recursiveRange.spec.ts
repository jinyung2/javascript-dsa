import {expect} from 'chai';
import { recursiveRange} from '../../src/recursion/recursiveRange';

describe('recursive summation of numbers from 0 to range', () => {
    it('should return correct sum', () => {
        expect(recursiveRange(10)).to.equal(55);
        expect(recursiveRange(6)).to.equal(21);
    });
    it('should handle the 0 input', () => {
        expect(recursiveRange(0)).to.equal(0);
    })
    // possibly negatives?
})