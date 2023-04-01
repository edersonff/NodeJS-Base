import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../Entity/product.entity";
import { putProduct } from "../Schemas/Product/put.schema";

export default class ProductController {
  static async index(req: Request, res: Response) {
    const productRepository = getRepository(Product);
    const products = await productRepository.find();
    res.send(products);
  }

  static async get(req: Request, res: Response) {
    const productRepository = getRepository(Product);
    const product = await productRepository.findOne({
      where: { code: Number(req.params.code) },
    });
    if (!product) return res.status(404).send("Produto não encontrado");
    res.send(product);
  }

  static async update(req: Request, res: Response) {
    const productRepository = getRepository(Product);
    const product = await productRepository.findOne({
      where: { code: Number(req.params.code) },
    });
    if (!product) return res.status(404).send("Produto não encontrado");

    const { error } = putProduct.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    productRepository.merge(product, req.body);
    const updatedProduct = await productRepository.save(product);
    res.send(updatedProduct);
  }

  static async destroy(req: Request, res: Response) {
    const productRepository = getRepository(Product);
    const product = await productRepository.findOne({
      where: { code: Number(req.params.code) },
    });
    if (!product) return res.status(404).send("Produto não encontrado");

    await productRepository.delete(product.id);
    res.send("Produto deletado com sucesso");
  }
}
