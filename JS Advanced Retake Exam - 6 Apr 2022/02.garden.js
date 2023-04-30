class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }


    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }
        let newPlant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }

        this.plants.push(newPlant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }


    ripenPlant(plantName, quantity) {
        let searchedPlant = this.plants.find(plant => plant.plantName === plantName);
        if (!searchedPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (searchedPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`)
        }
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }

        searchedPlant.ripe = true;
        searchedPlant.quantity += quantity;

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }

    }

    harvestPlant(plantName) {
        let searchedPlant = this.plants.find(plant => plant.plantName === plantName);
        if (!searchedPlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if (!searchedPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.plants = this.plants.filter(plants => plants.plantName !== plantName);
        this.storage.push({
            plantName: searchedPlant.plantName,
            quantity: searchedPlant.quantity
        });
        this.spaceAvailable += searchedPlant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let sortedArr = this.plants.sort((a, b) => a.plantName - b.plantName).map(p => p.plantName);
        let result = [`The garden has ${this.spaceAvailable} free space left.`];

        result.push(`Plants in the garden: ${sortedArr.join(', ')}`);

        if (this.storage.length === 0) {
            result.push("Plants in storage: The storage is empty.")
        }
        else {
            let formatData = this.storage.map(plant => `${plant.plantName} (${plant.quantity})`);
            result.push(`Plants in storage: ${formatData.join(', ')}`);
        }
        return result.join('\n')
    }
}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));
