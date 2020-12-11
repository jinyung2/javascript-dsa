import { expect } from 'chai';
import { isPalindrome } from '../../src/recursion/isPalindrome';

describe('Checks if input is palindrome', () => {
    it('should return true when it is a palindrome', () => {
        expect(isPalindrome('tacocat')).to.be.true;
        expect(isPalindrome('amanaplanacanalpanama')).to.be.true;
    }),
    it('should return false when string is not a palindrome', () => {
        expect(isPalindrome('awe')).to.be.false;
        expect(isPalindrome('yoewfaewfoooooooejeejene')).to.be.false;
    }),
    it('should return false for empty string', () => {
        expect(isPalindrome('')).to.be.false;
    })
})