import { Router } from "express";
import {
  getAllBooks,
  getGenreBook,
  getPublisher,
  getRatingFeature,
  updatePrice,
} from "./books.controller";

const router: Router = Router();

router.get("/books", getAllBooks);
router.get("/genre", getGenreBook);
router.get("/publisher", getPublisher);
router.get("/featured", getRatingFeature);
router.get("/price", updatePrice);

export default router;
