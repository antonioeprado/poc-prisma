import { prisma } from "@config";
import { Prisma, PrismaPromise, ShoppingList } from "@prisma/client";
import { UserProduct } from "@protocols";

function registerProduct(product: UserProduct): PrismaPromise<ShoppingList> {
  return prisma.shoppingList.create({ data: product });
}

function retrieveAllProductsByUser(
  userId: number
): PrismaPromise<ShoppingList[]> {
  return prisma.shoppingList.findMany({ where: { userId } });
}

function changeProductStatus(userId: number, id: number) {
  return prisma.shoppingList.updateMany({
    where: { id, userId },
    data: { isBought: true },
  });
}

const ShoppingListRepository = {
  registerProduct,
  retrieveAllProductsByUser,
  changeProductStatus,
};

export { ShoppingListRepository };
