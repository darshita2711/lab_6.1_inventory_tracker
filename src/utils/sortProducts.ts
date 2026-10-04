import Product from "../models/Product.js";

function sortProducts(products: Product[], type: string): Product[] {

    if (type === "price") {
        products.sort(function (a, b) {
            return a.price - b.price;
        });
    }
    if (type === "name") {
        products.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }
    return products;
}

export default sortProducts;