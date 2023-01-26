import { Product, UserValidated } from "@protocols";
import {
  createProduct,
  displayAllProducts,
  markAsBought,
} from "@services/products-services";
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

export async function getProducts(req: Request, res: Response) {
  const { userId } = res.locals.user as UserValidated;
  try {
    const products = await displayAllProducts(userId);
    res.status(httpStatus.OK).send(products);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}

export async function buyProduct(req: Request, res: Response) {
  const { userId } = res.locals.user as UserValidated;
  const { id } = req.params;
  try {
    await markAsBought(userId, Number(id));
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    if (error === "Unauthorized") {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}
