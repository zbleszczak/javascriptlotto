import express from "express" ;
import { Application } from "express";
import path from "path";
import { router } from "./routes";

// Tworzenie aplikacji Express
const app: Application = express();
const PORT = 3000;

// Konfiguracja silnika widoków (Pug)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rejestracja tras
app.use("/", router);

// Start serwera
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});

export default app; // Eksport do testowania
