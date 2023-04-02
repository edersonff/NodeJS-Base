import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { MongoClient } from "mongodb";
import { putProduct } from "../Schemas/Product/put.schema";

const prisma = new PrismaClient();

const useDB = async () => {
  const mongo = await MongoClient.connect(String(process.env.DATABASE_URL));
  return mongo.db(
    process.env.DATABASE_URL?.split("/").pop()?.split("?")[0] || ""
  );
};

export default class ProductController {
  static async index(req: Request, res: Response) {
    const { index, limit, status } = req.query;

    const products = await prisma.product.findMany({
      skip: (Number(index) - 1) * Number(limit) || 0,
      take: Number(limit) || 10,
      where: status
        ? {
            status,
          }
        : ({} as any),
    });
    res.send(products);
  }

  static async get(req: Request, res: Response) {
    const db = await useDB();

    const product = await db.collection("Product").findOne({
      "data.code": String(req.params.code),
    });
    if (!product) return res.status(404).send("Produto não encontrado");
    res.send(product);
  }

  static async update(req: Request, res: Response) {
    const db = await useDB();

    const product = await db.collection("Product").findOne({
      "data.code": String(req.params.code),
    });
    if (!product) return res.status(404).send("Produto não encontrado");

    const { error } = putProduct.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const _id = String(product._id);

    const productJson = JSON.parse(JSON.stringify(product));
    delete productJson._id;

    const data = {
      data: Object.assign({}, productJson.data, req.body.data),
      imported_t: productJson.imported_t,
      status: req.body.status || productJson.status,
    };

    const updatedProduct = await prisma.product.update({
      where: { id: _id },
      data,
    });

    res.send(updatedProduct);
  }

  static async destroy(req: Request, res: Response) {
    const db = await useDB();

    const product = await db.collection("Product").findOne({
      "data.code": String(req.params.code),
    });

    if (!product) return res.status(404).send("Produto não encontrado");

    await prisma.product.update({
      where: {
        id: String(product._id),
      },
      data: {
        status: "trash",
      },
    });
    res.send("Produto deletado com sucesso");
  }
}
