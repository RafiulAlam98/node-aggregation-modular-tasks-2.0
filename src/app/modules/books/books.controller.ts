import { Request, Response } from "express";
import {
  getAllBooksFromDb,
  getGenreBookFromDb,
  getPublisherFromDb,
  getRatingFeatureFromDb,
  updatePriceFromDb,
} from "./books.service";

export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  const books = await getAllBooksFromDb();
  res.send(books);
};

export const getGenreBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  const genreBook = await getGenreBookFromDb();
  res.send(genreBook);
};

export const getPublisher = async (
  req: Request,
  res: Response
): Promise<void> => {
  const publisher = await getPublisherFromDb();
  res.send(publisher);
};

export const getRatingFeature = async (
  req: Request,
  res: Response
): Promise<void> => {
  const feature = await getRatingFeatureFromDb();
  res.send(feature);
};

export const updatePrice = async (
  req: Request,
  res: Response
): Promise<void> => {
  const price = await updatePriceFromDb();
  res.send(price);
};