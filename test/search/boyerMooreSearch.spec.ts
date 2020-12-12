import { expect } from 'chai';
import { boyerMooreSearch } from '../../src/search/boyerMooreSearch';

describe('Boyer Moore Pattern Matching', () => {
    it('should return the count for the # of matches correctly', () => {
        expect(boyerMooreSearch('abcabc', 'abc')).to.equal(2);
        expect(boyerMooreSearch('abcabababd', 'abc')).to.equal(1);
        expect(boyerMooreSearch('aaaaaaaaaaa', 'aaa')).to.equal(9);
    });
    it('should return 0 when no search is found', () => {
        expect(boyerMooreSearch('abcabababd', 'xyz')).to.equal(0);
    });
    it('should return 0 when empty string is given', () => {
        expect(boyerMooreSearch('', 'abc')).to.equal(0);
    })
})