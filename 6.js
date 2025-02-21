// 1. Funkcja sprawdzająca, czy liczba jest pierwsza
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

// 2. Funkcja generująca losowe hasło
function generatePassword(length = 8) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// 3. Funkcja odwracająca string
function reverseString(text) {
    return text.split('').reverse().join('');
}

// 4. Funkcja obliczająca średnią ocen
function calculateAverage(grades) {
    if (grades.length === 0) return 0;
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return (sum / grades.length).toFixed(2);
}

// 5. Funkcja sprawdzająca, czy słowo jest palindromem
function isPalindrome(word) {
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanWord === cleanWord.split('').reverse().join('');
}

console.log("Czy 17 jest liczbą pierwszą?", isPrime(17));
console.log("Wygenerowane hasło:", generatePassword(12));
console.log("Odwrócony tekst 'Hello':", reverseString("Hello"));
console.log("Średnia ocen [4,5,3,4,5]:", calculateAverage([4,5,3,4,5]));
console.log("Czy 'kajak' jest palindromem?", isPalindrome("kajak"));
