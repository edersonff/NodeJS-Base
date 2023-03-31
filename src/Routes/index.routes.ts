import { Router } from "express";
import { productsRouter } from "./product.routes";
const router = Router();

router.use("/products", productsRouter);
router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

export { router };
