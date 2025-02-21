function calculateCircleArea(radius = 1) {
    return Math.PI * radius * radius;
}

console.log(`Pole koła z domyślnym promieniem: ${calculateCircleArea()}`);
console.log(`Pole koła o promieniu 5: ${calculateCircleArea(5)}`);
console.log(`Pole koła o promieniu 3.5: ${calculateCircleArea(3.5)}`);
console.log(`Pole koła o promieniu 10: ${calculateCircleArea(10)}`);
