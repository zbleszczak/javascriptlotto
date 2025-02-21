function sumNumbers(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(`Suma 2 liczb (2, 3): ${sumNumbers(2, 3)}`);
console.log(`Suma 4 liczb (1, 2, 3, 4): ${sumNumbers(1, 2, 3, 4)}`);
console.log(`Suma 6 liczb (10, 20, 30, 40, 50, 60): ${sumNumbers(10, 20, 30, 40, 50, 60)}`);
console.log(`Bez argumentów: ${sumNumbers()}`);

const liczby = [1, 2, 3, 4, 5];
console.log(`Suma liczb z tablicy: ${sumNumbers(...liczby)}`);
