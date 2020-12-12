import { expect } from 'chai';
import { capitalizeFirst } from '../../src/recursion/capitalizeFirst';

describe('Capitalize First', () => {
    it('should return string array with each first character capitalized', () => {
        expect(capitalizeFirst(['cat', 'dog'])).to.eql(['Cat', 'Dog']);
        expect(capitalizeFirst(['Taco', 'dog'])).to.eql(['Taco', 'Dog']);
        expect(capitalizeFirst(['a', 'dog', 'poop', 'bird'])).to.eql(['A', 'Dog', 'Poop', 'Bird']);
    });
    it('should work with empty strings', () => {
        expect(capitalizeFirst(['', '','cat'])).to.eql(['','','Cat']);
    })
    it('should return empty array when given empty array', () => {
        expect(capitalizeFirst([])).to.eql([]);
    })
})