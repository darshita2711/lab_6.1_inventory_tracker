import PhysicalProduct  from "./models/PhysicalProduct.js";
import  DigitalProduct  from "./models/DigitalProduct.js";
import calculateTax  from "./utils/taxCalculator.js";

const products = [
    new PhysicalProduct("1", "Laptop", 1000, 2.5),
    new DigitalProduct("2", "TV", 2000, 44)
];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]!.displayDetails());
    console.log("Final Price: $" + calculateTax(products[i]!));
}