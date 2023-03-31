import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/", (req, res) => {
  res.send("Hello World!");
});

export { productsRouter };
