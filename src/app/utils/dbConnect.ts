import "dotenv/config";
import mongoose from "mongoose";
import log from "./logger";
const URI: string = "mongodb://127.0.0.1:27017/books-collection";

const dbConnection = async (): Promise<void> => {
  try {
    if (!URI) {
      log.error("No URI found in file");
    }
    await mongoose.connect(URI).then(() => log.info(`Database connected`));
  } catch (error) {}
};

export default dbConnection;
