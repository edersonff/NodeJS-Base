import { Router } from "express";
import { productsRouter } from "./product.routes";
import IndexController from "../Controllers/IndexController";
const router = Router();

router.use("/products", productsRouter);
router.get("/", IndexController.index);

export { router };
