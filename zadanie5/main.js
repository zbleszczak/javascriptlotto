
import { Car } from './carModule.js';
import { User } from './userModule.js';

// Przykład użycia modułu Car
const car = new Car('Toyota', 'Camry');
console.log(car.getInfo());

// Przykład użycia modułu User
const user = new User('Jan', 30);
console.log(user.sayHello());
