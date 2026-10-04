import Product from "../models/Product.js";

function calculateTax(product: Product): number {
    return product.getPriceWithTax();
}

export default calculateTax;