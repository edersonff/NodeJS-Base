import { NextFunction, Request, Response } from "express";
import logger from "../Logs/logger";
import translation from "../translations/common/pt-br";

const common = translation.common;

export default function handleErrors(message: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      next();
    } catch (error) {
      logger.error(message + ": " + error);
      const { description, code } = common.errors[500];
      return res.status(code).send(description);
    }
  };
}
