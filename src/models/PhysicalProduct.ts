import Product from "./Product.js";

class PhysicalProduct extends Product {
    // added weight for this class
    weight: number;

    constructor(sku: string,name: string,price: number,weight: number)

    {   
        // passing sku,name and price from parent class
        super(sku, name, price);
        this.weight = weight;
    }

    override getPriceWithTax(): number {
        return this.price * 1.10;
    }
     
    // getter for formatted weight
    get formattedWeight(): string {
        return `${this.weight} kg`;
    }

}
export default PhysicalProduct;