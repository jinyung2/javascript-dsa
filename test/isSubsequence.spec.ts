import { expect } from 'chai';
import {isSubsequence} from '../src/isSubsequence';

describe('Checks to see if first string is a subsequence of second string', () => {
    it('should return true for valid subsequences', () => {
        expect(isSubsequence('hello', 'hello world')).to.be.true;
        expect(isSubsequence('sing', 'sting')).to.be.true;
        expect(isSubsequence('abc', 'abracadabra')).to.be.true;
    }),
    it('should return false for invalid subsequence (wrong order)', () => {
        expect(isSubsequence('abc', 'acb')).to.be.false;
    })
});
