function calculateRectangleArea(width, height) {
    return width * height;
}

const calculateRectangleAreaArrow = (width, height) => width * height;

const szerokosc = 5;
const wysokosc = 3;

const pole1 = calculateRectangleArea(szerokosc, wysokosc);
console.log(`Wynik funkcji tradycyjnej: ${pole1}`);

const pole2 = calculateRectangleAreaArrow(szerokosc, wysokosc);
console.log(`Wynik funkcji strzałkowej: ${pole2}`);
