import IBooks from "./books.interface";
import { Book } from "./books.model";

export const getAllBooksFromDb = async (): Promise<IBooks[]> => {
  return Book.find({});
};

export const getGenreBookFromDb = async (): Promise<IBooks[]> => {
  return Book.aggregate([
    {
      $match: { genre: "Fantasy" },
    },
  ]);
};

export const getPublisherFromDb = async (): Promise<IBooks[]> => {
  return Book.aggregate([
    {
      $match: { genre: "Sci-Fi", "publisher.name": "Roli Books" },
    },
  ]);
};

export const getRatingFeatureFromDb = async (): Promise<IBooks[]> => {
  return Book.aggregate([
    { $match: { rating: { $gte: 4 } } },
    {
      $addFields: {
        featured: {
          $switch: {
            branches: [
              {
                case: {
                  $and: [
                    {
                      $gte: ["$rating", 4],
                    },
                    {
                      $lt: ["$rating", 4.5],
                    },
                  ],
                },
                then: "Popular",
              },
              {
                case: {
                  $and: [
                    {
                      $gte: ["$rating", 4.5],
                    },
                  ],
                },
                then: "BestSeller",
              },
            ],
            default: "Moderate",
          },
        },
      },
    },
  ]);
};

export const updatePriceFromDb = async (): Promise<IBooks[]> => {
  return Book.aggregate([
    { $match: { publicationYear: 2020 } },
    {
      $project: {
        price: { $toInt: "$price" },
        publicationYear: 1,
      },
    },
  ]);
};