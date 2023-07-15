const library = require('./library');

describe('Testing the library object', () => {
    describe('Testing the calcPriceOfBook method', () => {
        it('Should throw an error if first arg is not a string', () => {
            expect(() => { library.calcPriceOfBook(0, 1) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook([], 1) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook({}, 1) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook(null, 1) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook(undefined, 1) }).to.throw('Invalid input');
        });
        it('Should throw an error if second arg is not an integer', () => {
            expect(() => { library.calcPriceOfBook('Harry Potter', 32.854) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('Harry Potter', []) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('Harry Potter', {}) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('Harry Potter', null) }).to.throw('Invalid input');
            expect(() => { library.calcPriceOfBook('Harry Potter', undefined) }).to.throw('Invalid input');
        });
        it('Should return 10 if year <= 1980', () => {
            expect(library.calcPriceOfBook('Harry Potter', 1979)).to.be.equal('Price of Harry Potter is 10.00');
            expect(library.calcPriceOfBook('Harry Potter', 1980)).to.be.equal('Price of Harry Potter is 10.00');
        });
        it('Should return 20 if year > 1980', () => {
            expect(library.calcPriceOfBook('Harry Potter', 1981)).to.be.equal('Price of Harry Potter is 20.00');
        });
    });

    describe('Testing the findBook method', () => {
        it('Should throw an error if the array length is 0', () => {
            expect(() => { library.findBook([], 'Harry Potter') }).to.throw('No books currently available');
        });
        it('Should return affirmative answer if the book is present', () => {
            expect(library.findBook(['Troy', '1984', 'Harry Potter'], 'Harry Potter')).to.be.equal('We found the book you want.');
        });
        it('Should return negative answer if the book is not present', () => {
            expect(library.findBook(['Troy', '1984', 'the Lord of the Rings'], 'Harry Potter')).to.be.equal('The book you are looking for is not here!');
        });
    });

    describe('Testing the arrangeTheBooks method', () => {
        it('Should throw an error if the input is not a positive integer', () => {
            expect(() => { library.arrangeTheBooks(-3) }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks(2.536) }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks('') }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks([]) }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks({}) }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks(null) }).to.throw('Invalid input');
            expect(() => { library.arrangeTheBooks(undefined) }).to.throw('Invalid input');
        });
        it('Should return affiramtive answer if enough space for books', () => {
            expect(library.arrangeTheBooks(40)).to.be.equal('Great job, the books are arranged.');
        });
        it('Should return negative answer if not enough space for books', () => {
            expect(library.arrangeTheBooks(41)).to.be.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});