import { postProduct } from "@controllers/products.controllers";
import { Router } from "express";

const productsRouter = Router();
productsRouter.post("/register", postProduct);

export { productsRouter };
