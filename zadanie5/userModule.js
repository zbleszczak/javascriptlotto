
export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    sayHello() {
        return `Cześć, nazywam się ${this.name} i mam ${this.age} lat`;
    }
}
