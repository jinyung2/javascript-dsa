import {expect, assert, should } from 'chai';
import { validAnagram } from '../src/validAnagram';

describe('tests for validAnagram.ts', () => {
    it('should return true when input is anagram', () => {
        // using expect syntax
        expect(validAnagram('tace', 'eatc')).to.be.true;
    }),
    it ('should return false when inputs not anagram', () => {
        // using assert
        assert.equal(validAnagram('catt', 'caat'), false);
    }),
    it('should pass with mixed case (lower and upper)', () => {
        // using should syntax
        should();
        // validAnagram.should.be.a('function');
        validAnagram('cat', "CAT").should.be.true;
    })
})