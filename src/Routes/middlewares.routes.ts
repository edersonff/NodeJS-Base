import { Router } from "express";
import handleErrors from "../Middlewares/HandleErrors";

const middlewaresRouter = Router();

middlewaresRouter.use(handleErrors);

export { middlewaresRouter };
