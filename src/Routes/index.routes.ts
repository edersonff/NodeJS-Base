import { Router } from "express";
import IndexController from "../Controllers/IndexController";
const router = Router();

router.get("/", IndexController.index);

export { router };
