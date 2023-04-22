const flowerShop = require('../Js Advanced Final Exam - 19 February 2022/03. Flowers Shop');
const { expect, assert } = require('chai');

describe('Tests flowerShop', () => {
    describe('Tests calcPriceOfFlowers(flower, price, quantity)', () => {
        it('Throws an error if flower input is invalid', () => {
            expect(() => flowerShop.calcPriceOfFlowers(55, 55, 55)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers([], 55, 55)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers({}, 55, 55)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers(null, 55, 55)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 55, 55)).to.throw(Error, "Invalid input!")
        })
        it('Throws an error if price input is invalid', () => {
            expect(() => flowerShop.calcPriceOfFlowers('flower', '55', 55)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers('flower', [], 55)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers('flower', {}, 55)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers('flower', null, 55)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers('flower', undefined, 55)).to.throw(Error, "Invalid input!")
        })
        it('Throws an error if quantity input is invalid', () => {
            expect(() => flowerShop.calcPriceOfFlowers('flower', 55, '55')).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers('flower', 55, [])).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers('flower', 55, {})).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers('flower', 55, null)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.calcPriceOfFlowers('flower', 55, undefined)).to.throw(Error, "Invalid input!")
        })
        it('Returns the multiplies price and quantity', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 10, 2)).to.equal('You need $20.00 to buy Rose!')
            expect(flowerShop.calcPriceOfFlowers('Lily', 5, 3)).to.equal('You need $15.00 to buy Lily!')
        })
    })
    describe('Tests calcPriceOfFlowers(flower, price, quantity)', () => {
        let gardenArr = ["Rose", "Lily", "Orchid"];
        it('Checks whether the submitted string flower is present in the array gardenArr', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', gardenArr)).to.equal('The Rose are available!')
        })
        it('Checks whether the submitted string flower is not present in the array gardenArr', () => {
            expect(flowerShop.checkFlowersAvailable('Daffodil', gardenArr)).to.equal('The Daffodil are sold! You need to purchase more!')
        })
    })
    describe('Tests sellFlowers(gardenArr, space)', () => {
        it('Throws an error if gardenArr is not an array', () => {
            expect(() => flowerShop.sellFlowers('flower', 55)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.sellFlowers({}, 55)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.sellFlowers(null, 55)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.sellFlowers(undefined, 55)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.sellFlowers(5, 55)).to.throw(Error, "Invalid input!")
        })
        it('Throws an error if space is not a number', () => {
            expect(() => flowerShop.sellFlowers([], '55')).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.sellFlowers([], {})).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.sellFlowers([], [])).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.sellFlowers([], null)).to.throw(Error, "Invalid input!")
            expect(() => flowerShop.sellFlowers([], undefined)).to.throw(Error, "Invalid input!")
        })
        it('Throws an error if space is not a number', () => {
            let gardenArr = ["Rose", "Lily", "Orchid"];
            expect(flowerShop.sellFlowers(gardenArr, 1)).to.equal("Rose / Orchid")
        })
    })
})