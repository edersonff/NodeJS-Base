// Config .env
import { config } from "dotenv";
config();

import express from "express";
import logger from "./Logs/logger";
import { router } from "./Routes/index.routes";
import tasks from "./Tasks";

const { PORT, DEBUG } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

tasks();
app.listen(PORT, () => {
  if (DEBUG) {
    logger.info("Server started on port 3000");
  }
});
