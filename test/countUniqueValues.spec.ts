import {expect, assert, should } from 'chai';
import { countUniqueValues } from '../src/countUniqueValues';

describe("Count unique values of sorted number array", () => {
    it('should return 3 unique values', () => {
        expect(countUniqueValues([1, 1, 1, 2, 2, 3])).to.equal(3);
    }),
    it('should work with all integers (+,0,-)', () => {
        expect(countUniqueValues([-2, -1,-1, 0, 1])).to.equal(4);
    }) 
})