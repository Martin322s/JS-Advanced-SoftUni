const mathEnforcer = require('./04. MathEnforcer');
const { assert } = require('chai');
const { describe } = require('mocha');

describe('Math Enforcer functionality tests', () => {
    // Tests with incorrect inputs
    describe('Add Five function test', () => {
        it('Should return undefined with string', () => {
            assert(mathEnforcer.addFive('test') === undefined);
        });
        it('Should return undefined with an object', () => {
            assert(mathEnforcer.addFive({}) === undefined);
        });
        it('Should return undefined with an array', () => {
            assert(mathEnforcer.addFive([]) === undefined);
        });
        it('Should return undefined with udefined', () => {
            assert(mathEnforcer.addFive(undefined) === undefined);
        });
        it('Should return undefined with null', () => {
            assert(mathEnforcer.addFive(null) === undefined);
        });
        // Tests with correct inputs
        it('Positive integer number + 5', () => {
            assert(mathEnforcer.addFive(5) === 10);
        });
        it('Negative number + 5', () => {
            assert(mathEnforcer.addFive(-5) === 0);
        });
        it('Decimal number + 5', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5);
        });
    });
    describe('Subtract Ten function test', () => {
        // Tests with incorrect inputs
        it('Should return undefined with string', () => {
            assert(mathEnforcer.subtractTen('test') === undefined);
        });
        it('Should return undefined with an object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined);
        });
        it('Should return undefined with an array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined);
        });
        it('Should return undefined with udefined', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });
        it('Should return undefined with null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined);
        });
        // Tests with correct inputs
        it('Positive integer number - 10', () => {
            assert(mathEnforcer.subtractTen(5) === -5);
        });
        it('Negative number -10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15);
        });
        it('Decimal number - 10', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5);
        });
    });
    describe('Sum functionality test', () => {
        // Tests with correct inputs
        it('Two positive numbers', () => {
            assert(mathEnforcer.sum(5, 10) === 15);
        });
        it('Two negative numbers', () => {
            assert(mathEnforcer.sum(-10, -2.5) === -12.5);
        });
        it('Two deciaml numbers', () => {
            assert(mathEnforcer.sum(10.5, 2.1) === 12.6);
        });
        // Tests with incorrect inputs
        it('Return undefined with string and number', () => {
            assert(mathEnforcer.sum('', 10) === undefined);
        });
        it('Return undefined with first parameter number and second string', () => {
            assert(mathEnforcer.sum(5, '') === undefined);
        });
    });
});