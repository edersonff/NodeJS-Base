import { Request, Response } from "express";
import { Product } from "../Entities/Product";
import conn from "../DB/conn";
import { DataSource } from "typeorm";
import logger from "../Logs/logger";

export default class Controller {
  protected connection: DataSource;
  constructor() {
    conn
      .then(async (connection) => {
        this.connection = connection;
      })
      .catch((error) => {
        logger.error(error);
      });
  }
}
