import { prisma } from "@config";
import { PrismaPromise, ShoppingList } from "@prisma/client";
import { UserProduct } from "@protocols";

export function registerProduct(
  product: UserProduct
): PrismaPromise<ShoppingList> {
  return prisma.shoppingList.create({ data: product });
}

export function retrieveAllProductsByUser(
  id: number
): PrismaPromise<ShoppingList[]> {
  return prisma.shoppingList.findMany({ where: { userId: id } });
}
