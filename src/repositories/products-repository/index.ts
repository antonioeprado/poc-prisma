import { prisma } from "@config";
import { UserProduct } from "@protocols";

export function registerProduct(product: UserProduct) {
  return prisma.shoppingList.create({ data: product });
}
