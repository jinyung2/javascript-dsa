import {expect} from 'chai';
import { sameFrequency2 } from '../src/sameFrequency2';

describe('Same Frequency 2', () => {
    it('should return true for digits with same frequency', () => {
        expect(sameFrequency2(123,321)).to.be.true;
    }),
    it('should return false for digits with different frequency', () => {
        expect(sameFrequency2(123,3321)).to.be.false;
    })
})