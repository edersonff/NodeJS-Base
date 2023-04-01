import { Router } from "express";
import ProductController from "../Controllers/ProductController";
import handleErrors from "../Middlewares/HandleErrors";

const productsRouter = Router();

productsRouter.get(
  "/",
  handleErrors("Erro ao listar produtos"),
  ProductController.index
);
productsRouter.get(
  "/:code",
  handleErrors("Erro ao buscar produto"),
  ProductController.get
);
productsRouter.put(
  "/:code",
  handleErrors("Erro ao atualizar produto"),
  ProductController.update
);
productsRouter.delete(
  "/:code",
  handleErrors("Erro ao deletar produto"),
  ProductController.destroy
);

export { productsRouter };
