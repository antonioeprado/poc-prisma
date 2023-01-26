import { ShoppingList } from "@prisma/client";
import { Product, UserProduct, UserValidated } from "@protocols";
import { registerProduct, retrieveAllProductsByUser } from "@repositories";

export async function createProduct(product: Product, id: number) {
  const userProduct: UserProduct = { userId: id, ...product };
  const wasSuccessful = await registerProduct(userProduct);
  if (!wasSuccessful) {
    throw new Error(`Failed registering ${userProduct.productName}`);
  }
}

export async function displayAllProducts(id: number): Promise<ShoppingList[]> {
  const shoppingList = await retrieveAllProductsByUser(id);
  if (!shoppingList) throw new Error("Unable to find products");
  return shoppingList;
}
