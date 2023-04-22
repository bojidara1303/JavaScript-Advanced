const dealership = require('../JS Advanced - Exam Prep - 15.02.2021/03. Dealership');
const { assert, expect } = require('chai');

describe('Tests dealership', () => {
    describe('Tests newCarCost: function(oldCarModel, newCarPrice)', () => {
        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000
        }

        it('Tests if your old car is valid', () => {
            expect(dealership.newCarCost('Audi A4 B8', 35000)).to.equal(20000);
            expect(dealership.newCarCost('Audi A6 4K', 30000)).to.equal(10000);
            expect(dealership.newCarCost('Audi A8 D5', 35000)).to.equal(10000);
            expect(dealership.newCarCost('Audi TT 8J', 34000)).to.equal(20000);
        })
        it('Tests if your old car is not valid', () => {
            expect(dealership.newCarCost('Audi A4 C8', 35000)).to.equal(35000);
            expect(dealership.newCarCost('Audi TT D8', 40000)).to.equal(40000);
        })
    })
    describe('Tests carEquipment: function(extrasArr, indexArr)', () => {
        let extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
        it('Tests if extras are available', () => {
            expect(dealership.carEquipment(extras, ([0]))).to.deep.equal(['heated seats'])
            expect(dealership.carEquipment(extras, ([0, 2]))).to.deep.equal(['heated seats', 'sport rims'])
            expect(dealership.carEquipment(extras, ([0, 2, 3]))).to.deep.equal(['heated seats', 'sport rims', 'navigation'])
        })
    })
    describe('Test euroCategory: function (category)', ()=> {
        it('should return discount message if category is equal to 4', ()=> {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
        });
        it('should return discount message if category is more than 4', ()=> {
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.')
        });
        it('should return discount message if category is less than 4', ()=> {
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.')
        });
    })
})