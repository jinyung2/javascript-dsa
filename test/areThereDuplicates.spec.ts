import { expect } from 'chai';
import { areThereDuplicates } from '../src/areThereDuplicates';

describe('Check for duplicates in a sequence of values', () => {
    it('should return false if there are no duplicates', () => {
        expect(areThereDuplicates(1,2,3,4,5)).to.be.false;
        expect(areThereDuplicates('d','a','b','c')).to.be.false;
    }),
    it('should return false if there is no argument', () => {
        expect(areThereDuplicates()).to.be.false;
    }),
    it('should return true if there ARE duplicates', () => {
        expect(areThereDuplicates(1,2,3,3)).to.be.true;
        expect(areThereDuplicates('a', 'a', 'b')).to.be.true;
    })
});
