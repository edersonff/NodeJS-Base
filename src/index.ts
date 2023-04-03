// Config .env
import { config } from "dotenv";
config();

import express from "express";
import logger from "./Logs/logger";
import { router } from "./Routes/index.routes";
import tasks from "./Tasks";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger_output.json";

const { PORT, DEBUG } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

tasks();
app.listen(PORT, () => {
  if (DEBUG) {
    logger.info("Server started on port " + PORT);
  }
});
