const rgbToHexColor = require('./06. RGBtoHEX');
const { describe } = require('mocha');
const { assert } = require('chai');
const { it } = require('mocha');

describe('RGB to HEX color functionality', () => {
    describe('Regular test cases for the function', () => {
        it('Should return red color', () => {
            assert.equal(rgbToHexColor(255, 0, 0), '#FF0000');
        });
        it('Should return green color', () => {
            assert.equal(rgbToHexColor(0, 255, 0), '#00FF00');
        });
        it('Should return blue color', () => {
            assert.equal(rgbToHexColor(0, 0, 255), '#0000FF');
        });
        it('Should return gray color', () => {
            assert.equal(rgbToHexColor(128, 128, 128), '#808080');
        });
        it('Should return white color', () => {
            assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
        });
        it('Should return black color', () => {
            assert.equal(rgbToHexColor(0, 0, 0), '#000000');
        });
        it('Should return simple color', () => {
            assert.equal(rgbToHexColor(16, 12, 13), '#100C0D');
        });
    });
    describe('Edge cases for the function', () => {
        it('Should return undefined as a result', () => {
            assert.equal(rgbToHexColor(256, 0, 0), undefined);
        });
        it('Should return undefined by given negative second number', () => {
            assert.equal(rgbToHexColor(255, -1, 0), undefined);
        });
        it('Should return undefined by given negative first number', () => {
            assert.equal(rgbToHexColor(-255, 1, 0), undefined);
        });
        it('Should return undefined by given negative last number', () => {
            assert.equal(rgbToHexColor(255, 1, -6), undefined);
        });
        it('Should return undefined by given array', () => {
            assert.equal(rgbToHexColor([]), undefined);
        });
        it('Should return undefined by given object', () => {
            assert.equal(rgbToHexColor({}), undefined);
        });
        it('Should return undefined without input', () => {
            assert.equal(rgbToHexColor(), undefined);
        });
        it('Should return undefined with string as a input', () => {
            assert.equal(rgbToHexColor('hello'), undefined);
        });
        it('Should return undefined with floating numbers', () => {
            assert.equal(rgbToHexColor(3.13, 255, 0), undefined);
        });
    });
});