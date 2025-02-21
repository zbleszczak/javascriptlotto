let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    engine: {
        type: "V6",
        displacement: "3.5L"
    },
    features: {
        safety: {
            airbags: true,
            abs: true
        },
        entertainment: {
            radio: "Bluetooth",
            touchscreen: true
        }
    }
};

// Dekompozycja obiektu
const { 
    model,
    year,
    engine: { type },
    features: { 
        safety: { airbags },
        entertainment: { touchscreen }
    }
} = car;

// Wyświetlenie wyciągniętych wartości
console.log(model);         // "Camry"
console.log(year);          // 2022
console.log(type);         // "V6"
console.log(airbags);      // true
console.log(touchscreen);  // true
