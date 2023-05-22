import IBooks from "./books.interface";
import { Book } from "./books.model";

export const getAllBooksFromDb = async (): Promise<IBooks[]> => {
  return Book.find({});
};
