import { expect } from 'chai';
import { radixSort, getDigit, getDigitRecursive, getDigitMath, digitCount, mostDigits} from '../../src/sort/radixSort';

describe('Radix Sort', () => {
    it('should return correct digit count', () => {
        expect(digitCount(123)).to.equal(3);
        expect(digitCount(0)).to.equal(1);
        expect(digitCount(123523)).to.equal(6);
    });
    it('should return most digits of a list of numbers', () => {
        expect(mostDigits([1,2,3,4444444], digitCount)).to.equal(7);
        expect(mostDigits([1,2,3,444], digitCount)).to.equal(3);
        expect(mostDigits([111111111,1,2,3,4444444], digitCount)).to.equal(9);
    })
    it('should return correct digit', () => {
        expect(getDigit(1234, 0, 10)).to.equal(4);
        expect(getDigit(1234, 1, 10)).to.equal(3);
        expect(getDigit(1234, 2, 10)).to.equal(2);
        expect(getDigit(1234, 3, 10)).to.equal(1);
        expect(getDigit(1234, 4, 10)).to.equal(0);
    });
    it('should return correct digit (recursive)', () => {
        expect(getDigitRecursive(1234, 0, 10)).to.equal(4);
        expect(getDigitRecursive(1234, 1, 10)).to.equal(3);
        expect(getDigitRecursive(1234, 2, 10)).to.equal(2);
        expect(getDigitRecursive(1234, 3, 10)).to.equal(1);
        expect(getDigitRecursive(1234, 4, 10)).to.equal(0);
    });
    it('should return correct digit (Math)', () => {
        expect(getDigitMath(1234, 0, 10)).to.equal(4);
        expect(getDigitMath(1234, 1, 10)).to.equal(3);
        expect(getDigitMath(1234, 2, 10)).to.equal(2);
        expect(getDigitMath(1234, 3, 10)).to.equal(1);
        expect(getDigitMath(1234, 4, 10)).to.equal(0);
    });
    it('should sort numerical arrays correctly', () => {
        expect(radixSort([3,2,5,6,1,2])).to.eql([1,2,2,3,5,6]);
        expect(radixSort([0,0,0,0,0])).to.eql([0,0,0,0,0]);
        expect(radixSort([1,2343,4454,221133,533,5532,13443,2222334])).to.eql([1, 533, 2343, 4454, 5532, 13443, 221133, 2222334]);
    });
})