import { Router } from "express";
import { getAllBooks } from "./books.controller";

const router: Router = Router();

router.get("/books", getAllBooks);

export default router;
