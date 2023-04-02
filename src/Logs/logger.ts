import { createLogger, transports, format } from "winston";
const { LOG_LEVEL, LOGS } = process.env;

const logFolder = "./src/Logs/";
const logger = createLogger({
  level: LOG_LEVEL,
  format: format.json(),
  silent: process.argv.indexOf("--silent") >= 0 || LOGS === "false",
  transports: [
    new transports.Console({
      format: format.simple(),
    }),
    new transports.File({ filename: logFolder + "error.log", level: "error" }),
    new transports.File({ filename: logFolder + "combined.log" }),
  ],
});

export default logger;
