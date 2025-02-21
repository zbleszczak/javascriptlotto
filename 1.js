function calculateRectangleArea(width, height) {
    return width * height;
}

const szerokosc = 5;
const wysokosc = 3;
const pole = calculateRectangleArea(szerokosc, wysokosc);
console.log(`Pole prostokąta o szerokości ${szerokosc} i wysokości ${wysokosc} wynosi: ${pole}`);
