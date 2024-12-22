import express, { Express } from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import chalk from "chalk";
import { router } from "./router/router";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", router);
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_DB_CONNECTION || "")
  .then(() => {
    console.log(chalk.cyanBright("Connected to MongoDB Atlas"));
  })
  .catch((error) => {
    console.error(chalk.red("Error connecting to MongoDB:", error));
  });

app.listen(process.env.PORT || 8000, () => {
  console.log(
    chalk.blue(`Listening on: http://localhost:${process.env.PORT || 8000}`)
  );
});
