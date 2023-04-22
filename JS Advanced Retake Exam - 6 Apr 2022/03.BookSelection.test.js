const bookSelection = require('../JS Advanced Retake Exam - 6 Apr 2022/03. Book selection');
const { assert, expect } = require('chai');
const { isItAffordable } = require('../JS Advanced Retake Exam - 6 Apr 2022/03. Book selection');

describe('Tests bookSelection', () => {
    describe('Tests isGenreSuitable (genre, age)', () => {
        it('Tests if the genre is not suitable', () => {
            expect(bookSelection.isGenreSuitable("Thriller", 11)).to.equal('Books with Thriller genre are not suitable for kids at 11 age')
            expect(bookSelection.isGenreSuitable("Thriller", 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age')
            expect(bookSelection.isGenreSuitable("Horror", 11)).to.equal('Books with Horror genre are not suitable for kids at 11 age')
            expect(bookSelection.isGenreSuitable("Horror", 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age')
        })
        it('Tests if the genre is suitable', () => {
            expect(bookSelection.isGenreSuitable("Thriller", 13)).to.equal('Those books are suitable')
            expect(bookSelection.isGenreSuitable("Horror", 13)).to.equal('Those books are suitable')
        })
    })
    describe('Tests isItAffordable (price, budget)', () => {
        it('Throws an error if the price is not a number', () => {
            expect(() => bookSelection.isItAffordable([], 55)).to.throw(Error, "Invalid input")
            expect(() => bookSelection.isItAffordable({}, 55)).to.throw(Error, "Invalid input")
            expect(() => bookSelection.isItAffordable('55', 55)).to.throw(Error, "Invalid input")
            expect(() => bookSelection.isItAffordable(null, 55)).to.throw(Error, "Invalid input")
            expect(() => bookSelection.isItAffordable(undefined, 55)).to.throw(Error, "Invalid input")
        })
        it('Throws an error if the budget is not a number', () => {
            expect(() => bookSelection.isItAffordable(55, [])).to.throw(Error, "Invalid input")
            expect(() => bookSelection.isItAffordable(5, '55')).to.throw(Error, "Invalid input")
            expect(() => bookSelection.isItAffordable(55, {})).to.throw(Error, "Invalid input")
            expect(() => bookSelection.isItAffordable(55, null)).to.throw(Error, "Invalid input")
            expect(() => bookSelection.isItAffordable(55, undefined)).to.throw(Error, "Invalid input")
        })
        it('Tests whether the price is bigger than the budget', () => {
            expect(bookSelection.isItAffordable(10, 15)).to.equal('Book bought. You have 5$ left')
            expect(bookSelection.isItAffordable(15, 15)).to.equal('Book bought. You have 0$ left')
        })
        it('Tests whether the price is lower than the budget', () => {
            expect(bookSelection.isItAffordable(20, 15)).to.equal("You don't have enough money")
            expect(bookSelection.isItAffordable(15, 10)).to.equal("You don't have enough money")
        })
    })
    describe('Tests suitableTitles (books, wantedGenre)', () => {
        let booksArr = [{ title: "The Da Vinci Code", genre: "Thriller" }]
        it('Throws an error if books is not an array', () => {
            expect(() => bookSelection.suitableTitles(55, 'genre')).to.throw(Error, "Invalid input")
            expect(() => bookSelection.suitableTitles('55', 'genre')).to.throw(Error, "Invalid input")
            expect(() => bookSelection.suitableTitles({}, 'genre')).to.throw(Error, "Invalid input")
            expect(() => bookSelection.suitableTitles(null, 'genre')).to.throw(Error, "Invalid input")
            expect(() => bookSelection.suitableTitles(undefined, 'genre')).to.throw(Error, "Invalid input")
        })
        it('Throws an error if wantedGenre is not a string', () => {
            expect(() => bookSelection.suitableTitles([], 55)).to.throw(Error, "Invalid input")
            expect(() => bookSelection.suitableTitles([], [])).to.throw(Error, "Invalid input")
            expect(() => bookSelection.suitableTitles([], {})).to.throw(Error, "Invalid input")
            expect(() => bookSelection.suitableTitles([], null)).to.throw(Error, "Invalid input")
            expect(() => bookSelection.suitableTitles([], undefined)).to.throw(Error, "Invalid input")
        })
        it('Adds a book to the array if the genre is equal to the wanted', () => {
            let booksArr = [{ title: "The Da Vinci Code", genre: "Thriller" },
                          { title: "Harry Potter", genre: "Fantasy" }, 
                          { title: "Wolf Lake", genre: "Thriller"}
                          ];
            let expectedBooks = ['The Da Vinci Code', "Wolf Lake"]
            expect(bookSelection.suitableTitles(booksArr, 'Thriller')).to.deep.equal(expectedBooks);
            expect(bookSelection.suitableTitles(booksArr, 'Fantasy')).to.deep.equal(["Harry Potter"]);
        })
    })
})