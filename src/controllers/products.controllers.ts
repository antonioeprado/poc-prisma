import { Product, UserValidated } from "@protocols";
import { createProduct } from "@services/products-services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export function postProduct(req: Request, res: Response) {
  const product = req.body as Product;
  const { userId } = res.locals.user as UserValidated;
  res.sendStatus(httpStatus.CREATED);
  try {
    createProduct(product, userId);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}
