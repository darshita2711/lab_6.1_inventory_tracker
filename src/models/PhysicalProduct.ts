import Product from "./Product.js";
import  type {DiscountableProduct}  from "../interface/DiscountableProduct.js";

class PhysicalProduct extends Product implements DiscountableProduct {
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

    // added discount part
    applyDiscount(discount: number): number {
        // console.log(this.price,discount,"ppp")
        return this.price - (this.price * discount / 100);
    }
}
export default PhysicalProduct;