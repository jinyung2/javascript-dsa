import {expect, assert, should } from 'chai';
import { sameFrequency } from '../src/sameFrequency1';

describe("Same Frequency #1", () => {
    it('should return true when frequency of number to number^2 is same', () => {
        expect(sameFrequency([1,2,3], [9,1,4])).to.be.true;
    }),
    it('should return false when frequency of number to number^2 is different', () => {
        expect(sameFrequency([1,2,3,3], [9,1,4,4])).to.be.false;
    }) 
})