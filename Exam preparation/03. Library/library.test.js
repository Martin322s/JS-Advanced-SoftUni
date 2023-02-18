const library = require('./library');
const { assert, expect } = require('chai');

describe('Function library functionality tests', () => {
    describe('Calculation price of book functionality', () => {
        it('Test with wrong input - invalid name', () => {
            assert.throw(() => { library.calcPriceOfBook(1, 1980) }, Error, 'Invalid input');
        });

        it('Test with wrong input - invalid year', () => {
            assert.throw(() => { library.calcPriceOfBook('In the dark forest', '1980') }, Error, 'Invalid input');
        });

        it('Test with wrong input - both', () => {
            assert.throw(() => { library.calcPriceOfBook(1, '1980') }, Error, 'Invalid input');
        });

        it('Test with wrong input - array and string', () => {
            expect(() => { library.calcPriceOfBook([], '1980').to.equal('Invalid input') });
        });

        it('Test with correct input - year less than 1980', () => {
            assert.equal(library.calcPriceOfBook('Dark forest', 1979), 'Price of Dark forest is 10.00');
        });

        it('Test with correct input - year greater than 1980', () => {
            assert.equal(library.calcPriceOfBook('Dark forest', 1981), 'Price of Dark forest is 20.00');
        });

        it('Test with correct input - year equal to 1980', () => {
            assert.equal(library.calcPriceOfBook('Dark forest', 1980), 'Price of Dark forest is 10.00');
        });
    });

    describe('Find book functionality tests', () => {
        it('Wrong tests with empty array', () => {
            assert.throw(() => { library.findBook([], 'string') }, Error, 'No books currently available');
        });

        it('Wrong tests with correct input', () => {
            assert.equal(library.findBook(['string'], 'string'), 'We found the book you want.');
        });

        it('Wrong tests with correct input but nothing found', () => {
            assert.equal(library.findBook(['st'], 'string'), 'The book you are looking for is not here!');
        });
    });

    describe('Arrange books functionality tests', () => {
        it('Wrong tests with NaN', () => {
            assert.throw(() => { library.arrangeTheBooks('1') }, Error, "Invalid input");
        });

        it('Wrong tests with count less than zero', () => {
            assert.throw(() => { library.arrangeTheBooks(-3) }, Error, "Invalid input");
        });

        it('Wrong tests with array', () => {
            assert.throw(() => { library.arrangeTheBooks([]) }, Error, "Invalid input");
        });

        it('Wrong tests with object', () => {
            assert.throw(() => { library.arrangeTheBooks([]) }, Error, "Invalid input");
        });

        it('Wrong tests with undefined', () => {
            assert.throw(() => { library.arrangeTheBooks() }, Error, "Invalid input");
        });

        it('Wrong tests with correct input', () => {
            assert.equal(library.arrangeTheBooks(10), "Great job, the books are arranged.");
        });

        it('Wrong tests with correct input over the available space', () => {
            assert.equal(library.arrangeTheBooks(41), "Insufficient space, more shelves need to be purchased.");
        });

        it('Wrong tests with correct input equal the available space', () => {
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.");
        });
    });
});