// Klasa bazowa
class Zwierze {
    constructor(masa, wiek) {
        this.masa = masa;
        this.wiek = wiek;
    }
    
    patrz() {
        console.log("Zwierzę patrzy");
    }
    
    oddychaj() {
        console.log("Zwierzę oddycha");
    }
}

// Klasy dziedziczące
class Ryba extends Zwierze {
    plywaj(predkosc) {
        console.log(`Ryba płynie z prędkością ${predkosc}`);
    }
    
    plyn() {
        console.log("Ryba płynie");
    }
}

class Ssak extends Zwierze {
    biegaj() {
        console.log("Ssak biegnie");
    }
}

class Ptak extends Zwierze {
    lec() {
        console.log("Ptak leci");
    }
}

class Pies extends Ssak {
    constructor(masa, wiek, rasa, kolorSiersci) {
        super(masa, wiek);
        this.rasa = rasa;
        this.kolorSiersci = kolorSiersci;
    }
    
    szczekaj() {
        console.log("Hau hau!");
    }
    
    dajLape() {
        console.log("Pies daje łapę");
    }
    
    aportuj() {
        console.log("Pies aportuje");
    }
}

// Przykład użycia
const pies = new Pies(15, 5, "Husky", "Szary");
pies.szczekaj();
pies.biegaj();
pies.patrz();
