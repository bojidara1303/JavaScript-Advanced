describe("chooseYourCar", () => {
    describe("Tests .choosingType(type, color, year)", () => {
        it("should throw an error if the year less then 1900", () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 1800)).throws(Error, "Invalid Year!")
        });
        it("should throw an error if the year more than 2022", () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 2300)).throws(Error, "Invalid Year!")
        });
        it("should throw an error if the type is different from Sedan", () => {
            expect(() => chooseYourCar.choosingType('Hatchback', 'red', 2002)).throws(Error, "This type of car is not what you are looking for.")
        })
        it("should return a message if the year is greater then 2010", () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2012)).to.eq(`This red Sedan meets the requirements, that you have.`);
        })
        it("should return a message if the year is equal to 2010", () => {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2010)).to.eq(`This blue Sedan meets the requirements, that you have.`);
        })
        it("should return a message if the year is less than 2010", () => {
            expect(chooseYourCar.choosingType('Sedan', 'green', 2002)).to.eq(`This Sedan is too old for you, especially with that green color.`);
        })
    })

    describe("Tests .brandName(brands, brandIndex)", () => {
        let brands = ["BMW", "Toyota", "Peugeot"];
        it("throws an error if brands is not an array", () => {
            expect(() => chooseYourCar.brandName({}, 5)).throws(Error, "Invalid Information!")
            expect(() => chooseYourCar.brandName('5', 5)).throws(Error, "Invalid Information!")
            expect(() => chooseYourCar.brandName(0.2, 5)).throws(Error, "Invalid Information!")
        })
        it("throws an error if brandIndex is not a number", () => {
            expect(() => chooseYourCar.brandName(brands, [])).throws(Error, "Invalid Information!")
            expect(() => chooseYourCar.brandName(brands, {})).throws(Error, "Invalid Information!")
            expect(() => chooseYourCar.brandName(brands, "5")).throws(Error, "Invalid Information!")
        })
        it("throws an error if brandIndex is outside the limits of the array", () => {
            expect(() => chooseYourCar.brandName(brands, 4)).throws(Error, "Invalid Information!")
            expect(() => chooseYourCar.brandName(brands, -1)).throws(Error, "Invalid Information!")
        })
        it("removes an elemen from the array that is located on the index", () => {
            expect(chooseYourCar.brandName(brands, 0)).to.eq('Toyota, Peugeot');
        })
        it("returns the changed array of brands, joined by a comma and a space", () => {
            expect(chooseYourCar.brandName(brands, 0)).to.eq(["Toyota", "Peugeot"].join(', ').toString())
        })
    })

    describe("Tests .carFuelConsumption(distanceInKilometers, consumptedFuelInLiters)", () => {
        it("throws an error if distanceInKilometers is not a number", () => {
            expect(() => chooseYourCar.carFuelConsumption('5', 5)).throws(Error, "Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption([], 5)).throws(Error, "Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption({}, 5)).throws(Error, "Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(undefined, 5)).throws(Error, "Invalid Information!")
        })
        it("throws an error if consumptedFuelInLitres is not a number", () => {
            expect(() => chooseYourCar.carFuelConsumption(5, "5")).throws(Error, "Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(5, [])).throws(Error, "Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(5, {})).throws(Error, "Invalid Information!")
            expect(() => chooseYourCar.carFuelConsumption(5, undefined)).throws(Error, "Invalid Information!")
        })
        it("throws an error if consumptedFuelInLitres is a negative number", () => {
            expect(() => chooseYourCar.carFuelConsumption(5, -5)).throws(Error, "Invalid Information!")
        })
        it("throws an error if distanceInKilometers is a negative number", () => {
            expect(() => chooseYourCar.carFuelConsumption(-5, 5)).throws(Error, "Invalid Information!")
        })
        it("returns a message if liters are less than 7", () => {
            expect(chooseYourCar.carFuelConsumption(250, 15)).to.eq(`The car is efficient enough, it burns 6.00 liters/100 km.`);
        })
        it("returns a message if liters are more than 7", () => {
            expect(chooseYourCar.carFuelConsumption(250, 50)).to.eq(`The car burns too much fuel - 20.00 liters!`);
        })
    })
})