const lookupChar = require('./03. CharLookUp');
const { expect } = require('chai');
const { describe } = require('mocha');

describe('Char look up functionality tests', () => {
    describe('Incorrect test cases', () => {
        it('Should return undefined, if the text is number', () => {
            let string = 1;
            let index = 1;
            let result = lookupChar(string, index);
            expect(result).to.be.undefined;
        });
        it('Should return undefined, if the text is array', () => {
            let string = [];
            let index = 1;
            let result = lookupChar(string, index);
            expect(result).to.be.undefined;
        });
        it('Should return undefined, if the text is object', () => {
            let string = {};
            let index = 1;
            let result = lookupChar(string, index);
            expect(result).to.be.undefined;
        });
        it('Should return undefined, if the text is null', () => {
            let string = 1;
            let index = 1;
            let result = lookupChar(string, index);
            expect(result).to.be.undefined;
        });
        it('Should return undefined, if the text is undefined', () => {
            let string = 1;
            let index = 1;
            let result = lookupChar(string, index);
            expect(result).to.be.undefined;
        });
        it('Should return undefined, if the index is decimal', () => {
            let string = 1;
            let index = 1.5;
            let result = lookupChar(string, index);
            expect(result).to.be.undefined;
        });
        it('Should return undefined, if the index is string', () => {
            let string = 1;
            let index = '1';
            let result = lookupChar(string, index);
            expect(result).to.be.undefined;
        });
        it('Should return undefined, if the index is empty', () => {
            let string = 1;
            let result = lookupChar(string);
            expect(result).to.be.undefined;
        });
        it('Should return incorrect index, if it is greater than length', () => {
            let string = 'car';
            let index = 4;
            let result = lookupChar(string, index);
            expect(result).to.equal('Incorrect index');
        });
        it('Should return incorrect index, if it is less than zero', () => {
            let string = 'car';
            let index = -4;
            let result = lookupChar(string, index);
            expect(result).to.equal('Incorrect index');
        });
        it('Should return incorrect index, if the text is empty string', () => {
            let string = '';
            let index = 0;
            let result = lookupChar(string, index);
            expect(result).to.equal('Incorrect index');
        });
        it('Should return undefined, if the input is negative number', () => {
            let string = 'car';
            let index = -1;
            let result = lookupChar(string, index);
            expect(result).to.equal('Incorrect index');
        });
    });
    describe('Correct test cases', () => {
        it('Should return the character with correct input', () => {
            let string = 'car';
            let index = 1;
            let result = lookupChar(string, index);
            expect(result).to.equal('a');
        });
        it('Should return the character with correct input', () => {
            let string = 'car';
            let index = 0;
            let result = lookupChar(string, index);
            expect(result).to.equal('c');
        });
        it('Should return the character with correct input', () => {
            let string = 'car';
            let index = 2;
            let result = lookupChar(string, index);
            expect(result).to.equal('r');
        });
        it('Should return the character with correct input', () => {
            let string = 'c';
            let index = 0;
            let result = lookupChar(string, index);
            expect(result).to.equal('c');
        });
    });
});