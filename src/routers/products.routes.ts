import {
  buyProduct,
  getProducts,
  postProduct,
} from "@controllers/products.controllers";
import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/", getProducts);
productsRouter.post("/register", postProduct);
productsRouter.patch("/buy/:id", buyProduct);

export { productsRouter };
