import { expect } from 'chai';
import { power } from '../../src/recursion/power';

describe('Power function using recursion', () => {
    it('should return correct power with positive', () => {
        expect(power(5,2)).to.equal(25);
        expect(power(2,5)).to.equal(32);
        expect(power(1,100)).to.equal(1);
    }),
    it('should return correct with negative', () => {
        expect(power(-1, 3)).to.equal(-1);
        expect(power(-2, 4)).to.equal(16);
    }),
    it('should return 1 for 0 power', () => {
        expect(power(10, 0)).to.equal(1);
    }),
    it('should return 0 with 0 base', () => {
        expect(power(0, 5)).to.equal(0);
    })
})