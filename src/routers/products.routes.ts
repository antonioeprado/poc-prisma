import { getProducts, postProduct } from "@controllers/products.controllers";
import { Router } from "express";

const productsRouter = Router();
productsRouter.get("/", getProducts);
productsRouter.post("/register", postProduct);

export { productsRouter };
