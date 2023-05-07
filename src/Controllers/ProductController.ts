import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export default class ProductController {
  static async index(req: Request, res: Response) {
    res.send("Produtos listados com sucesso");
  }

  static async get(req: Request, res: Response) {
    res.send("Produto encontrado com sucesso");
  }

  static async update(req: Request, res: Response) {
    res.send("Produto atualizado com sucesso");
  }

  static async destroy(req: Request, res: Response) {
    res.send("Produto deletado com sucesso");
  }
}
