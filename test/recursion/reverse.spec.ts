import { expect } from 'chai';
import { reverse } from '../../src/recursion/reverse';

describe('String Reverse', () => {
    it('should reverse a string', () => {
        expect(reverse('awesome')).to.equal('emosewa');
        expect(reverse('awesomee')).to.equal('eemosewa');
    });
    it('should return an empty string', () => {
        expect(reverse('')).to.equal('');
    })
})