class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        quantity = Number(quantity);
        spaceRequired = Number(spaceRequired);
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.")
        }
        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`
    };

    quantityCheck(product, minimalQuantity) {
        let existingProduct = this.products.find(p => p.product === product);
        if (!existingProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }
        if (minimalQuantity <= existingProduct.quantity) {
            return `You have enough from product ${product}.`
        }
        let diff = minimalQuantity - existingProduct.quantity;
        return `You added ${diff} more from the ${product} products.`
    };

    sellProduct(product) {
        let existingProduct = this.products.find(p => p.product === product);
        if (!existingProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        existingProduct.quantity -= 1;
        this.sales.push({ product, quantity: 1 })
        return `The ${product} has been successfully sold.`
    }
    revision() {
        if (this.sales.length === 0) {
            throw new Error("There are no sales today!")
        }
        let result = [`You sold ${this.sales.length} products today!`]
        result.push("Products in the warehouse:")
        this.products.forEach(a => result.push(`${a.product}-${a.quantity} more left`))

        return result.join('\n')
    }
}

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());
