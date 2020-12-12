import { expect } from 'chai';
import { naiveStringSearch } from '../../src/search/naiveStringSearch';

describe('Naive String Search (Brute Force)', () => {
    it('should return the count for the # of matches correctly', () => {
        expect(naiveStringSearch('abcabc', 'abc')).to.equal(2);
        expect(naiveStringSearch('abcabababd', 'abc')).to.equal(1);
    });
    it('should return 0 when no search is found', () => {
        expect(naiveStringSearch('abcabababd', 'xyz')).to.equal(0);
    });
    it('should return 0 when empty string is given', () => {
        expect(naiveStringSearch('', 'abc')).to.equal(0);
    })
})