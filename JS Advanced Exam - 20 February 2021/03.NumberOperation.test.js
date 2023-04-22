const numberOperations = require('../JS Advanced Exam - 20 February 2021/03. Number Operations');
const { assert, expect } = require('chai');

describe('Tests numberOperations', () => {
    describe('Tests numberChecker: function(input) ', () => {
        it('Throws an error if the input is not valid', () => {
            expect(() => numberOperations.numberChecker({})).to.throw(Error, 'The input is not a number!')
            expect(() => numberOperations.numberChecker([1, 2])).to.throw(Error, 'The input is not a number!')
            expect(() => numberOperations.numberChecker('string')).to.throw(Error, 'The input is not a number!')
        })
        it('Checks if the number is lower than 100', () => {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!')
        })
        it('Checks if the number is bigger than 100', () => {
            expect(numberOperations.numberChecker(1000)).to.equal('The number is greater or equal to 100!')
        })
        it('Checks if the number is equal than 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!')
        })
    })
    describe('Tests sumArrays: function(array1, array2)', () => {
        it('Returns new array, which presents the sum of the two arrays by indexes', () => {
            expect(numberOperations.sumArrays([1, 2, 3, 4], [5, 4, 3])).to.deep.equal([6, 6, 6, 4])
            expect(numberOperations.sumArrays([1, 2, 3, 4, 6], [5, 4, 3, 4])).to.deep.equal([6, 6, 6, 8, 6])
        })
    })
    describe('Tests powNumber: function (num)', () => {
        it('Returns the power of the given number', () => {
            expect(numberOperations.powNumber(5)).to.equal(25)
            expect(numberOperations.powNumber(2)).to.equal(4)
        })
    })
})