const { expect } = require('chai')
const motorcycleRider = require('..//JS Exam Advanced Retake 07 December 2022/motorcycleRider');

describe('Tests MotorcycleRider', () => {
    describe('Tests licenseRestriction (category)', () => {
        it('Checks if the category is AM', () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        })
        it('Checks if the category is A1', () => {
            expect(motorcycleRider.licenseRestriction("A1")).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        });
        it('Checks if the category is A2', () => {
            expect(motorcycleRider.licenseRestriction("A2")).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        });
        it('Checks if the category is A', () => {
            expect(motorcycleRider.licenseRestriction("A")).to.equal("No motorcycle restrictions, and the minimum age is 24.");
        });
        it('Throws an error if the category is different', () => {
            expect(() => motorcycleRider.licenseRestriction("B")).to.throw(Error, "Invalid Information!");
        });
    });
    describe('Tests motorcycleShowroom (engineVolume, maximumEngineVolume)', () => {
        it('Throws an error if engineVolume is not an arr', () => {
            expect(() => motorcycleRider.motorcycleShowroom(5, 5)).to.throw(Error, "Invalid Information");
            expect(() => motorcycleRider.motorcycleShowroom('5', 5)).to.throw(Error, "Invalid Information");
            expect(() => motorcycleRider.motorcycleShowroom(null, 5)).to.throw(Error, "Invalid Information");
            expect(() => motorcycleRider.motorcycleShowroom(undefined, 5)).to.throw(Error, "Invalid Information");
            expect(() => motorcycleRider.motorcycleShowroom({}, 5)).to.throw(Error, "Invalid Information")
        });
        it('Throws an error if maximumEngineVolume is not a number', () => {
            expect(() => motorcycleRider.motorcycleShowroom([], [])).to.throw(Error, "Invalid Information");
            expect(() => motorcycleRider.motorcycleShowroom([], '5')).to.throw(Error, "Invalid Information");
            expect(() => motorcycleRider.motorcycleShowroom([], {})).to.throw(Error, "Invalid Information");
            expect(() => motorcycleRider.motorcycleShowroom([], null)).to.throw(Error, "Invalid Information");
            expect(() => motorcycleRider.motorcycleShowroom([], undefined)).to.throw(Error, "Invalid Information")
        });
        it('Throws an error if maximumEngineVolume is less than 50', () => {
            expect(() => motorcycleRider.motorcycleShowroom([], 45)).to.throw(Error, "Invalid Information");
        });
        it('checks the engineVolume', () => {
            let engineVolume = ["125", "250", "600", "300", "400", "100"];
            expect(motorcycleRider.motorcycleShowroom([0], 200)).to.equal(`There are 0 available motorcycles matching your criteria!`)
            expect(motorcycleRider.motorcycleShowroom(engineVolume, 250)).to.equal(`There are 3 available motorcycles matching your criteria!`)
        })

    })
    describe('Tests otherSpendings (equipment, consumables, discount)', () => {
        it('Throws an error if equipment is not an arr', () => {
            expect(() => motorcycleRider.otherSpendings(5, [], true)).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings('5', [], true)).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings({}, [], true)).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(null, [], true)).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings(undefined, [], true)).to.throw(Error, "Invalid Information!");
        });
        it('Throws an error if consumables is not an arr', () => {
            expect(() => motorcycleRider.otherSpendings([], 5, true)).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], '5', true)).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], {}, true)).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], null, true)).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], undefined, true)).to.throw(Error, "Invalid Information!");
        })
        it('Throws an error if discount is not a boolean', () => {
            expect(() => motorcycleRider.otherSpendings([], [], [])).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], [], {})).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], [], 5)).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], [], '5')).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], [], null)).to.throw(Error, "Invalid Information!");
            expect(() => motorcycleRider.otherSpendings([], [], undefined)).to.throw(Error, "Invalid Information!");
        });
        it('Calculates totalPrice if equipment is a helmet', () => {
            let equipment = ["helmet", "jacket"];
            let consumables = ["engine oil", "oil filter"]
            expect(motorcycleRider.otherSpendings([0], [0], false)).to.equal(`You spend $0.00 for equipment and consumables!`)
        });

    })
})
