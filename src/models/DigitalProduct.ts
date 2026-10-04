import Product from "./Product.js";

class DigitalProduct extends Product {
    // filesize for digital product class 
    fileSize: number;
    constructor(sku: string,name: string,price: number,fileSize: number) 
    {   
        // passing sku,name and price from parent class
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    // override method with no tax in final price
    override getPriceWithTax(): number {
        return this.price;
    }

    // getter method formated in filesize in MB
    get formattedFileSize(): string {
        return `${this.fileSize} MB`;
    }
}

export default DigitalProduct;