import { Request, Response } from "express";
import { getAllBooksFromDb } from "./books.service";

export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  const books = await getAllBooksFromDb();
  res.send(books);
};
