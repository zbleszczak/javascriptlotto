
export class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    
    getInfo() {
        return `Samochód: ${this.brand} ${this.model}`;
    }
}
