const isOddOrEven = require('./02. EvenOrOdd');
const { describe } = require('mocha');
const { expect } = require('chai');

describe('Is odd or even functionality tests', () => {
    describe('Incorrect input tests', () => {
        it('Should return undefined, if the input is number', () => {
            let input = 1;
            let result = isOddOrEven(input);
            expect(result).to.be.undefined;
        });
        it('Should return undefined, if the input is array', () => {
            let input = [];
            let result = isOddOrEven(input);
            expect(result).to.be.undefined;
        });
        it('Should return undefined, if the input is object', () => {
            let input = {};
            let result = isOddOrEven(input);
            expect(result).to.be.undefined;
        });
        it('Should return undefined, if the input is null', () => {
            let input = null;
            let result = isOddOrEven(input);
            expect(result).to.be.undefined;
        });
        it('Should return undefined, if the input is NaN', () => {
            let input = NaN;
            let result = isOddOrEven(input);
            expect(result).to.be.undefined;
        });
        it('Should return undefined, if the input is undefined', () => {
            let input = undefined;
            let result = isOddOrEven(input);
            expect(result).to.be.undefined;
        });
    });
    describe('Correct input tests', () => {
        it('Odd string length test', () => {
            let string = 'car';
            let result = isOddOrEven(string);
            expect(result).to.equal('odd');
        });
        it('Even string length test', () => {
            let string = 'cars';
            let result = isOddOrEven(string);
            expect(result).to.equal('even');
        });
    });
});