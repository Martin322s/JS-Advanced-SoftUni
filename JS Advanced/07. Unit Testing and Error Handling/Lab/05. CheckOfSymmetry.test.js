const isSymmetric = require('./05. CheckOfSymmetry');
const { describe } = require('mocha');
const { expect } = require('chai');
const { it } = require('mocha');

describe('Function isSymmetric test cases', () => {
    it('Should return true with correct input array', () => {
        let arrayOfNumbers = [1, 2, 3, 3, 2, 1];
        let expectedResult = true;
        let simmetration = isSymmetric(arrayOfNumbers);
        expect(simmetration).to.equal(expectedResult);
    });
    it('Should return true with an empty array', () => {
        let arrayOfNumbers = [];
        let expectedResult = true;
        let simmetration = isSymmetric(arrayOfNumbers);
        expect(simmetration).to.equal(expectedResult);
    });
    it('Should return true with array of one element', () => {
        let arrayOfNumbers = [1];
        let expectedResult = true;
        let simmetration = isSymmetric(arrayOfNumbers);
        expect(simmetration).to.equal(expectedResult);
    });
    it('Should return true with array of strings', () => {
        let arrayOfNumbers = ['hello', 'world', 'world', 'hello'];
        let expectedResult = true;
        let simmetration = isSymmetric(arrayOfNumbers);
        expect(simmetration).to.equal(expectedResult);
    });
    it('Should return true with array of boolean values', () => {
        let arrayOfNumbers = [true, false, false, true];
        let expectedResult = true;
        let simmetration = isSymmetric(arrayOfNumbers);
        expect(simmetration).to.equal(expectedResult);
    });
    it('Should return true with array of arrays', () => {
        let arrayOfNumbers = [[1, 2], [3], [3], [1, 2]];
        let expectedResult = true;
        let simmetration = isSymmetric(arrayOfNumbers);
        expect(simmetration).to.equal(expectedResult);
    });
    it('Should return false with incorrect type array', () => {
        let arrayOfNumbers = [1, 2, 3, 4];
        let expectedResult = false;
        let simmetration = isSymmetric(arrayOfNumbers);
        expect(simmetration).to.equal(expectedResult);
    });
    it('Should return true with mixed type of array elements', () => {
        let arrayOfNumbers = [1, 'hello', true, 'hello', 1];
        let expectedResult = true;
        let simmetration = isSymmetric(arrayOfNumbers);
        expect(simmetration).to.equal(expectedResult);
    });
    it('Should return true with NaN as array elements', () => {
        let arrayOfNumbers = [NaN, 2, NaN];
        let expectedResult = true;
        let simmetration = isSymmetric(arrayOfNumbers);
        expect(simmetration).to.equal(expectedResult);
    });
    it('Should work correctly with Infinity as element', () => {
        let arrayOfNumbers = [Infinity, 2, Infinity];
        let expectedResult = true;
        let simmetration = isSymmetric(arrayOfNumbers);
        expect(simmetration).to.equal(expectedResult);
    });
    it('Should return false with array of different elements', () => {
        let arrayOfNumbers = ['hello', 123, 'world'];
        let expectedResult = false;
        let simmetration = isSymmetric(arrayOfNumbers);
        expect(simmetration).to.equal(expectedResult);
    });
    it('Should return false with array containing negative number', () => {
        let arrayOfNumbers = [1, 2, -1];
        let expectedResult = false;
        let simmetration = isSymmetric(arrayOfNumbers);
        expect(simmetration).to.equal(expectedResult);
    });
    it('Should return true with string instead of array', () => {
        let arrayOfNumbers = 'string';
        let expectedResult = false;
        let simmetration = isSymmetric(arrayOfNumbers);
        expect(simmetration).to.equal(expectedResult);
    });
});