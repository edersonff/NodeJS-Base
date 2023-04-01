import { Router } from "express";
import { productsRouter } from "./product.routes";
import { middlewaresRouter } from "./middlewares.routes";
const router = Router();

router.use(middlewaresRouter);
router.use("/products", productsRouter);
router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

export { router };
