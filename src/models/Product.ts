class Product {
    sku: string;
    name: string;
    price: number;


    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;

    }

    displayDetails(): string {
        return `${this.name} costs $${this.price} and is ${this.sku ? "in stock" : "out of stock"}.`;
    }
    getPriceWithTax(): number {
        return this.price * 1.08;
    }
}
export default Product;