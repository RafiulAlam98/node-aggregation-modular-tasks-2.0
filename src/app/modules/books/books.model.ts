import mongoose, { Schema } from "mongoose";
import IBooks from "./books.interface";

const publisherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});
const reviewSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const bookSchema = new Schema<IBooks>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: [String],
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publicationYear: {
    type: Number,
    required: true,
  },
  publisher: {
    type: publisherSchema,
    required: true,
  },
  reviews: {
    type: [reviewSchema],
    required: true,
    default: [],
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  prices: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

export const Book = mongoose.model("Book", bookSchema);
