import { createLogger, transports, format } from "winston";
const { LOG_LEVEL } = process.env;

const logFolder = "./src/logs/";
const logger = createLogger({
  level: LOG_LEVEL,
  format: format.json(),
  transports: [
    new transports.Console({
      format: format.simple(),
    }),
    new transports.File({ filename: logFolder + "error.log", level: "error" }),
    new transports.File({ filename: logFolder + "combined.log" }),
  ],
});

export default logger;
