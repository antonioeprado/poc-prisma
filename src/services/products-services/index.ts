import { ShoppingList } from "@prisma/client";
import { Product, UserProduct, UserValidated } from "@protocols";
import { ShoppingListRepository } from "@repositories";

export async function createProduct(product: Product, userId: number) {
  const userProduct: UserProduct = { userId, ...product };
  const wasSuccessful = await ShoppingListRepository.registerProduct(
    userProduct
  );
  if (!wasSuccessful) {
    throw new Error(`Failed registering ${userProduct.productName}`);
  }
}

export async function displayAllProducts(
  userId: number
): Promise<ShoppingList[]> {
  const shoppingList = await ShoppingListRepository.retrieveAllProductsByUser(
    userId
  );
  if (!shoppingList) throw new Error("Unable to find products");
  return shoppingList;
}

export async function markAsBought(userId: number, id: number) {
  const { count } = await ShoppingListRepository.changeProductStatus(
    userId,
    id
  );

  if (!count) throw new Error("Product not found");
}
