import { expect } from 'chai';
import { averagePair } from '../src/averagePair';

describe('Checks if there is a pair of two numbers with the given avg', () => {
    it('should return false if there exists no pair with average', () => {
        expect(averagePair([-1,0,1,2,3], 8)).to.be.false;
    }),
    it('should return false if there input array is empty', () => {
        expect(averagePair([], 3)).to.be.false;
    }),
    it('should return true if there is a pair with the given avg', () => {
        expect(averagePair([1,2,3], 2.5)).to.be.true;
        expect(averagePair([-1,0,1], 0)).to.be.true;
    })
});
