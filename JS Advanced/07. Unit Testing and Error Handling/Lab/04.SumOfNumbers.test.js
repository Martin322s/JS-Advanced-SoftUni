const sum = require('./04. SumOfNumbers');
const { describe } = require('mocha');
const { expect } = require('chai');
const { it } = require('mocha');

describe('Function Sum test cases', () => {
    it('Should run correctly', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });
    it('Should return NaN', () => {
        expect(isNaN(sum([1, 2, 'a']))).to.be.true;
    });
    it('Should throw an error without input', () => {
        expect(() => sum()).to.throw();
    });
    it('Should return 0 with empty array', () => {
        expect(sum([])).to.equal(0);
    });
    it('Should work correctly with negative numbers', () => {
        expect(sum([-1, -2, -3])).to.equal(-6);
    });
    it('Should work correctly with mixed values', () => {
        expect(sum([-1, -2, -3, 4, -5])).to.equal(-7);
    });
    it('Should work correctly with floating point values', () => {
        expect(sum([1.5, 2.25, 3.75])).to.equal(7.5);
    });
    it('Should return NaN with array containing NaN', () => {
        expect(isNaN(sum([NaN, 2, 3]))).to.be.true;
    });
    it('Should go to Infinity result', () => {
        expect(sum([Infinity, 2, 3])).to.equal(Infinity);
    });
    it('Should work correctly with large numbers', () => {
        expect(sum([1000000000, 2000000000, 3000000000])).to.equal(6000000000);
    });
});