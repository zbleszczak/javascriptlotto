import request from "supertest";
import app from "../app";

describe("Testy głównej trasy aplikacji", () => {
    it("Powinno zwrócić status 200 i poprawny tytuł", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.text).toContain("Witaj w Express.js z TypeScript!");
    });
});
