import { expect } from 'chai';
import { someRecursive } from '../../src/recursion/someRecursive';

const isOdd = (num: any) => num % 2 == 1;

describe('Some Recursive', () => {
    it('should return true if at least one value returns true when passed to callback', () => {
        expect(someRecursive([1, 2, 3, 4], isOdd)).to.be.true;
        expect(someRecursive([1, 2, 3, 4], (val: number) => val > 2)).to.be.true;
        expect(someRecursive([1, 2, 3, 4], (val: number) => val < 3)).to.be.true;
    });
    it('should return false when all values return false in callback', () => {
        expect(someRecursive([1, 2, 3, 4], (val: number) => val === 0)).to.be.false;
        expect(someRecursive([4, 6, 8], isOdd)).to.be.false;
    })
})