// Config .env
import { config } from "dotenv";
config();

import express from "express";
import logger from "./Logs/logger";
import conn from "./DB/conn";
import { router } from "./Routes/index.routes";

const { PORT, DEBUG } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

conn
  .then(async (connection) => {
    // await connection.synchronize();
    logger.info("Successfully connected to database");
    app.listen(PORT, () => {
      if (DEBUG) {
        logger.info("Server started on port 3000");
      }
    });
  })
  .catch((err) => {
    logger.error(`Failed to connect to database: ${err}`);
  });
