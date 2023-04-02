import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { putProduct } from '../Schemas/Product/put.schema'

const prisma = new PrismaClient()

export default class ProductController {
  static async index(req: Request, res: Response) {
    const products = await prisma.product.findMany()
    res.send(products)
  }

  static async get(req: Request, res: Response) {
    const product = await prisma.product.findFirst({
      where: {   
        data: JSON.parse(JSON.stringify({
          code: Number(req.params.code),
        })),
      },
    })
    if (!product) return res.status(404).send("Produto não encontrado")
    res.send(product)
  }

  static async update(req: Request, res: Response) {
    const product = await prisma.product.findFirst({
      where: {    
        data: JSON.parse(JSON.stringify({
          code: Number(req.params.code),
        })),
      },
    })
    if (!product) return res.status(404).send("Produto não encontrado")

    const { error } = putProduct.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const updatedProduct = await prisma.product.update({
      where: { id: product.id },
      data: req.body,
    })
    res.send(updatedProduct)
  }

  static async destroy(req: Request, res: Response) {
    const product = await prisma.product.findFirst({
      where: {    
        data: JSON.parse(JSON.stringify({
          code: Number(req.params.code),
        })),
      },
    })
    if (!product) return res.status(404).send("Produto não encontrado")

    await prisma.product.delete({
      where: { id: product.id },
    })
    res.send("Produto deletado com sucesso")
  }
}
