const movieTheater = require('../JS Advanced Retake Exam - 10 Aug 2022/03. Movie Theater');
const { assert, expect } = require('chai');
const { ageRestrictions } = require('../JS Advanced Retake Exam - 10 Aug 2022/03. Movie Theater');

describe('Tests movieTheater', () => {
    describe('Tests ageRestrictions (movieRating)', () => {
        it('Should check whether the value of movie rating is equal to G', () => {
            expect(movieTheater.ageRestrictions("G")).to.equal('All ages admitted to watch the movie')
        })
        it('Should check whether the value of movie rating is equal to PG', () => {
            expect(movieTheater.ageRestrictions("PG")).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers')
        })
        it('Should check whether the value of movie rating is equal to R', () => {
            expect(movieTheater.ageRestrictions("R")).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian')
        })
        it('Should check whether the value of movie rating is equal to NC-17', () => {
            expect(movieTheater.ageRestrictions("NC-17")).to.equal('No one under 17 admitted to watch the movie')
        })
        it('Should check whether the value of movie rating is something else', () => {
            expect(movieTheater.ageRestrictions("N")).to.equal('There are no age restrictions for this movie')
        })
    })
    describe('Tests moneySpent (tickets, food, drinks)', () => { //num,arr,arr
        it('Throws an error if ticket value is not a number', () => {
            expect(() => movieTheater.moneySpent([], [], [])).to.throw(Error, "Invalid input")
            expect(() => movieTheater.moneySpent({}, [], [])).to.throw(Error, "Invalid input")
            expect(() => movieTheater.moneySpent('55', [], [])).to.throw(Error, "Invalid input")
            expect(() => movieTheater.moneySpent(null, [], [])).to.throw(Error, "Invalid input")
            expect(() => movieTheater.moneySpent(undefined, [], [])).to.throw(Error, "Invalid input")
        })
        it('Throws an error if food value is not an array', () => {
            expect(() => movieTheater.moneySpent(55, 55, [])).to.throw(Error, "Invalid input")
            expect(() => movieTheater.moneySpent(55, '55', [])).to.throw(Error, "Invalid input")
            expect(() => movieTheater.moneySpent(55, {}, [])).to.throw(Error, "Invalid input")
            expect(() => movieTheater.moneySpent(55, null, [])).to.throw(Error, "Invalid input")
            expect(() => movieTheater.moneySpent(55, undefined, [])).to.throw(Error, "Invalid input")
        })
        it('Throws an error if drinks value is not an array', () => {
            expect(() => movieTheater.moneySpent(55, [], {})).to.throw(Error, "Invalid input")
            expect(() => movieTheater.moneySpent(55, [], 55)).to.throw(Error, "Invalid input")
            expect(() => movieTheater.moneySpent(55, [], '55')).to.throw(Error, "Invalid input")
            expect(() => movieTheater.moneySpent(55, [], null)).to.throw(Error, "Invalid input")
            expect(() => movieTheater.moneySpent(55, [], undefined)).to.throw(Error, "Invalid input")
        })
        it('Calculates final cost if total cost is bigger than 50', () => {
            let foodArr = ["Nachos", "Popcorn"];
            let drinArr = ["Soda", "Water"];
            expect(movieTheater.moneySpent(15, [foodArr][0], [drinArr][0])).to.equal(`The total cost for the purchase with applied discount is 191.60`)
        })
        it('Calculates final cost if total cost is less than 50', () => {
            let foodArr = ["Nachos", "Popcorn"];
            let drinArr = ["Soda", "Water"];
            expect(movieTheater.moneySpent(1, [foodArr][0], [drinArr][0])).to.equal(`The total cost for the purchase is 29.50`)
        })
        describe('Tests reservation (rowsArray, neededSeatsCount)', () => {
            it('Throws an error if rowsArray value is not an array', () => {
                expect(() => movieTheater.reservation({}, 55)).to.throw(Error, "Invalid input")
                expect(() => movieTheater.reservation(55, 55)).to.throw(Error, "Invalid input")
                expect(() => movieTheater.reservation('55', 55)).to.throw(Error, "Invalid input")
                expect(() => movieTheater.reservation(null, 55)).to.throw(Error, "Invalid input")
                expect(() => movieTheater.reservation(undefined, 55)).to.throw(Error, "Invalid input")
            })
            it('Throws an error if neededSeatsCount value is not a number', () => {
                expect(() => movieTheater.reservation([], '55')).to.throw(Error, "Invalid input")
                expect(() => movieTheater.reservation([], [])).to.throw(Error, "Invalid input")
                expect(() => movieTheater.reservation([], {})).to.throw(Error, "Invalid input")
                expect(() => movieTheater.reservation([], null)).to.throw(Error, "Invalid input")
                expect(() => movieTheater.reservation([], undefined)).to.throw(Error, "Invalid input")
            })
            it('Checks for free seats', () => {
                let rowArr = [{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }];
                expect(movieTheater.reservation(rowArr, 5)).to.equal(2)
            })
        })
    })
})