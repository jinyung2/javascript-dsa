import { expect } from 'chai';
import { KMPSearch } from '../../src/search/KMPSearch';

describe('Knutt Morris Pratt Pattern Matching', () => {
    it('should return the count for the # of matches correctly', () => {
        expect(KMPSearch('abcabc', 'abc')).to.equal(2);
        expect(KMPSearch('abcabababd', 'abc')).to.equal(1);
        expect(KMPSearch('aaaaaaaaaaa', 'aaa')).to.equal(9);
    });
    it('should return 0 when no search is found', () => {
        expect(KMPSearch('abcabababd', 'xyz')).to.equal(0);
    });
    it('should return 0 when empty string is given', () => {
        expect(KMPSearch('', 'abc')).to.equal(0);
    })
})