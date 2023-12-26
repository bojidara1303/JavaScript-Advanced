class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.")
        }

        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        let searchedPlant = this.plants.find(plant => plant.plantName === plantName)
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

        if (quantity === 1) {
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
        this.plants = this.plants.filter(plant => plant.plantName !== plantName);
        this.storage.push({
            plantName: searchedPlant.plantName,
            quantity: searchedPlant.quantity
        });
        this.spaceAvailable += searchedPlant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let sorted = this.plants.sort((a, b) => a.plantName - b.plantName).map(p => p.plantName);

        let result = [`The garden has ${this.spaceAvailable} free space left.`];
        result.push(`Plants in the garden: ${sorted.join(", ")}`);

        if (this.storage.length === 0) {
            result.push("Plants in storage: The storage is empty.")
        } else {
            let sortedStorage = this.storage.map(plant => `${plant.plantName} (${plant.quantity})`);
            result.push(`Plants in storage: ${sortedStorage.join(", ")}`)
        }
        return result.join("\n")
    }
}
