const library = require('../JS Advanced Final Exam - 23 October 2021/03. Library');
const { expect } = require('chai');

describe('Tests library', () => {
    describe('Tests calcPriceOfBook (nameOfBook, year)', () => {
        it('Throws an error if nameOfBook is not a string', () => {
            expect(() => library.calcPriceOfBook(55, 1995)).to.throw(Error, "Invalid input")
            expect(() => library.calcPriceOfBook([], 1995)).to.throw(Error, "Invalid input")
            expect(() => library.calcPriceOfBook({}, 1995)).to.throw(Error, "Invalid input")
            expect(() => library.calcPriceOfBook(null, 1995)).to.throw(Error, "Invalid input")
            expect(() => library.calcPriceOfBook(undefined, 1995)).to.throw(Error, "Invalid input")
        })
        it("one param missing", () => {
            expect(() => library.calcPriceOfBook('Troy')).to.throw('Invalid input');
        });
        it('Throws an error if year is not a number', () => {
            expect(() => library.calcPriceOfBook('book', '1995')).to.throw(Error, "Invalid input")
            expect(() => library.calcPriceOfBook('book', [])).to.throw(Error, "Invalid input")
            expect(() => library.calcPriceOfBook('book', {})).to.throw(Error, "Invalid input")
            expect(() => library.calcPriceOfBook('book', null)).to.throw(Error, "Invalid input")
            expect(() => library.calcPriceOfBook('book', undefined)).to.throw(Error, "Invalid input")
        })
        it('Checks if the year is less or equal to 1980', () => {
            expect(library.calcPriceOfBook('War and Peace', 1970)).to.equal("Price of War and Peace is 10.00")
            expect(library.calcPriceOfBook('War and Peace', 1980)).to.equal("Price of War and Peace is 10.00")
        })
        it('Checks if the year is more than 1980', () => {
            expect(library.calcPriceOfBook('Life of Dead', 2000)).to.equal('Price of Life of Dead is 20.00')
            expect(library.calcPriceOfBook('Life of Dead', 1981)).to.equal('Price of Life of Dead is 20.00')
        })
    })
    describe('Tests findBook (booksArr, desiredBook)', () => {
        let availableBooks = ["Troy", "Life Style", "Torronto", "War and Peace", "Life or Dead"];
        it('Throws an error if the length of the array is equal to 0', () => {
            expect(() => library.findBook([])).to.throw(Error, "No books currently available")
        })
        it('Checks whether the submitted string desiredBook is present in the array booksArr', () => {
            expect(library.findBook(availableBooks, 'Troy')).to.equal("We found the book you want.")
        })
        it('Checks whether the submitted string desiredBook is not present in the array booksArr', () => {
            expect(library.findBook(availableBooks, 'Ana Karenina')).to.equal("The book you are looking for is not here!")
        })
    })
    describe('Tests arrangeTheBooks (countBooks)', () => {
        it('Throws an error if the countBook is not a number', () => {
            expect(() => library.arrangeTheBooks([])).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks({})).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks(null)).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks(undefined)).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks('55')).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks(5.5)).to.throw("Invalid input")
            expect(() => library.arrangeTheBooks(-5.5)).to.throw("Invalid input")
        })
        it('Checks if there is space', () => {
            expect(library.arrangeTheBooks(38)).to.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.")
        })
        it('Checks if there is not space', () => {
            expect(library.arrangeTheBooks(90)).to.equal("Insufficient space, more shelves need to be purchased.")
            expect(library.arrangeTheBooks(41)).to.equal("Insufficient space, more shelves need to be purchased.")
        })
        it('Checks if there is space with 0 books', () => {
            expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.")
        })
    })
})