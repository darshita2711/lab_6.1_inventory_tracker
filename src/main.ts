import PhysicalProduct  from "./models/PhysicalProduct.js";
import  DigitalProduct  from "./models/DigitalProduct.js";
import calculateTax  from "./utils/taxCalculator.js";
import sortProducts from "./utils/sortProducts.js";

const products = [
    new PhysicalProduct("1", "Laptop", 1000, 2.5,5),
    new DigitalProduct("2", "TV", 2000, 44)
];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]!.displayDetails());
    console.log("Final Price: $" + calculateTax(products[i]!));
    
}

const laptop = new PhysicalProduct("1", "Laptop", 1000, 2.5,5);
console.log("Discounted Price: $" + laptop.applyDiscount(10));
console.log("Bulk Discount Price: $" + laptop.applyBulkDiscount());

// sort by price
const sortedProducts = sortProducts(products, "price");
for (let i = 0; i < sortedProducts.length; i++) {
    console.log("sorted by price...",sortedProducts[i]!.displayDetails());
}

// sort by name
const sortedProduct = sortProducts(products, "name");
for (let i = 0; i < sortedProduct.length; i++) {
    console.log("sorted by name...",sortedProduct[i]!.displayDetails());
}