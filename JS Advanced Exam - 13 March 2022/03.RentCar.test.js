const rentCar = require('../JS Advanced Exam - 13 March 2022/03. Rent Car');
const { assert, expect } = require('chai');

describe('Tests rentCar', () => {
    describe('Tests searchCar: function(shop, model)', () => {
        let modelsArr = ["Volkswagen", "BMW", "Audi"];
        it('Tests if the shop input is invalid', () => {
            expect(() => rentCar.searchCar('shop', 'model')).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.searchCar('55', 'model')).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.searchCar(55, 'model')).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.searchCar({}, 'model')).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.searchCar(null, 'model')).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.searchCar(undefined, 'model')).to.throw(Error, 'Invalid input!')
        })
        it('Tests if the model input is not valid', () => {
            expect(() => rentCar.searchCar([], [])).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.searchCar([], 55)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.searchCar([], {})).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.searchCar([], null)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.searchCar([], undefined)).to.throw(Error, 'Invalid input!')
        })
        it('Returns number of matching elements and the model of the car', () => {
            expect(rentCar.searchCar(modelsArr, 'Audi')).to.equal('There is 1 car of model Audi in the catalog!')
            expect(rentCar.searchCar(modelsArr, 'Volkswagen')).to.equal('There is 1 car of model Volkswagen in the catalog!')
        })
        it('Throws an error if there is not such model', () => {
            expect(() => rentCar.searchCar(modelsArr, 'Opel')).to.throw(Error, 'There are no such models in the catalog!')
        })
    })
    describe('Tests calculatePriceOfCar: function(model, days)', () => {
        it('Tests if the model input is not valid', () => {
            expect(() => rentCar.calculatePriceOfCar([], 44)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.calculatePriceOfCar({}, 44)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.calculatePriceOfCar(null, 44)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.calculatePriceOfCar(undefined, 44)).to.throw(Error, 'Invalid input!')
        })
        it('Tests if the days input is not valid', () => {
            expect(() => rentCar.calculatePriceOfCar('model', '44')).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.calculatePriceOfCar('model', [])).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.calculatePriceOfCar('model', {})).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.calculatePriceOfCar('model', null)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.calculatePriceOfCar('model', undefined)).to.throw(Error, 'Invalid input!')
        })
        it('Returns the model and the price', () => {
            expect(rentCar.calculatePriceOfCar('Toyota', 6)).to.equal('You choose Toyota and it will cost $240!')
            expect(rentCar.calculatePriceOfCar('Volkswagen', 5)).to.equal('You choose Volkswagen and it will cost $100!')
        })
        it('Throws an error if there is not such model in the catalog', () => {
            expect(() => rentCar.calculatePriceOfCar('opel', 5)).to.throw(Error, 'No such model in the catalog!')
        })
    })
    describe('Tests checkBudget: function(costPerDay, days, budget', () => {
        it('Check if the costPerDay is a valid input', () => {
            expect(() => rentCar.checkBudget([], 55, 55)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget({}, 55, 55)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget(null, 55, 55)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget(undefined, 55, 55)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget('costPerDay', 55, 55)).to.throw(Error, 'Invalid input!')
        })
        it('Check if the days is a valid input', () => {
            expect(() => rentCar.checkBudget(55, [], 55)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget(55, {}, 55)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget(55, null, 55)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget(55, undefined, 55)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget(55, '55', 55)).to.throw(Error, 'Invalid input!')
        })
        it('Check if the budget is a valid input', () => {
            expect(() => rentCar.checkBudget(55, 55, [])).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget(55, 55, {})).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget(55, 55, null)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget(55, 55, undefined)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget(55, 55, '55')).to.throw(Error, 'Invalid input!')
        })
        it('Tests if the budget is equal  to cost', () => {
            expect(rentCar.checkBudget(20, 5, 100)).to.equal('You rent a car!')
            expect(rentCar.checkBudget(10, 5, 50)).to.equal('You rent a car!')
        })
        it('Tests if the budget is bigger than cost', () => {
            expect(rentCar.checkBudget(20, 5, 150)).to.equal('You rent a car!')
            expect(rentCar.checkBudget(10, 5, 250)).to.equal('You rent a car!')
        })
        it('Tests if the budget is less than cost', () => {
            expect(rentCar.checkBudget(20, 5, 50)).to.equal('You need a bigger budget!')
            expect(rentCar.checkBudget(10, 5, 40)).to.equal('You need a bigger budget!')
        })
    })
})
