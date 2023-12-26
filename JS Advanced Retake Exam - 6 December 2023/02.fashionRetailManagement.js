class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        quantity = Number(quantity);
        price = Number(price);

        let searchedProduct = this.productStock.find(product => product.productName === productName && product.size === size);
        if (searchedProduct) {
            searchedProduct.quantity += quantity
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        } else {
            this.productStock.push({ productName, size, quantity, price })
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct(productName, size) {
        let searchedProduct = this.productStock.find(product => product.productName === productName)
        if (!searchedProduct) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        } else {
            this.productStock = this.productStock.filter(product => product.productName !== productName && product.size !== size);
            // return `The product ${productName}, size ${size} was successfully removed from the inventory`;
            console.log(this.productStock); 
        }
    }

    findProductsBySize(size) {
        let searchedProducts = this.productStock.filter((product) => product.size === size);

        if (searchedProducts.length === 0) {
            return `There are no products available in that size`
        } else {
            let products = searchedProducts.map((product) => `${product.productName}-${product.quantity} pieces`).join(", ")
            return products
        }
    }

    listProducts() {
        if (this.productStock.length === 0) {
            return `${this.storehouse} storehouse is empty`
        }
            this.productStock.sort((a, b) => a.productName.localeCompare(b.productName))
            let productInfo = this.productStock.map((product) => `${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$`)
            return `${this.storehouse} storehouse in ${this.location} available products: \n${productInfo.join("\n")}`
        
    }

}
const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.sendProduct("T-Shirt", "M"));
console.log(storeHouse.sendProduct("Sweather", "M"));





