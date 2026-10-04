class Product {
    // unique properties for product class
    sku: string;
    name: string;
    price: number;

    //creation of object built in method of our class that helps us create the object
    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;

    }
    // shows the product details
    displayDetails(): string {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price}`;
    }
    // getter method for price
    getPriceWithTax(): number {
        return this.price * 1.08;
    }
}
export default Product;