import Product from "./Product.js";
import  type {DiscountableProduct}  from "../interface/DiscountableProduct.js";

class PhysicalProduct extends Product implements DiscountableProduct {
    // added weight for this class
    weight: number;
    quantity: number;

    constructor(sku: string,name: string,price: number,weight: number, quantity: number)

    {   
        // passing sku,name and price from parent class
        super(sku, name, price);
        this.weight = weight;
        this.quantity =quantity;
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

    // added bulk discount part
    applyBulkDiscount(): number {
        if (this.quantity >= 5) {
            return this.price * 0.90;
        }
        return this.price;
    }
}
export default PhysicalProduct;