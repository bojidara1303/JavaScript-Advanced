class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }


    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error("Not enough space in the cellar.")
        }
        this.wines.push({ wineName, wineType, price, paid: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    };


    payWineBottle(wineName, price) {
        let searchedWine = this.wines.find(w => w.wineName === wineName);

        if (!searchedWine) {
            throw new Error(`${wineName} is not in the cellar.`)
        }

        if (searchedWine.paid) {
            throw new Error(`${wineName} has already been paid.`)
        } else {
            this.bill += price;
            searchedWine.paid = true;
            return `You bought a ${searchedWine.wineName} for a ${price}$.`
        }
    }


    openBottle(wineName) {
        let searchedWine = this.wines.find(w => w.wineName === wineName);

        if (!searchedWine) {
            throw new Error("The wine, you're looking for, is not found.")
        }

        if (!searchedWine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        } else {
            return `You drank a bottle of ${wineName}.`
        }
    }


    cellarRevision(wineType) {
        if (!wineType) {
            let resultArray = [];
            let sortWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            resultArray.push(`You have space for ${this.space - this.wines.length} bottles more.`)
            resultArray.push(`You paid ${this.bill}$ for the wine.`)
            sortWines.map((b) => {
                let isItPaid = b.paid ? 'Has Paid' : 'Not Paid';
                resultArray.push(`${b.wineName} > ${b.wineType} - ${isItPaid}.`)
            });
            return resultArray.join("\n").trim()
        } else {
            let searchedWine = this.wines.find(w => w.wineType === wineType);
            if (searchedWine) {
                let resArr = [];
                let isItPaid = searchedWine.paid ? 'has Paid' : 'Not Paid';
                resArr.push(`${searchedWine.wineName} > ${searchedWine.wineType} - ${isItPaid}.`);
                return resArr.join('\n').trim()
            } else {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }
        }
    }

}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));


// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));


// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));


const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
