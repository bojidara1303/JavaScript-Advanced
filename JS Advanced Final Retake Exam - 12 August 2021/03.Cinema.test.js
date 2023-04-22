const cinema = require('../JS Advanced Final Retake Exam - 12 August 2021/03. Cinema');
const { expect } = require('chai');

describe('Tests cinema', () => {
    describe('Tests showMovies(movieArr)', () => {
        it('Checks if the array length is 0', () => {
            let movies = ['King Kong', 'The Tomorrow War', 'Joker', 'Alice in Wonderland'];
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.")
        })
        it('Returns the array of movies', () => {
            let movies = ['King Kong', 'The Tomorrow War', 'Joker', 'Alice in Wonderland'];
            expect(cinema.showMovies(movies)).to.equal('King Kong, The Tomorrow War, Joker, Alice in Wonderland')
        })
    })
    describe('Tests ticketPrice(projectionType)', () => {
        it('Checks whether the submitted projectionType is present in the schedule with the types of projections', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00)
            expect(cinema.ticketPrice('Normal')).to.equal(7.50)
            expect(cinema.ticketPrice('Discount')).to.equal(5.50)
        })
        it('Throws an error if the projectionType does not exist', () => {
            expect(() => cinema.ticketPrice("Comedy")).to.throw(Error, "Invalid projection type.")
        })
    })
    describe('Tests swapSeatsInHall(firstPlace, secondPlace)', () => {
        it('Throws an error if firstPlace is not a number', () => {
            expect(cinema.swapSeatsInHall([], 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall({}, 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall('5', 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(null, 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(undefined, 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(-5, 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5.5, 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0, 5)).to.equal("Unsuccessful change of seats in the hall.")
        })
        it('Throws an error if secondPlace is not a number', () => {
            expect(cinema.swapSeatsInHall(5, '5')).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, {})).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, [])).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, null)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, undefined)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, -5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, 5.5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, 0)).to.equal("Unsuccessful change of seats in the hall.")
        })
        it('Checks if the exchange is not succesfull', () => {
            expect(cinema.swapSeatsInHall(5, 5.5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5, -5.5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(5.5, 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(-5, 5)).to.equal("Unsuccessful change of seats in the hall.")
        })
        it('Checks if one of the firstPlace does not exist', () => {
            expect(cinema.swapSeatsInHall(21, 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(-2, 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2.5, 5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(0, 5)).to.equal("Unsuccessful change of seats in the hall.")
        })
        it('Checks if one of the secondPlace does not exist', () => {
            expect(cinema.swapSeatsInHall(2, 21)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, -5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, 5.5)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(2, 0)).to.equal("Unsuccessful change of seats in the hall.")
        })
        it('Checks if the seats are less or equal to 20', () => {
            expect(cinema.swapSeatsInHall(8, 7)).to.equal("Successful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(20, 1)).to.equal("Successful change of seats in the hall.")
        })
        it('Checks if the seats can be swap', () => {
            expect(cinema.swapSeatsInHall(8, 8)).to.equal("Unsuccessful change of seats in the hall.")
            expect(cinema.swapSeatsInHall(10, 10)).to.equal("Unsuccessful change of seats in the hall.")
        })
    })
})