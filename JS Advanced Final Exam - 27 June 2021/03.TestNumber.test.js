const testNumbers = require('../JS Advanced Final Exam - 27 June 2021/03. Test Numbers');
const { assert, expect } = require('chai');
// const { sumNumbers } = require('../JS Advanced Final Exam - 27 June 2021/03. Test Numbers');

describe('Tests testNumbers', () => {
    describe('Tests sumNumber(num1, num2)', () => {
        it('Returns undefines if the first number is not a number', () => {
            expect(testNumbers.sumNumbers([], 55)).to.equal(undefined)
        })
        it('Returns undefines if the second number is not a number', () => {
            expect(testNumbers.sumNumbers(55, [])).to.equal(undefined)
        })
        it('Test two positive numbers', () => {
            expect(testNumbers.sumNumbers(5, 4)).to.equal('9.00')
        })
        it('Test sum of a positive and a negative number', () => {
            expect(testNumbers.sumNumbers(-5, 4)).to.equal('-1.00')
        })
        it('Test sum of two negative numbers', () => {
            expect(testNumbers.sumNumbers(-5, -4)).to.equal('-9.00')
        })
        it('Test sum of two floating positive numbers', () => {
            expect(testNumbers.sumNumbers(5.50, 4.50)).to.equal('10.00')
        })
        it('Test sum of two floating negative numbers', () => {
            expect(testNumbers.sumNumbers(-3.50, -4.50)).to.equal('-8.00')
        })
        it('Test sum of two floating numbers', () => {
            expect(testNumbers.sumNumbers(3.50, -4.50)).to.equal('-1.00')
        })
    })
    describe('Tests numberChecker(input)', () => {
        it('Tests if the number is even', () => {
            expect(testNumbers.numberChecker('2')).to.equal("The number is even!")
        })
        it('Tests if the number is odd', () => {
            expect(testNumbers.numberChecker('3')).to.equal("The number is odd!")
        })
        it('Throws an error if the input is not a number', () => {
            expect(() => testNumbers.numberChecker({})).to.throw(Error, "The input is not a number!" )
        })
    })
    describe('Tests averageSumArray(arr)', () => {
        it('Calculates the sum and returns the average', () => {
            expect(testNumbers.averageSumArray([1, 2, 3, 4, 5])).to.equal(3)
        })
    })
})