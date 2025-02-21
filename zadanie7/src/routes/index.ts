import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    res.render("index", {
        title: "Strona główna",
        message: "Witaj w Express.js z TypeScript!"
    });
});

export { router };
