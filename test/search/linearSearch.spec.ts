import { expect } from 'chai';
import { linearSearch } from '../../src/search/linearSearch';

describe('Linear Search', () => {
    it('should return return the correct index when element exists', () => {
        expect(linearSearch([0,3,4,5,1,3],1)).to.equal(4);
        expect(linearSearch([0,3,4,5,11,1,3],1)).to.equal(5);
        expect(linearSearch([0,3,4,1,5,11,1,3],1)).to.equal(3);
    });
    it('should return -1 when the element does not exist', () => {
        expect(linearSearch([1,2,3,4], 5)).to.equal(-1);
    })
})