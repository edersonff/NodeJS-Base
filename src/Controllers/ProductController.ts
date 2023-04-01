import { Request, Response } from "express";
import { Product } from "../Entities/Product";
import conn from "../DB/conn";
import Controller from "./Controller";
import { Repository } from "typeorm";
import logger from "../Logs/logger";
import { putProduct } from "../Schemas/Product/put.schema";

export default class ProductController extends Controller {
  private repository: Repository<Product>;
  constructor() {
    super();
    this.repository = this.connection.getRepository(Product);
  }

  index(req: Request, res: Response) {
    const repo = this.repository;
    repo.find().then((products) => {
      res.send(products);
    });
  }
  get(req: Request, res: Response) {
    const repo = this.repository;
    repo
      .findOne({
        where: {
          id: Number(req.params.id),
        },
      })
      .then((product) => {
        res.send(product);
      });
  }
  async put(req: Request, res: Response) {
    const repo = this.repository;
    const body = await putProduct.validateAsync(req.body);

    repo
      .update(
        {
          id: Number(req.params.id),
        },
        body
      )
      .then((product) => {
        res.send(product);
      });
  }
  async destroy(req: Request, res: Response) {
    const repo = this.repository;
    repo
      .delete({
        id: Number(req.params.id),
      })
      .then((product) => {
        res.send(product);
      });
  }
}
