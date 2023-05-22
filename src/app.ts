import cors from "cors";
import express, { Application } from "express";
import booksRoute from "./app/modules/books/books.router";
import dbConnection from "./app/utils/dbConnect";
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.get("/api/v1/", (req, res) => {
  res.send("server is running");
});

app.use("/api/v1/", booksRoute);

export default app;
