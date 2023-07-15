const createCalculator = require('./07.AddSubtract');
const { describe } = require('mocha');
const { expect } = require('chai');
const { it } = require('mocha');

describe('Simple calculator functionality test cases', () => {
    describe('Add case tests', () => {
        it('Add positive number', () => {
            const calculator = createCalculator();
            let number = 5;
            calculator.add(number);
            expect(calculator.get(number)).to.equal(5);
        });
        it('Add negative number', () => {
            const calculator = createCalculator();
            let number = -3;
            calculator.add(number);
            expect(calculator.get(number)).to.equal(-3);
        });
        it('Add decimal number', () => {
            const calculator = createCalculator();
            let number = 2.5;
            calculator.add(number);
            expect(calculator.get(number)).to.equal(2.5);
        });
        it('Add multiple numbers', () => {
            const calculator = createCalculator();
            let number = 5;
            let secondNumber = 10;
            calculator.add(number);
            calculator.add(secondNumber);
            expect(calculator.get(number)).to.equal(number + secondNumber);
        });
        it('Add NaN value', () => {
            const calculator = createCalculator();
            let string = 'a';
            let secondNumber = 10;
            calculator.add(string);
            calculator.add(secondNumber);
            expect(isNaN(calculator.get(secondNumber + string))).to.be.true;
        });
    });
    describe('Subtract test cases', () => {
        it('Subtract positive number', () => {
            const calculator = createCalculator();
            let number = 5;
            calculator.subtract(number);
            expect(calculator.get(number)).to.equal(-5);
        });
        it('Subtract negative number', () => {
            const calculator = createCalculator();
            let number = -3;
            calculator.subtract(number);
            expect(calculator.get(number)).to.equal(3);
        });
        it('Subtract decimal number', () => {
            const calculator = createCalculator();
            let number = 2.5;
            calculator.subtract(number);
            expect(calculator.get(number)).to.equal(-2.5);
        });
        it('Subtract multiple numbers', () => {
            const calculator = createCalculator();
            let number = 5;
            let secondNumber = 10;
            calculator.subtract(number);
            calculator.subtract(secondNumber);
            expect(calculator.get(number)).to.equal(-15);
        });
        it('Subtract NaN value', () => {
            const calculator = createCalculator();
            let number = 'a';
            let secondNumber = 10;
            calculator.subtract(number);
            calculator.subtract(secondNumber);
            expect(isNaN(calculator.get(number))).to.be.true;
        });
    });
    describe('Get test cases', () => {
        it('Should return 2 as a result after multiple operations', () => {
            const calculator = createCalculator();
            calculator.add(10);
            calculator.subtract('7');
            calculator.add('-2');
            calculator.subtract(-1);
            expect(calculator.get()).to.equal(2);
        });
    });
});