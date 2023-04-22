const companyAdministration = require('../Js Advanced Final Retake Exam - 10 December 2021/03. Company Administration');
const { expect } = require('chai');

describe('Tests companyAdministration', () => {
    describe('Tests hiringEmployee (name, position, yearsExperience)', () => {
        it('Throws an error if the string position is different from Programmer', () => {
            expect(() => companyAdministration.hiringEmployee('Peter', "Designer", 1)).to.throw(Error, "We are not looking for workers for this position.")
        })
        it('Tests if the employee has 3 years of experience', () => {
            expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 3)).to.equal("Peter was successfully hired for the position Programmer.")
        })
        it('Tests if the employee has more than 3 years of experience', () => {
            expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 4)).to.equal("Peter was successfully hired for the position Programmer.")
        })
        it('Tests if the employee has less than 3 years of experience', () => {
            expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 2)).to.equal("Peter is not approved for this position.")
        })
        it('Tests if the employee has 0 years of experience', () => {
            expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 0)).to.equal("Peter is not approved for this position.")
        })
    })
    describe('Tests calculateSalary (hours)', () => {
        it('Throws an error if hours input is not a number', () => {
            expect(() => companyAdministration.calculateSalary([])).to.throw(Error, "Invalid hours")
            expect(() => companyAdministration.calculateSalary({})).to.throw(Error, "Invalid hours")
            expect(() => companyAdministration.calculateSalary('55')).to.throw(Error, "Invalid hours")
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw(Error, "Invalid hours")
            expect(() => companyAdministration.calculateSalary(null)).to.throw(Error, "Invalid hours")
        })
        it('Tests if working hours are more than 160', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415)
        })
        it('Tests if working hours are equal to 160', () => {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400)
        })
        it('Tests if working hours are less than 160', () => {
            expect(companyAdministration.calculateSalary(159)).to.equal(2385)
        })
        it('Tests if working hours are 0', () => {
            expect(companyAdministration.calculateSalary(0)).to.equal(0)
        })
        it('Tests if working hours are 160.5', () => {
            expect(companyAdministration.calculateSalary(160.5)).to.equal(3407.5)
        })
        it("Tests if working hours are negative number", () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
        });
    })
    describe('Tests firedEmployee (employees, index)', () => {
        it('Throws an error if employee is not an array', () => {
            expect(() => companyAdministration.firedEmployee({}, 55)).to.throw(Error, "Invalid input")
            expect(() => companyAdministration.firedEmployee(55, 55)).to.throw(Error, "Invalid input")
            expect(() => companyAdministration.firedEmployee(null, 55)).to.throw(Error, "Invalid input")
            expect(() => companyAdministration.firedEmployee(undefined, 55)).to.throw(Error, "Invalid input")
            expect(() => companyAdministration.firedEmployee('55', 55)).to.throw(Error, "Invalid input")
        })
        it('Throws an error if index is not a number', () => {
            expect(() => companyAdministration.firedEmployee([], '55')).to.throw(Error, "Invalid input")
            expect(() => companyAdministration.firedEmployee([], null)).to.throw(Error, "Invalid input")
            expect(() => companyAdministration.firedEmployee([], undefined)).to.throw(Error, "Invalid input")
            expect(() => companyAdministration.firedEmployee([], [])).to.throw(Error, "Invalid input")
            expect(() => companyAdministration.firedEmployee([], {})).to.throw(Error, "Invalid input")
            expect(() => companyAdministration.firedEmployee([], -1)).to.throw(Error, "Invalid input")
        })
        it('Removes an employee from an array', () => {
            let employees = ["Petar", "Ivan", "George", "Ana", "Maria"];
            expect(companyAdministration.firedEmployee(employees, 2)).to.equal("Petar, Ivan, Ana, Maria")
        })
    })
})