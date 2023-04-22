const { expect } = require('chai')
const findNewApartment = require('../JS Advanced Exam - 18 February 2023/03.Find Apartment');

describe('Tests findNewApartment', () => {
    describe('Tests isGoodLocation (city, nearPublicTransportation)', () => {
        it('Checks if the city is correct', () => {
            expect(findNewApartment.isGoodLocation("Bourgas", true)).to.equal("This location is not suitable for you.");
            expect(findNewApartment.isGoodLocation("Vratza", true)).to.equal("This location is not suitable for you.");
        });
        it('Checks if nearPublicTransportation is false and returns a message', () => {
            expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation("Plovdiv", false)).to.equal("There is no public transport in area.");
            expect(findNewApartment.isGoodLocation("Varna", false)).to.equal("There is no public transport in area.");
        });
        it('Returns a message if the two parameters are correct', () => {
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation("Varna", true)).to.equal("You can go on home tour!");
            expect(findNewApartment.isGoodLocation("Plovdiv", true)).to.equal("You can go on home tour!");
        });
        it('Throws an error if city is not a string', () => {
            expect(() => findNewApartment.isGoodLocation(5, true)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation([], true)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation({}, true)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation(null, true)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation(undefined, true)).to.throw(Error, "Invalid input!");
        });
        it('Throws an error if nearPublicTransport is not a boolean', () => {
            expect(() => findNewApartment.isGoodLocation("5", 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation("5", "true")).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation("5", null)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation("5", undefined)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation("5", [])).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isGoodLocation("5", {})).to.throw(Error, "Invalid input!");
        });
    })
    describe('Tests isLargeEnough (apartments, minimalSquareMeters)', () => {
        it('Throws an error if apartments is not an array or an empty array', () => {
            expect(() => findNewApartment.isLargeEnough("5", 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough(5, 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough([], 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough({}, 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough(null, 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough(undefined, 5)).to.throw(Error, "Invalid input!");
        });
        it('Throws an error if the minimalSquareMeters is not a number', () => {
            expect(() => findNewApartment.isLargeEnough([4, 5, 6], "5")).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough([4, 5, 6], [])).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough([4, 5, 6], {})).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough([4, 5, 6], null)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isLargeEnough([4, 5, 6], undefined)).to.throw(Error, "Invalid input!");
        });
        it('Checks if the apartment area is bigger of equal to minimalSqM', () => {
            expect(findNewApartment.isLargeEnough([50], 50)).to.equal("50");
        })
    });
    describe('Tests isItAffordable (price, budget)', () => {
        it('Throws an error if price is not a number', () => {
            expect(() => findNewApartment.isItAffordable("5", 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable([], 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable({}, 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(null, 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(undefined, 5)).to.throw(Error, "Invalid input!");
        });
        it('Throws an error if budget is not a number', () => {
            expect(() => findNewApartment.isItAffordable(5, "5")).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(5, {})).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(5, [])).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(5, null)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(5, undefined)).to.throw(Error, "Invalid input!");
        });
        it('Throws an error if the price is less or equal to 0', () => {
            expect(() => findNewApartment.isItAffordable(-2, 5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(0, 5)).to.throw(Error, "Invalid input!");
        });
        it('Throws an error if the budget is less or equal to 0', () => {
            expect(() => findNewApartment.isItAffordable(5, -5)).to.throw(Error, "Invalid input!");
            expect(() => findNewApartment.isItAffordable(5, 0)).to.throw(Error, "Invalid input!");
        });
        it('Returns a message if budget is less then the price', () => {
            expect(findNewApartment.isItAffordable(1000, 500)).to.equal("You don't have enough money for this house!");
        });
        it('Returns a message if you can afford the apartment', () => {
            expect(findNewApartment.isItAffordable(1000, 2000)).to.equal("You can afford this home!");
        })
    })
})