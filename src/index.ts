import express from "express";
import winston from "winston";

const {PORT, LOG_LEVEL, DEBUG} = process.env;
// Logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  if(DEBUG){
    console.log("Server started on port 3000");
  }
});