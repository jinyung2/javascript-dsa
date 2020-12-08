import {assert, expect, should} from 'chai';
import { sumZero } from '../src/sumZero';

describe('sumZero unit test', () => {
    it('should return true when zero sum is found', () => {
        expect(sumZero([-1,0,1])).to.be.true;
    }),
    it('should return false when arr is size <=1', () => {
        expect(sumZero([])).to.be.false;
        expect(sumZero([1])).to.be.false;
    }),
    it('should return false if no zero sum is found', () => {
        expect(sumZero([-1,0,2,2,3])).to.be.false;
    })
})