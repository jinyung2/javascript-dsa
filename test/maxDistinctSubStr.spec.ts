import { expect } from 'chai';
import { maxDistinctSubStr } from '../src/maxDistinctSubStr';

describe('Max Length Distinct Substring', () => {
    it('should return the correct value for the maximum length distinct substring', () => {
        expect(maxDistinctSubStr('rithmschool')).to.equal(7);
        expect(maxDistinctSubStr('thisisawesome')).to.equal(6);
        expect(maxDistinctSubStr('bbbbbbb')).to.equal(1);
        expect(maxDistinctSubStr('longestsubstring')).to.equal(8);
    }),
    it('should return 0 for empty string', () => {
        expect(maxDistinctSubStr('')).to.equal(0);
    })
})